import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";

import LanguageSwitcher from "../components/LanguageSwitcher";

describe("App", () => {
  it("renders the App component", () => {
    render(<LanguageSwitcher />);
    expect(screen.getByAltText("English")).toBeInTheDocument();
    expect(screen.getByAltText("Pseudolocalize")).toBeInTheDocument();
    
    // screen.debug(); // prints out the jsx in the App component unto the command line
  });

  it("change language", () => {
    render(<LanguageSwitcher />);
    const btn1 = screen.getByRole("button", { name: /English/ });
    const btn2 = screen.getByRole("button", { name: /Pseudolocalize/ });
    expect(btn1).toBeDisabled();
    expect(btn2).toBeEnabled();
  });
});
