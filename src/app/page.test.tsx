import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";

describe("Page", () => {
  test("renders the page", () => {
    render(<Home />);
    expect(
      screen.getByText((content) =>
        content.startsWith("Get started by editing")
      )
    ).toBeInTheDocument();
  });
});
