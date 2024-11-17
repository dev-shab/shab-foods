import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAURANT_API } from "../utils/constants";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

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

  if (!onlineStatus) {
    return <h1>Oops! looks like you are offline</h1>;
  }

  if (!restaurantList.length) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={handleButtonClick}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
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
