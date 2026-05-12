import "./AppLayout.scss";

import { useState } from "react";
import { Outlet } from "react-router-dom";

import HomepageBanner from "@/components/shared/HomepageBanner";
import Navbar from "@/components/shared/Navbar";
import Menu from "@/components/ui/Menu";
import MobileMenu from "@/components/ui/MobileMenu";
import { mediaQueryMinDesktop } from "@/constants/mediaQueries";
import { SEARCH_DEBOUNCE_MS } from "@/constants/ui";
import { useDebounce } from "@/hooks/useDebounce";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const BANNER_DISMISSED_KEY = "homepage-banner-dismissed";

function AppLayout() {
  const [isBannerVisible, setIsBannerVisible] = useState(() => {
    return localStorage.getItem(BANNER_DISMISSED_KEY) !== "true";
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [desktopSearch, setDesktopSearch] = useState("");
  const debouncedSearch = useDebounce(search, SEARCH_DEBOUNCE_MS);

  const isDesktop = useMediaQuery(mediaQueryMinDesktop);
  const activeSearch = isDesktop ? desktopSearch : debouncedSearch;

  const resetLayoutState = () => {
    setSearch("");
    setDesktopSearch("");
    setIsMenuOpen(false);
  };

  const handleDismissBanner = () => {
    localStorage.setItem(BANNER_DISMISSED_KEY, "true");
    setIsBannerVisible(false);
  };

  const handleSearchSubmit = () => {
    setDesktopSearch(search);
    setIsMenuOpen(false);
  };

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`layout ${isBannerVisible ? "layout--with-banner" : ""}`}>
      <div className="layout__header">
        {isBannerVisible && <HomepageBanner onDismiss={handleDismissBanner} />}

        <Navbar
          isMenuOpen={isMenuOpen}
          onMenuOpen={handleMenuOpen}
          search={search}
          onSearchChange={setSearch}
          onSearchSubmit={handleSearchSubmit}
        />
      </div>

      <div className="layout__content">
        <aside className="layout__sidebar">
          <Menu onNavigate={resetLayoutState} />
        </aside>

        {!isDesktop && (
          <MobileMenu
            isOpen={isMenuOpen}
            onClose={handleMenuClose}
            onNavigate={resetLayoutState}
            search={search}
            onSearchChange={setSearch}
            onSearchSubmit={handleSearchSubmit}
          />
        )}

        <main className="layout__main">
          <Outlet context={{ activeSearch, isDesktop }} />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
