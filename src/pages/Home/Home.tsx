import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import FeedTabs from "@/components/shared/FeedTabs";
import NewsFeed from "@/components/ui/NewsFeed";
import { useHomeFeed } from "@/hooks/useHomeFeed";
import type { NewsFeedTab, OutletContextType } from "@/types/layout";

function HomePage() {
  const [newsFeedTab, setNewsFeedTab] = useState<NewsFeedTab>("featured");

  const { activeSearch, isDesktop } = useOutletContext<OutletContextType>();

  const { articles, isLoading, error } = useHomeFeed({
    searchQuery: activeSearch,
  });

  const activeTab = activeSearch.trim() || isDesktop ? "featured" : newsFeedTab;

  return (
    <>
      {!isDesktop && (
        <div className="home__tabs">
          <FeedTabs value={activeTab} onChange={setNewsFeedTab} />
        </div>
      )}

      <NewsFeed
        articles={articles}
        isLoading={isLoading}
        error={error}
        label={activeSearch ? "Search results" : "News"}
        tab={activeTab}
        showLatestList={!activeSearch.trim()}
      />
    </>
  );
}

export default HomePage;
