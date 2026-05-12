import { useInfiniteQuery } from "@tanstack/react-query";

import { getLatestNews } from "@/services/nyTimes";

const LATEST_NEWS_LIMIT = 20;

export function useLatestNews() {
  return useInfiniteQuery({
    queryKey: ["latest-news"],

    queryFn: ({ pageParam = 0 }) =>
      getLatestNews({
        offset: pageParam,
        limit: LATEST_NEWS_LIMIT,
      }),

    initialPageParam: 0,

    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.results.length < LATEST_NEWS_LIMIT) {
        return;
      }

      return lastPageParam + LATEST_NEWS_LIMIT;
    },
  });
}
