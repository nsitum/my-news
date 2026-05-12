import { useOutletContext, useParams } from "react-router-dom";

import { useNewsFeed } from "@/api/useNewsFeed";
import NewsFeed from "@/components/ui/NewsFeed";
import {
  type Category,
  categoryLabels,
  isValidCategory,
} from "@/constants/news";
import NotFoundPage from "@/pages/NotFound";
import type { OutletContextType } from "@/types/layout";

const CATEGORY_PAGE_ARTICLE_LIMIT = 16;

function CategoryPage() {
  const { category: categorySlug } = useParams<{ category: Category }>();
  const { activeSearch } = useOutletContext<OutletContextType>();

  const resolvedCategory = isValidCategory(categorySlug) ? categorySlug : null;

  const { data, isLoading, error } = useNewsFeed({
    category: resolvedCategory ?? "general",
    searchQuery: activeSearch || undefined,
    pageSize: CATEGORY_PAGE_ARTICLE_LIMIT,
    enabled: !!resolvedCategory,
  });

  if (!resolvedCategory) {
    return <NotFoundPage />;
  }

  return (
    <NewsFeed
      articles={data?.articles ?? []}
      isLoading={isLoading}
      error={error}
      label={
        activeSearch
          ? "Search results"
          : `Category: ${categoryLabels[resolvedCategory]}`
      }
    />
  );
}

export default CategoryPage;
