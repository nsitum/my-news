import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import FeedTabs from "./FeedTabs";

describe("FeedTabs", () => {
  it("renders both tab labels", () => {
    const onChange = vi.fn();
    render(<FeedTabs value="featured" onChange={onChange} />);

    expect(screen.getByRole("button", { name: "Featured" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Latest" })).toBeInTheDocument();
  });

  it("applies the active state to the selected tab", () => {
    const onChange = vi.fn();
    const { rerender } = render(
      <FeedTabs value="featured" onChange={onChange} />,
    );

    expect(screen.getByRole("button", { name: "Featured" })).toHaveClass(
      "feed-tabs__item--active",
    );
    expect(screen.getByRole("button", { name: "Latest" })).not.toHaveClass(
      "feed-tabs__item--active",
    );

    rerender(<FeedTabs value="latest" onChange={onChange} />);

    expect(screen.getByRole("button", { name: "Featured" })).not.toHaveClass(
      "feed-tabs__item--active",
    );
    expect(screen.getByRole("button", { name: "Latest" })).toHaveClass(
      "feed-tabs__item--active",
    );
  });

  it("calls onChange with the correct tab when the other tab is clicked", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<FeedTabs value="featured" onChange={onChange} />);

    await user.click(screen.getByRole("button", { name: "Latest" }));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("latest");
  });
});
