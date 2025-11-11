import React from "react";

const Art = ({ art }) => {
  const { image, title, name, category } = art;

  return (
    
    <div
      className="relative w-[380px] h-[380px] rounded-xl overflow-hidden cursor-pointer group"
      style={{
        // Outer gradient border using a pseudo-like effect with padding & background clip
        padding: "2px",
        background: "linear-gradient(to right, #f97316, #ec4899, #8b5cf6)", // orange-500, pink-500, purple-700
      }}
    > 
      {/* Inner card with solid background to show border */}
      <div className="bg-gray-900 rounded-lg w-full h-full flex flex-col overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
        {/* Image */}
        <div className="relative">
          <img src={image} alt={title} className="w-full h-52 object-cover rounded-t-lg" />

          {/* Category */}
          <span className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col justify-between h-[calc(100%-208px)]">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 mb-2">
            {title}
          </h2>
          <p className="text-gray-400 text-sm mb-4">{name}</p>
          <button className="mt-auto w-full py-2 font-semibold rounded-md text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 hover:opacity-90 transition-all duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Art;
