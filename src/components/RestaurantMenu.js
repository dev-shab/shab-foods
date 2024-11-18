import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { restaurantId } = useParams();
  const restaurantInfo = useRestaurantMenu(restaurantId);

  if (!restaurantInfo) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[2]?.card?.card?.info;
  const categories =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      ({ card }) => card?.card?.["@type"].includes("v2.ItemCategory")
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          displayItems={index === showIndex ? true : false}
          setShowIndex={() =>
            index === showIndex ? setShowIndex(null) : setShowIndex(index)
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
