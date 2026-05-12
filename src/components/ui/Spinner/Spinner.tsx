import "./Spinner.scss";

type SpinnerProps = {
  size?: "sm" | "md" | "lg";
};

function Spinner({ size = "md" }: SpinnerProps) {
  return (
    <div className={`spinner spinner--${size}`}>
      <div className="spinner__circle" />
    </div>
  );
}

export default Spinner;
