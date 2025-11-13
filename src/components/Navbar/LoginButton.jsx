import React from "react";

const Button = () => {
  return (
    <button
      className="relative overflow-hidden rounded-md bg-gray-900 border-2 border-pink-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-gradient-to-r hover:from-orange-500 hover:via-pink-500 hover:to-purple-700"
    >
      <span className="relative z-10">Log In</span>
      <span className="absolute inset-0 translate-x-[-100%] bg-white opacity-0 blur-md transition-transform duration-500 ease-linear hover:translate-x-full hover:opacity-30"></span>
    </button>
  );
};

export default Button;

