import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const Component = () => {
  return <div>Example</div>;
};

describe("Example", () => {
  it("renders", () => {
    render(<Component />);
    expect(screen.getByText("Example")).toBeInTheDocument();
  });
});
