import { describe, expect, it } from "vitest";
import Trainer from "../components/Trainer";
import { render } from "@testing-library/react";



describe("Trainer component", () => {
  it("should render props", () => {
    const testComponent = render(<Trainer name={"Jordan Harrison"} age={32} specialty={"Java"} />);

    expect(testComponent.getByText("Jordan Harrison")).toBeInTheDocument();
    expect(testComponent.getByText("Age: 32")).toBeInTheDocument();
    expect(testComponent.getByText("Specialty: Java")).toBeInTheDocument();

  });

  it("should render image if image prop is provided", () => {
    const testComponent = render(
      <Trainer
        name={"Jordan Harrison"}
        age={32}
        specialty={"Java"}
        image={"https://via.placeholder.com/150"}
      />
    );

    expect(testComponent.getByRole("img")).toBeInTheDocument();
    expect(testComponent.getByRole("img")).toHaveAttribute("src", "https://via.placeholder.com/150");
    expect(testComponent.getByRole("img")).toHaveAttribute("alt", "Jordan Harrison");
  });

  it("should not render image if image prop is not provided", () => {
    const testComponent = render(
      <Trainer
        name={"Jordan Harrison"}
        age={32}
        specialty={"Java"}
      />
    );

    expect(testComponent.queryByRole("img")).not.toBeInTheDocument();
  });
});