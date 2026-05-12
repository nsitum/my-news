import FeedbackState from "@/components/ui/FeedbackState";

function NotFoundPage() {
  return (
    <div className="news">
      <div className="news__label">Not found</div>

      <div className="news__content">
        <FeedbackState
          icon="!"
          title="Page not found"
          description="This page doesn’t exist, or the link may be wrong."
        />
      </div>
    </div>
  );
}

export default NotFoundPage;
