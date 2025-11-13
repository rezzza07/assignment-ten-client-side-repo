import React from "react";

const Button = () => {
  return (
    <button
      className="relative overflow-hidden rounded-md border-2 border-pink-600 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
    >
      <span className="relative z-10">Register</span>
      <span className="absolute inset-0 translate-x-[-100%] bg-white opacity-0 blur-md transition-transform duration-500 ease-linear hover:translate-x-full hover:opacity-30"></span>
    </button>
  );
};

export default Button;
