import "@/components/ui/NewsFeed/NewsFeed.scss";

import { useOutletContext } from "react-router-dom";

import FavoritesIcon from "@/assets/icons/favorites.svg?react";
import ArticlesList from "@/components/ui/ArticlesList";
import FeedbackState from "@/components/ui/FeedbackState";
import { useFavorites } from "@/context/FavoritesContext";

type ContextType = {
  activeSearch: string;
};

function FavoritesPage() {
  const { activeSearch } = useOutletContext<ContextType>();
  const { favorites } = useFavorites();

  const filteredFavorites = favorites.filter((article) => {
    if (!activeSearch.trim()) {
      return true;
    }

    return `${article.title} ${article.description ?? ""}`
      .toLowerCase()
      .includes(activeSearch.trim().toLowerCase());
  });

  const renderContent = () => {
    if (!filteredFavorites.length) {
      return (
        <FeedbackState
          icon={<FavoritesIcon />}
          title="No favorites yet"
          description="Articles you save will appear here."
        />
      );
    }

    return <ArticlesList articles={filteredFavorites} showLatestList={false} />;
  };

  return (
    <div className="news">
      <div className="news__label">
        {activeSearch ? "Search results" : "Favorites"}
      </div>

      <div className="news__content">{renderContent()}</div>
    </div>
  );
}

export default FavoritesPage;
