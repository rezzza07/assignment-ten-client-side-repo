import React, { useState } from "react";

const Like = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(120); // starting like count

  const handleLike = () => {
    setLiked(!liked);
    setCount((prev) => prev + (liked ? -1 : 1));
  };

  return (
    <button
      onClick={handleLike}
      className={`group flex items-center gap-3 rounded-full border border-pink-600 px-5 py-2 font-semibold transition-all duration-300
        ${liked ? "bg-pink-600 text-white" : "text-pink-600 hover:bg-pink-50"}`}
    >
      {/* Like Text */}
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        {liked ? "LIKED" : "LIKE"}
      </span>

      {/* Heart Icon */}
      <svg
        className={`size-6 transition-all duration-300 ${
          liked
            ? "fill-pink-500 scale-110"
            : "fill-none stroke-pink-600 group-hover:scale-110"
        }`}
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 
          2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 
          3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>

      {/* Like Count */}
      <span
        className={`text-sm font-medium transition-all duration-300 ${
          liked ? "text-white" : "text-pink-600"
        }`}
      >
        {count}
      </span>
    </button>
  );
};

export default Like;
