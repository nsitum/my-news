import "./FeedbackState.scss";

type FeedbackStateProps = {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
};

function FeedbackState({
  icon = "!",
  title = "Something went wrong",
  description = "Please try again later.",
}: FeedbackStateProps) {
  return (
    <div className="feedback-state">
      <div className="feedback-state__icon">{icon}</div>

      <h2 className="feedback-state__title">{title}</h2>

      <p className="feedback-state__description">{description}</p>
    </div>
  );
}

export default FeedbackState;
