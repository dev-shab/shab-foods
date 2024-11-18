import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div>
            <div className="py-2">
              <span className="text-xl">{item?.card?.info?.name}</span>
              <span className="text-xl">
                {" "}
                - ₹{" "}
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </span>
            </div>
            <p className="text-xs w-5/6">{item?.card?.info?.description}</p>
          </div>
          <div className="p-2 w-40">
            <div className="absolute w-24">
              <button className="p-2 bg-black text-white shadow-lg absolute rounded-lg">
                Add +
              </button>
            </div>
            {item?.card?.info?.imageId && (
              <img src={CDN_URL + item?.card?.info?.imageId} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
