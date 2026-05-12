import "./HomepageBanner.scss";

type HomepageBannerProps = {
  onDismiss: () => void;
};

function HomepageBanner({ onDismiss }: HomepageBannerProps) {
  const handleGet = () => {
    alert("Thanks for your interest!");
    onDismiss();
  };

  return (
    <section className="homepage-banner">
      <div className="homepage-banner__content">
        <div className="homepage-banner__texts">
          <p className="homepage-banner__title">Make MyNews your homepage</p>

          <p className="homepage-banner__description">
            Every day discover what&apos;s trending on the internet!
          </p>
        </div>

        <div className="homepage-banner__actions">
          <button
            type="button"
            className="homepage-banner__button homepage-banner__button--ghost"
            onClick={onDismiss}
          >
            No, thanks
          </button>

          <button
            type="button"
            className="homepage-banner__button homepage-banner__button--primary"
            onClick={handleGet}
          >
            GET
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomepageBanner;
