import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    restaurantData;
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        className="w-60 h-52 rounded-lg"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="py-1">{cuisines.join(", ")}</h4>
      <h4 className="py-1">{avgRating}</h4>
      <h4 className="py-1">{costForTwo}</h4>
      <h4 className="py-1">{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
