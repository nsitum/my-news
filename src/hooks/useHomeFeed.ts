import useHomepageFeed from "@/api/useHomepageFeed";
import useSearchNews from "@/api/useSearchNews";
import { categories } from "@/constants/news";
import type { Article } from "@/types/news";

function dedupeArticles(articles: Article[]) {
  return articles.filter((article, index, self) => {
    return (
      index ===
      self.findIndex((item) => {
        return item.url === article.url;
      })
    );
  });
}

type HomeFeedProps = {
  searchQuery: string;
};

export function useHomeFeed({ searchQuery }: HomeFeedProps) {
  const trimmedSearch = searchQuery?.trim() ?? "";

  const searchNewsQuery = useSearchNews({
    query: trimmedSearch,
  });

  // Skip parallel homepage fetches while a search query is active.
  const homepageQueries = useHomepageFeed({
    enabled: !trimmedSearch,
  });

  if (trimmedSearch) {
    const articles = dedupeArticles(searchNewsQuery.data?.articles ?? []);

    return {
      articles,
      isLoading: searchNewsQuery.isLoading,
      error: searchNewsQuery.error,
    };
  }

  const isLoading = homepageQueries.some((result) => {
    return result.isLoading;
  });

  const error = homepageQueries.find((result) => {
    return result.error;
  })?.error;

  const flattenedArticles = homepageQueries.flatMap((result, index) => {
    const category = categories[index];

    return (
      result.data?.articles.map((article) => ({
        ...article,
        category,
      })) ?? []
    );
  });

  const sortedArticles = flattenedArticles.sort((a, b) => {
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });

  const articles = dedupeArticles(sortedArticles);

  return {
    articles,
    isLoading,
    error,
  };
}
