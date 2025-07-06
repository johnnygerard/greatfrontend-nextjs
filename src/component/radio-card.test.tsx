import { RadioCard } from "@/component/radio-card";
import { faker } from "@faker-js/faker";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const SPACE = "\x20";

describe("RadioCard component", () => {
  let label: string;

  beforeEach(() => {
    label = faker.word.noun();
  });

  it("renders", () => {
    render(<RadioCard label={label} />);
  });

  it("renders a radio input", () => {
    const { getByRole } = render(<RadioCard label={label} />);
    expect(getByRole("radio")).toBeInTheDocument();
  });

  it("renders a radio input with correct initial state", () => {
    const { getByRole } = render(<RadioCard label={label} />);
    const radioInput = getByRole("radio");
    expect(radioInput).not.toBeChecked();
    expect(radioInput).not.toHaveFocus();
    expect(radioInput).not.toBeDisabled();
  });

  it("can be disabled", () => {
    const { getByRole } = render(<RadioCard label={label} disabled />);
    const radioInput = getByRole("radio");
    expect(radioInput).toBeDisabled();
  });

  it("can be focused", async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<RadioCard label={label} />);
    const radioInput = getByRole("radio");

    await user.tab();
    expect(radioInput).toHaveFocus();
  });

  it("can be checked", async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<RadioCard label={label} />);
    const radioInput = getByRole("radio");

    await user.tab();
    await user.keyboard(SPACE);
    expect(radioInput).toBeChecked();
  });

  it("has a text label", () => {
    const { getByLabelText } = render(<RadioCard label={label} />);
    expect(getByLabelText(label)).toBeInTheDocument();
  });

  it("focuses and checks the radio input when the label is clicked", async () => {
    const user = userEvent.setup();
    const { getByLabelText, getByRole } = render(<RadioCard label={label} />);
    const radioInput = getByRole("radio");

    await user.click(getByLabelText(label));
    expect(radioInput).toBeChecked();
    expect(radioInput).toHaveFocus();
  });
});
