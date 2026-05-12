import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, useLocation } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

import { PATH_HOME, pathCategory } from "@/constants/routes";

import Menu from "./Menu";

function Pathname() {
  return <span data-testid="pathname">{useLocation().pathname}</span>;
}

describe("Menu", () => {
  it("renders every main navigation item", () => {
    render(
      <MemoryRouter>
        <Menu onNavigate={() => {}} />
      </MemoryRouter>,
    );

    expect(screen.getByRole("button", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "General" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Business" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Health" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Science" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sports" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Technology" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Favorites" })).toBeInTheDocument();
  });

  it("calls onNavigate when a menu item is activated", async () => {
    const user = userEvent.setup();
    const onNavigate = vi.fn();

    render(
      <MemoryRouter initialEntries={[PATH_HOME]}>
        <Pathname />
        <Menu onNavigate={onNavigate} />
      </MemoryRouter>,
    );

    await user.click(screen.getByRole("button", { name: "Business" }));

    expect(onNavigate).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId("pathname")).toHaveTextContent(
      pathCategory("business"),
    );
  });

  it("marks the item that matches the current route as active", () => {
    render(
      <MemoryRouter initialEntries={[pathCategory("science")]}>
        <Menu onNavigate={() => {}} />
      </MemoryRouter>,
    );

    expect(screen.getByRole("button", { name: "Science" })).toHaveClass("menu-item--active");
    expect(screen.getByRole("button", { name: "Home" })).not.toHaveClass("menu-item--active");
  });
});
