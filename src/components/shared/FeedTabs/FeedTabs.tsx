import "./FeedTabs.scss";

import type { NewsFeedTab } from "@/types/layout";

type FeedTabsProps = {
  value: NewsFeedTab;
  onChange: (tab: NewsFeedTab) => void;
};

function FeedTabs({ value, onChange }: FeedTabsProps) {
  return (
    <div className="feed-tabs">
      <button
        className={`feed-tabs__item ${value === "featured" ? "feed-tabs__item--active" : ""}`}
        onClick={() => onChange("featured")}
      >
        Featured
      </button>

      <button
        className={`feed-tabs__item ${value === "latest" ? "feed-tabs__item--active" : ""}`}
        onClick={() => onChange("latest")}
      >
        Latest
      </button>
    </div>
  );
}

export default FeedTabs;
