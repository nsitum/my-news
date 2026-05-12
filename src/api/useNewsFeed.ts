import { useQuery } from "@tanstack/react-query";

import type { Category } from "@/constants/news";
import { getNewsFeed } from "@/services/news";

type UseNewsFeedProps = {
  category?: Category;
  page?: number;
  pageSize?: number;
  searchQuery?: string;
  enabled?: boolean;
};

function useNewsFeed({
  category,
  page,
  pageSize,
  searchQuery,
  enabled = true,
}: UseNewsFeedProps) {
  return useQuery({
    queryKey: ["news-feed", category, page, pageSize, searchQuery],
    enabled,

    queryFn: () => {
      return getNewsFeed({
        category,
        page,
        pageSize,
        searchQuery,
      });
    },

    select: (data) => ({
      ...data,
      articles: data.articles.map((article) => {
        return { ...article, category };
      }),
    }),
  });
}

export { useNewsFeed };
