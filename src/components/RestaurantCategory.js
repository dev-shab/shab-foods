import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { data, displayItems, setShowIndex } = props;
  const { title, itemCards } = data;

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {title} ({itemCards?.length || 0})
          </span>
          <span>{displayItems ? "⬆️" : "⬇️"}</span>
        </div>
        {displayItems && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
