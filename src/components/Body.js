import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9121181&lng=77.6445548&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const list =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (restaurant) => restaurant.info
      );
    setRestaurantList(list);
    setFilteredRestaurants(list);
  };

  const handleButtonClick = () => {
    setFilteredRestaurants(
      restaurantList.filter((restaurant) => restaurant.avgRating >= 4.5)
    );
  };

  const handleSearchClick = () => {
    setFilteredRestaurants(
      restaurantList.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  if (!restaurantList.length) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearchClick}>Search</button>
        </div>
        <button className="filter-button" onClick={handleButtonClick}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurantData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
