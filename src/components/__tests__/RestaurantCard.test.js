import { render, screen, fireEvent } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/restaurantCardMock.json";
import "@testing-library/jest-dom";

describe("Restaurent Card Component", () => {
  it("should be rendered with props", () => {
    render(<RestaurantCard restaurantData={MOCK_DATA} />);
    const restaurantName = screen.getByText("KFC");
    expect(restaurantName).toBeInTheDocument();
  });
});
