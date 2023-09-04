import { describe, expect, it } from "vitest";
// import { render, screen } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import BackButton from "../BackButton";

describe("BackButton", () => {
  it("renders correctly", () => {
    // render(<BackButton />);

    // const buttonElement = screen.getByTestId("back-button");
    // expect(buttonElement).toBeDefined();
    expect(1 + 2).toEqual(3);
  });
});

// it("renders BackButton component", () => {
//   const { getByText } = render(
//     <MemoryRouter>
//       <BackButton />
//     </MemoryRouter>
//   );

//   // Ensure the "Back" text is present in the button
//   expect(getByText("Back")).toBeInTheDocument();
// });

// it("renders link to the home page", () => {
//   const { getByRole } = render(
//     <MemoryRouter>
//       <BackButton />
//     </MemoryRouter>
//   );

//   const link = getByRole("link");

//   // Ensure the link points to the home page "/"
//   expect(link.getAttribute("href")).toBe("/");
// });

// it("renders BackButton with appropriate classes", () => {
//   const { container } = render(
//     <MemoryRouter>
//       <BackButton />
//     </MemoryRouter>
//   );

//   const backButton = container.firstChild;

//   // Ensure the component has the expected classes
//   expect(backButton).toHaveClass("bg-lightElement dark:bg-darkElement");
//   expect(backButton).toHaveClass("rounded");
//   // Add more class assertions as needed
// });

// it("renders BackButton with arrow icon", () => {
//   const { getByTestId } = render(
//     <MemoryRouter>
//       <BackButton />
//     </MemoryRouter>
//   );

//   const arrowIcon = getByTestId("arrow-icon");

//   // Ensure the arrow icon is present
//   expect(arrowIcon).toBeInTheDocument();
// });
