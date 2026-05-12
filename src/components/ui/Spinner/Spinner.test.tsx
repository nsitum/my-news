import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Spinner from "./Spinner";

describe("Spinner", () => {
  it("renders a spinner root and circle", () => {
    const { container } = render(<Spinner />);

    expect(container.querySelector(".spinner")).toBeInTheDocument();
    expect(container.querySelector(".spinner__circle")).toBeInTheDocument();
  });

  it("applies size modifier classes for sm, default md, and lg", () => {
    const { container: small } = render(<Spinner size="sm" />);
    const { container: medium } = render(<Spinner />);
    const { container: large } = render(<Spinner size="lg" />);

    expect(small.querySelector(".spinner")).toHaveClass("spinner--sm");
    expect(medium.querySelector(".spinner")).toHaveClass("spinner--md");
    expect(large.querySelector(".spinner")).toHaveClass("spinner--lg");
  });
});
