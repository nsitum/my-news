import { useQuery } from "@tanstack/react-query";

import { searchNews } from "@/services/news";

const SEARCH_RESULTS_LIMIT = 30;

type UseSearchNewsProps = {
  query: string;
};

function useSearchNews({ query }: UseSearchNewsProps) {
  return useQuery({
    queryKey: ["search-news", query],

    queryFn: () =>
      searchNews({
        query,
        pageSize: SEARCH_RESULTS_LIMIT,
      }),

    enabled: !!query,
  });
}

export default useSearchNews;
