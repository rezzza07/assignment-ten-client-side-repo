import React, { useEffect, useState } from "react";

const Switch = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="inline-block">
      <button
        onClick={toggleTheme}
        className="relative w-22 h-12 rounded-full transition-all duration-300
          flex items-center
          shadow-md
          bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700
          p-1
        "
      >
        {/* Track */}
        <div
          className={`absolute inset-[3px] rounded-full transition-all duration-300
            ${theme === "light" ? "bg-white" : "bg-[#1b2537]"}
          `}
        ></div>

        {/* Handle */}
        <div
          className={`relative z-10 w-9 h-9 rounded-full bg-base-100 flex items-center justify-center
            transition-all duration-300
            ${theme === "light" ? "translate-x-0" : "translate-x-11"}
          `}
        >
          {theme === "light" ? (
            <svg
              className="w-7 h-7 animate-pulse"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2 -2 28 28"
            >
              <defs>
                <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="50%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>

    
              <circle cx="12" cy="12" r="5" fill="url(#sunGrad)" />

             
              {[...Array(16)].map((_, idx) => {
                const angle = (idx * 22.5 * Math.PI) / 180; // 360 / 16
                const x1 = 12 + Math.cos(angle) * 7;
                const y1 = 12 + Math.sin(angle) * 7;
                const x2 = 12 + Math.cos(angle) * 11;
                const y2 = 12 + Math.sin(angle) * 11;

                return (
                  <line
                    key={idx}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#sunGrad)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                );
              })}
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <defs>
                <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#7e22ce" />
                </linearGradient>
              </defs>

              <path
                fill="url(#moonGrad)"
                d="M21.64 13.35A9 9 0 1110.65 2.36a7 7 0 1011 11z"
              />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
};

export default Switch;
