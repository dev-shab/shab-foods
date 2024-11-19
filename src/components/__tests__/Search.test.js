import { act } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/restaurantMock.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Body Component", () => {
  it("should search restaurant list for Pizza", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    expect(screen.getAllByTestId("restaurantCard").length).toBe(8);
    const searchButton = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "Pizza" } });
    fireEvent.click(searchButton);
    expect(screen.getAllByTestId("restaurantCard").length).toBe(2);
  });

  it("should search for top rated restaurants", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    expect(screen.getAllByTestId("restaurantCard").length).toBe(8);
    const topRatedButton = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });
    fireEvent.click(topRatedButton);
    expect(screen.getAllByTestId("restaurantCard").length).toBe(2);
  });
});
