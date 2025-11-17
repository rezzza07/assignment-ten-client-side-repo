import React from "react";
import { FaStar } from "react-icons/fa";

const Favourite = ({ isFavourite, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 active:scale-95 ${
        isFavourite
          ? "bg-yellow-500 text-black shadow-lg"
          : "border border-white/40 text-white hover:bg-white/10"
      }`}
    >
      <FaStar
        size={18}
        className={`${isFavourite ? "fill-black" : "fill-yellow-400"}`}
      />
      {isFavourite ? "Added to Favourites" : "Add to Favourites"}
    </button>
  );
};

export default Favourite;
