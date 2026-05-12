import { useQueries } from "@tanstack/react-query";

import { categories } from "@/constants/news";
import { getNewsFeed } from "@/services/news";

const HOMEPAGE_CATEGORY_ARTICLE_LIMIT = 5;

type UseHomepageFeedProps = {
  enabled: boolean;
};

function useHomepageFeed({ enabled }: UseHomepageFeedProps) {
  return useQueries({
    queries: categories.map((category) => ({
      queryKey: ["news-feed", category],

      queryFn: () =>
        getNewsFeed({
          category,
          pageSize: HOMEPAGE_CATEGORY_ARTICLE_LIMIT,
        }),

      enabled,
    })),
  });
}

export default useHomepageFeed;
