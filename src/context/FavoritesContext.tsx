import { createContext, useContext, useState } from "react";

import type { Article } from "@/types/news";

const FAVORITES_KEY = "favorite-articles";

type FavoritesContextType = {
  favorites: Article[];
  toggleFavorite: (article: Article) => void;
  isFavorite: (url: string) => boolean;
};

type FavoritesProviderProps = {
  children: React.ReactNode;
};

const FavoritesContext = createContext<FavoritesContextType | null>(null);

const getUpdatedFavorites = (favorites: Article[], article: Article) => {
  const exists = favorites.some((favoriteArticle) => {
    return favoriteArticle.url === article.url;
  });

  if (exists) {
    return favorites.filter((favoriteArticle) => {
      return favoriteArticle.url !== article.url;
    });
  }

  return [article, ...favorites];
};

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<Article[]>(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);

    return stored ? JSON.parse(stored) : [];
  });

  const toggleFavorite = (article: Article) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = getUpdatedFavorites(prevFavorites, article);

      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const isFavorite = (url: string) => {
    return favorites.some((favoriteArticle) => {
      return favoriteArticle.url === url;
    });
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }

  return context;
}
