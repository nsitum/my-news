import "./Navbar.scss";

import Logo from "@/components/shared/Logo";
import Search from "@/components/shared/Search";

type NavbarProps = {
  isMenuOpen: boolean;
  onMenuOpen: () => void;
  search: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit: () => void;
};

function Navbar({
  isMenuOpen,
  onMenuOpen,
  search,
  onSearchChange,
  onSearchSubmit,
}: NavbarProps) {
  return (
    <header className="navbar">
      <div className="navbar__top">
        <div className="navbar__logo navbar__logo--mobile">
          <Logo size="sm" />
        </div>

        <div className="navbar__logo navbar__logo--desktop">
          <Logo size="md" />
        </div>

        <button
          className={`navbar__hamburger ${
            isMenuOpen ? "navbar__hamburger--open" : ""
          }`}
          onClick={onMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="navbar__search">
        <Search
          value={search}
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
        />
      </div>
    </header>
  );
}

export default Navbar;
