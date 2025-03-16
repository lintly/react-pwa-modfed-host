import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";

import Header from "../components/Header";

// Mock the remote component
// vi.mock("parts/VendorAddresses", () => ({
//   __esModule: true,
//   default: () => <div>Mock Vendor Addresses</div>,
// }));


beforeEach(() => {
  vi.clearAllMocks();
  vi.resetModules(); // Clears module cache
});

describe("Header", () => {
  it("renders the Header component", async () => {
    render(<Header />);
    expect(screen.getByText(/welcome/)).toBeInTheDocument();

    // screen.debug(); // prints out the jsx in the App component unto the command line
  });
});
