import type { NewsFeedResponse } from "@/types/news";

import { apiFetch } from "./api";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

type GetNewsFeedParams = {
  category?: string;
  page?: number;
  pageSize?: number;
  searchQuery?: string;
};

type SearchNewsParams = {
  query: string;
  page?: number;
  pageSize?: number;
};

async function getNewsFeed({
  category,
  page = 1,
  pageSize = 10,
  searchQuery,
}: GetNewsFeedParams) {
  const params = new URLSearchParams({
    apiKey: API_KEY,
    country: "us",
    page: String(page),
    pageSize: String(pageSize),
  });

  if (category) {
    params.append("category", category);
  }

  if (searchQuery) {
    params.append("q", searchQuery);
  }

  return apiFetch<NewsFeedResponse>(
    `https://newsapi.org/v2/top-headlines?${params.toString()}`,
  );
}

async function searchNews({
  query,
  page = 1,
  pageSize = 30,
}: SearchNewsParams) {
  const params = new URLSearchParams({
    apiKey: API_KEY,
    q: query,
    language: "en",
    sortBy: "publishedAt",

    page: String(page),
    pageSize: String(pageSize),
  });

  return apiFetch<NewsFeedResponse>(
    `https://newsapi.org/v2/everything?${params.toString()}`,
  );
}

export { getNewsFeed, searchNews };
