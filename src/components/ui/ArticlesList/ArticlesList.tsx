import "./ArticlesList.scss";

import { Fragment } from "react/jsx-runtime";

import ArticleCard from "@/components/ui/ArticleCard";
import LatestList from "@/components/ui/LatestList";
import { useFavorites } from "@/context/FavoritesContext";
import type { Article } from "@/types/news";

type ArticlesListProps = {
  articles: Article[];
  showLatestList?: boolean;
};

function ArticlesList({ articles, showLatestList = true }: ArticlesListProps) {
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="articles-list">
      {articles.map((article, index) => (
        <Fragment key={article.url}>
          <ArticleCard
            article={article}
            favorite={isFavorite(article.url)}
            onToggleFavorite={toggleFavorite}
          />

          {/* After 2nd card: desktop grid expects Latest here (column 3, rows 1–2). */}
          {showLatestList && index === 1 && <LatestList />}
        </Fragment>
      ))}
    </div>
  );
}

export default ArticlesList;
