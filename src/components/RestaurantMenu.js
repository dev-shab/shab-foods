import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { restaurantId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + restaurantId);
    const json = await data.json();
    setRestaurantInfo(json?.data);
  };

  if (!restaurantInfo) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards?.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - Rs{" "}
              {item?.card?.info?.finalPrice / 100 ||
                item?.card?.info?.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
