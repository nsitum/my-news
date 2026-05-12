import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, it, vi } from "vitest";

import Search from "./Search";

function ControlledSearch() {
  const [value, setValue] = useState("");
  return <Search value={value} onChange={setValue} onSubmit={() => {}} />;
}

describe("Search", () => {
  it("displays the controlled value in the input", () => {
    const onChange = vi.fn();
    const onSubmit = vi.fn();
    render(<Search value="climate news" onChange={onChange} onSubmit={onSubmit} />);

    expect(screen.getByPlaceholderText("Search news")).toHaveValue("climate news");
  });

  it("calls onChange when the user types", async () => {
    const user = userEvent.setup();
    render(<ControlledSearch />);

    await user.type(screen.getByPlaceholderText("Search news"), "ai");

    expect(screen.getByPlaceholderText("Search news")).toHaveValue("ai");
  });

  it("submits when the search button is clicked", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const onSubmit = vi.fn();
    render(<Search value="test" onChange={onChange} onSubmit={onSubmit} />);

    await user.click(screen.getByRole("button", { name: /^search$/i }));

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it("submits when Enter is pressed in the input", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const onSubmit = vi.fn();
    render(<Search value="test" onChange={onChange} onSubmit={onSubmit} />);

    await user.click(screen.getByPlaceholderText("Search news"));
    await user.keyboard("{Enter}");

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
