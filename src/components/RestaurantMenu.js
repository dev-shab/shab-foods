import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const restaurantInfo = useRestaurantMenu(restaurantId);

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
