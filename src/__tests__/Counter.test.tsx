import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";

import Counter from "../components/Counter";

beforeEach(() => {
  vi.clearAllMocks();
  vi.resetModules(); // Clears module cache
});

describe("App", () => {
  it("renders the App component", async () => {
    render(<Counter />);
    expect(screen.getByText(/Count Total/)).toBeInTheDocument();

    // screen.debug(); // prints out the jsx in the App component unto the command line
  });
});
