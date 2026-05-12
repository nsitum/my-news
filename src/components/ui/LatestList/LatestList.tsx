import "./LatestList.scss";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import { useLatestNews } from "@/api/useLatestNews";
import chevronRight from "@/assets/icons/chevron-right.svg";
import latestIndicator from "@/assets/icons/latest-indicator.svg";
import FeedbackState from "@/components/ui/FeedbackState";
import LatestCard from "@/components/ui/LatestCard";
import Spinner from "@/components/ui/Spinner";

function LatestList() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "200px",
  });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useLatestNews();

  const articles =
    data?.pages
      .flatMap((page) => {
        return page.results;
      })
      .filter((article) => {
        return article.title && article.url && article.published_date;
      }) ?? [];

  const hasArticles = articles.length > 0;
  const hasPaginationError = error && hasArticles;

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage && !hasPaginationError) {
      fetchNextPage();
    }
  }, [
    inView,
    hasNextPage,
    isFetchingNextPage,
    hasPaginationError,
    fetchNextPage,
  ]);

  const renderBodyContent = () => {
    if (isLoading) {
      return (
        <div className="latest-list__feedback">
          <Spinner size="md" />
        </div>
      );
    }

    if (error && !hasArticles) {
      return (
        <div className="latest-list__feedback">
          <FeedbackState
            icon="!"
            title="Failed to load latest news"
            description="Please try again later."
          />
        </div>
      );
    }

    if (!articles.length) {
      return (
        <div className="latest-list__feedback">
          <FeedbackState
            icon="🗞️"
            title="No latest news found"
            description="Please check back later."
          />
        </div>
      );
    }

    return (
      <div ref={scrollContainerRef} className="latest-list__items">
        {articles.map((article) => (
          <LatestCard key={article.url} article={article} />
        ))}

        <div ref={ref} className="latest-list__loader">
          {isFetchingNextPage && <Spinner size="sm" />}

          {hasPaginationError && (
            <p className="latest-list__error">Failed to load more news.</p>
          )}

          {!hasNextPage && !hasPaginationError && (
            <p className="latest-list__end">You’ve reached the end.</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="latest-list">
      <div className="latest-list__header">
        <img src={latestIndicator} alt="" className="latest-list__indicator" />

        <h2 className="latest-list__title">Latest news</h2>
      </div>

      <div className="latest-list__body">{renderBodyContent()}</div>

      <div className="latest-list__footer">
        <a
          href="https://www.nytimes.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="latest-list__link"
        >
          <span>See all news</span>

          <img src={chevronRight} alt="" className="latest-list__chevron" />
        </a>
      </div>
    </section>
  );
}

export default LatestList;
