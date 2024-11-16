import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantData from "../utils/restaurants.json";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(
    restaurantData.restaurants
  );

  const handleButtonClick = () => {
    setRestaurantList(
      restaurantData.restaurants.filter(
        (restaurant) => restaurant.avgRating >= 4.5
      )
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-button" onClick={handleButtonClick}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurantData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
