import React, { useEffect, useState } from "react";

const Switch = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        p-[3px]
        rounded-full
        bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700
        shadow-md
        transition active:scale-95
      "
    >
      <div
        className="
          w-10 h-10
          rounded-full
          flex items-center justify-center
          bg-base-100
          transition
        "
      >
        {theme === "light" ? (
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <defs>
              <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#7e22ce" />
              </linearGradient>
            </defs>

            <circle cx="12" cy="12" r="4" fill="url(#sunGradient)" />

            <circle cx="12" cy="4" r="1.2" fill="url(#sunGradient)" />
            <circle cx="12" cy="20" r="1.2" fill="url(#sunGradient)" />
            <circle cx="4" cy="12" r="1.2" fill="url(#sunGradient)" />
            <circle cx="20" cy="12" r="1.2" fill="url(#sunGradient)" />

            <circle cx="6.5" cy="6.5" r="1.2" fill="url(#sunGradient)" />
            <circle cx="17.5" cy="6.5" r="1.2" fill="url(#sunGradient)" />
            <circle cx="6.5" cy="17.5" r="1.2" fill="url(#sunGradient)" />
            <circle cx="17.5" cy="17.5" r="1.2" fill="url(#sunGradient)" />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <defs>
              <linearGradient id="moonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#7e22ce" />
              </linearGradient>
            </defs>
            <path
              fill="url(#moonGradient)"
              d="M21.64 13.35A9 9 0 1110.65 2.36a7 7 0 1011 11z"
            />
          </svg>
        )}
      </div>
    </button>
  );
};

export default Switch;
