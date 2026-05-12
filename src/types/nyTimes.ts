type LatestNewsResponse = {
  results: NYTimesArticle[];
  num_results: number;
};

type NYTimesArticle = {
  title: string;
  abstract: string;
  url: string;
  published_date: string;

  byline?: string;
  section?: string;

  multimedia?: {
    url: string;
    format: string;
    height: number;
    width: number;
  }[];
};

export { type LatestNewsResponse, type NYTimesArticle };
