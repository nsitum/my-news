import type { Category } from "./news";

const PATH_HOME = "/";
const PATH_CATEGORY = "/category";
const PATH_FAVORITES = "/favorites";

const PATH_CATEGORY_PARAM = `${PATH_CATEGORY}/:category`;

function pathCategory(slug: Category) {
  return `${PATH_CATEGORY}/${slug}`;
}

export {
  PATH_CATEGORY,
  PATH_CATEGORY_PARAM,
  PATH_FAVORITES,
  PATH_HOME,
  pathCategory,
};
