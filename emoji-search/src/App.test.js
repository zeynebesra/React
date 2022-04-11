import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
// });

//App
test("App Component must work", () => {
  render(<App />);
});

//Emoji
describe("Emoji Results Testing", () => {
  let buttons, input;
  beforeEach(() => {
    render(<App />);
    buttons = screen.getAllByTestId("emoji_row");
    input = screen.getByTestId("input");
  });

  test("Emoji List must be rendered", () => {
    expect(buttons.length).toEqual(20);
  });

  test("Emoji list must be rendered up to input value", () => {
    const inputValue = "Rage";
    userEvent.type(input, inputValue);
    const emoji = screen.getByText(inputValue);
    expect(emoji).toBeInTheDocument();
  });

  test("Emoji must be copied when clicked", () => {
    expect(buttons[0]).toHaveAttribute("data-clipboard-text");
  });
});

//Header

describe("Header tests", () => {
  beforeEach(() => {
    render(<Header />);
  });
  test("Header must be in the screen", () => {
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
  test("Header text must be in the header", () => {
    const headerText = screen.getByText(/Emoji Search/i);
    expect(headerText).toBeInTheDocument();
  });
  test("2 Header image must be in the header", () => {
    const HeaderImage = screen.getAllByRole("img");
    expect(HeaderImage.length).toEqual(2);
  });
});
