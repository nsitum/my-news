import type { LatestNewsResponse } from "@/types/nyTimes";

import { apiFetch } from "./api";

const API_KEY = import.meta.env.VITE_NYTIMES_API_KEY;

type GetLatestNewsParams = {
  limit?: number;
  offset?: number;
};

export async function getLatestNews({
  limit = 20,
  offset = 0,
}: GetLatestNewsParams = {}) {
  const params = new URLSearchParams({
    "api-key": API_KEY,
    limit: limit.toString(),
    offset: offset.toString(),
  });

  return apiFetch<LatestNewsResponse>(
    `https://api.nytimes.com/svc/news/v3/content/all/all.json?${params.toString()}`,
  );
}
