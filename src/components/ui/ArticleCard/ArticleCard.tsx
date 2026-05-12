import "./ArticleCard.scss";

import HeartFilledIcon from "@/assets/icons/heart-filled.svg?react";
import HeartOutlineIcon from "@/assets/icons/heart-outline.svg?react";
import fallbackNewsImage from "@/assets/images/news-placeholder.png";
import type { Article } from "@/types/news";

type ArticleCardProps = {
  article: Article;
  favorite: boolean;
  onToggleFavorite: (article: Article) => void;
  variant?: "default" | "breaking" | "ad";
};

const formatAuthor = (author: string | null) => {
  if (!author) {
    return "Unknown author";
  }

  const authors = author.split(",");

  const visibleAuthors = authors.slice(0, 2).join(", ");
  const remainingAuthorsCount = authors.length - 2;

  if (remainingAuthorsCount > 0) {
    return `${visibleAuthors} +${remainingAuthorsCount}`;
  }

  return visibleAuthors;
};

function ArticleCard({
  article,
  favorite,
  onToggleFavorite,
  variant = "default",
}: ArticleCardProps) {
  const isBreaking = variant === "breaking";
  const isAd = variant === "ad";

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = fallbackNewsImage;
  };

  const handleFavoriteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    onToggleFavorite(article);
  };

  const renderFavoriteButton = () => {
    return (
      <button
        type="button"
        className={`article-card__favorite-button ${
          favorite ? "article-card__favorite-button--visible" : ""
        }`}
        onClick={handleFavoriteClick}
      >
        {favorite ? (
          <HeartFilledIcon className="article-card__favorite-icon article-card__favorite-icon--active" />
        ) : (
          <HeartOutlineIcon className="article-card__favorite-icon" />
        )}
      </button>
    );
  };

  const renderBreakingCard = () => {
    return (
      <>
        {renderFavoriteButton()}
        <div className="article-card__breaking-content">
          <span className="article-card__breaking-badge">Breaking</span>
          <h3 className="article-card__breaking-title">{article.title}</h3>
          <p className="article-card__breaking-author">
            {formatAuthor(article.author)}
          </p>
        </div>
      </>
    );
  };

  const renderDefaultCard = () => {
    return (
      <>
        <div className="article-card__image-wrapper">
          {isAd && <span className="article-card__ad-badge">AD</span>}

          {renderFavoriteButton()}

          <img
            src={article.urlToImage || fallbackNewsImage}
            alt={article.title}
            className="article-card__image"
            onError={handleImageError}
          />
        </div>

        <div className="article-card__content">
          <span className="article-card__category">
            {isAd ? "Programmatic/Native Ad" : article.category || "General"}
          </span>
          <h3 className="article-card__title">{article.title}</h3>
          <p className="article-card__author">{formatAuthor(article.author)}</p>
        </div>
      </>
    );
  };

  return (
    <a
      href={article.url ?? ""}
      target="_blank"
      rel="noopener noreferrer"
      className={`article-card article-card--${variant}`}
    >
      {isBreaking ? renderBreakingCard() : renderDefaultCard()}
    </a>
  );
}

export default ArticleCard;
