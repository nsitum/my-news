import "./Menu.scss";

import { useLocation, useNavigate } from "react-router-dom";

import BusinessIcon from "@/assets/icons/business.svg?react";
import FavoritesIcon from "@/assets/icons/favorites.svg?react";
import GeneralIcon from "@/assets/icons/general.svg?react";
import HealthIcon from "@/assets/icons/health.svg?react";
import HomeIcon from "@/assets/icons/home.svg?react";
import ScienceIcon from "@/assets/icons/science.svg?react";
import SportsIcon from "@/assets/icons/sports.svg?react";
import TechnologyIcon from "@/assets/icons/technology.svg?react";
import MenuItem from "@/components/ui/MenuItem";
import { PATH_FAVORITES, PATH_HOME, pathCategory } from "@/constants/routes";

const menuItems = [
  {
    icon: HomeIcon,
    label: "Home",
    path: PATH_HOME,
  },
  {
    icon: GeneralIcon,
    label: "General",
    path: pathCategory("general"),
  },
  {
    icon: BusinessIcon,
    label: "Business",
    path: pathCategory("business"),
  },
  {
    icon: HealthIcon,
    label: "Health",
    path: pathCategory("health"),
  },
  {
    icon: ScienceIcon,
    label: "Science",
    path: pathCategory("science"),
  },
  {
    icon: SportsIcon,
    label: "Sports",
    path: pathCategory("sports"),
  },
  {
    icon: TechnologyIcon,
    label: "Technology",
    path: pathCategory("technology"),
  },
  {
    icon: FavoritesIcon,
    label: "Favorites",
    path: PATH_FAVORITES,
  },
];

type MenuProps = {
  onNavigate: () => void;
};

function Menu({ onNavigate }: MenuProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    onNavigate();
    navigate(path);
  };

  return (
    <nav className="menu" aria-label="Main navigation">
      {menuItems.map((item) => (
        <MenuItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          active={pathname === item.path}
          onClick={() => handleNavigate(item.path)}
        />
      ))}
    </nav>
  );
}

export default Menu;
