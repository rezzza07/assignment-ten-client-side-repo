import React from "react";
import { FaStar } from "react-icons/fa";

const Favourite = ({ isFavourite, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 active:scale-95 border ${
        isFavourite
          ? "bg-yellow-500 border-yellow-500 text-black shadow-lg"
          : "border-gray-500/30 text-inherit hover:bg-gray-500/10"
      }`}
    >
      <FaStar
        size={18}
        className={`${isFavourite ? "text-black" : "text-yellow-500"}`}
      />
      <span>
        {isFavourite ? "Added to Favourites" : "Add to Favourites"}
      </span>
    </button>
  );
};

export default Favourite;