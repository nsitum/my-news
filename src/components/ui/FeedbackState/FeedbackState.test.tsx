import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import FeedbackState from "./FeedbackState";

describe("FeedbackState", () => {
  it("renders the title and description", () => {
    render(
      <FeedbackState title="Nothing here" description="Try a different search." />,
    );

    expect(screen.getByRole("heading", { name: "Nothing here" })).toBeInTheDocument();
    expect(screen.getByText("Try a different search.")).toBeInTheDocument();
  });

  it("renders the default icon when none is provided", () => {
    render(<FeedbackState title="Error" />);

    expect(screen.getByText("!")).toBeInTheDocument();
  });

  it("renders a custom icon", () => {
    render(
      <FeedbackState
        icon={<span data-testid="custom-icon">X</span>}
        title="Done"
        description="Ok"
      />,
    );

    expect(screen.getByTestId("custom-icon")).toHaveTextContent("X");
  });
});
