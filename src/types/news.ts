type Article = {
  source: {
    id: string | null;
    name: string;
  };

  category?: string;

  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

type NewsFeedResponse = {
  status: "ok" | "error";
  totalResults: number;
  articles: Article[];
};

export type { Article, NewsFeedResponse };
