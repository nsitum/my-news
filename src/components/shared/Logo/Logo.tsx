import "./Logo.scss";

type LogoProps = {
  size?: "sm" | "md";
};

function Logo({ size = "sm" }: LogoProps) {
  return (
    <h1 className={`logo logo--${size}`}>
      <span className="logo__red">My</span>
      News
    </h1>
  );
}

export default Logo;
