import "./MobileMenu.scss";

import Logo from "@/components/shared/Logo";
import Search from "@/components/shared/Search";
import Menu from "@/components/ui/Menu";

type MobileMenuProps = {
  isOpen: boolean;
  onNavigate: () => void;
  onClose: () => void;
  search: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit: () => void;
};

function MobileMenu({
  isOpen,
  onNavigate,
  onClose,
  search,
  onSearchChange,
  onSearchSubmit,
}: MobileMenuProps) {
  return (
    <div className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}>
      <button type="button" className="mobile-menu__close" onClick={onClose}>
        <span />
        <span />
      </button>

      <div className="mobile-menu__content">
        <div className="mobile-menu__top">
          <Logo size="md" />
        </div>

        <div className="mobile-menu__search">
          <Search
            value={search}
            onChange={onSearchChange}
            onSubmit={onSearchSubmit}
          />
        </div>

        <div className="mobile-menu__nav">
          <Menu onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
