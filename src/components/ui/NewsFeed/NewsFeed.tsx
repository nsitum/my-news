import "./NewsFeed.scss";

import ArticlesList from "@/components/ui/ArticlesList";
import FeedbackState from "@/components/ui/FeedbackState";
import LatestList from "@/components/ui/LatestList";
import Spinner from "@/components/ui/Spinner";
import type { NewsFeedTab } from "@/types/layout";
import type { Article } from "@/types/news";

type NewsFeedProps = {
  articles: Article[];
  isLoading: boolean;
  error: Error | null | undefined;
  label: string;
  tab?: NewsFeedTab;
  showLatestList?: boolean;
};

function NewsFeed({
  articles,
  isLoading,
  error,
  label,
  tab,
  showLatestList = false,
}: NewsFeedProps) {
  const renderBody = () => {
    if (tab === "latest") {
      return <LatestList />;
    }

    if (isLoading) {
      return <Spinner size="lg" />;
    }

    if (error) {
      return (
        <FeedbackState
          icon="!"
          title="Failed to load news"
          description="Please try again later."
        />
      );
    }

    if (!articles.length) {
      return (
        <FeedbackState
          icon="!"
          title="No news found"
          description="Try searching for something else."
        />
      );
    }

    return <ArticlesList articles={articles} showLatestList={showLatestList} />;
  };

  return (
    <div className="news">
      <div className="news__label">{label}</div>

      <div className="news__content">{renderBody()}</div>
    </div>
  );
}

export default NewsFeed;
