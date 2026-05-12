import "./MenuItem.scss";

type MenuItemProps = {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

function MenuItem({ icon: Icon, label, active = false, onClick }: MenuItemProps) {
  return (
    <button
      className={`menu-item${active ? " menu-item--active" : ""}`}
      onClick={onClick}
    >
      <Icon className="menu-item__icon" />

      <span className="menu-item__label">{label}</span>
    </button>
  );
}

export default MenuItem;
