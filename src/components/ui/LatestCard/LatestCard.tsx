import "./LatestCard.scss";

import type { NYTimesArticle } from "@/types/nyTimes";

type LatestCardProps = {
  article: NYTimesArticle;
};

const formatTime = (publishedDate: string) => {
  return new Date(publishedDate).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

function LatestCard({ article }: LatestCardProps) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="latest-card"
    >
      <span className="latest-card__time">
        {formatTime(article.published_date)}
      </span>

      <h3 className="latest-card__title">{article.title}</h3>
    </a>
  );
}

export default LatestCard;
