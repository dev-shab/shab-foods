import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

jest.mock("../utils/shab_foods.png", () => "mock-image-url.png");

describe("Header Component", () => {
  it("should render a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "login" });
    expect(loginButton).toBeInTheDocument();
  });

  it("should render cart items with 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
  });

  it("should render a logout button on login click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "logout" });

    expect(logoutButton).toBeInTheDocument();
  });
});
