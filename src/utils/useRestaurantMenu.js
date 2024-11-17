import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

export const useRestaurantMenu = (restaurantId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + restaurantId);
    const json = await data.json();
    setRestaurantInfo(json?.data);
  };

  return restaurantInfo;
};
