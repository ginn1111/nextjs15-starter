import { render, screen, waitFor } from "@testing-library/react";
import Home from "@/app/[locale]/page";

describe("Page", () => {
  it("renders a heading", async () => {
    const jsx = await Home();
    render(jsx);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
