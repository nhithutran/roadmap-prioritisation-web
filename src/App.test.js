import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
});

test("Initiative Dashboard", () => {
  render(<App />);
  const linkElement = screen.getByText(/Barack Obama/i);
  expect(linkElement).toBeInTheDocument();
});
