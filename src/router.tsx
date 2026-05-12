import { Route, Routes } from "react-router-dom";

import {
  PATH_CATEGORY_PARAM,
  PATH_FAVORITES,
  PATH_HOME,
} from "@/constants/routes";
import AppLayout from "@/layouts/AppLayout";
import CategoryPage from "@/pages/Category";
import FavoritesPage from "@/pages/Favorites";
import HomePage from "@/pages/Home";
import NotFoundPage from "@/pages/NotFound";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={PATH_HOME} element={<HomePage />} />
        <Route path={PATH_CATEGORY_PARAM} element={<CategoryPage />} />
        <Route path={PATH_FAVORITES} element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
