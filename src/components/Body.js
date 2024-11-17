import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAURANT_API } from "../utils/constants";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);
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
          <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id}>
            <RestaurantCard restaurantData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
