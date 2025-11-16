
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        "star-twinkle": {
          "0%": { transform: "scale(1)" },
          "40%": { transform: "scale(1.2)" },
          "80%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
        cloud: {
          "0%": { transform: "translateX(-32px)" },
          "40%": { transform: "translateX(-36px)" },
          "80%": { transform: "translateX(-28px)" },
          "100%": { transform: "translateX(-32px)" },
        },
      },
      animation: {
        "star-twinkle": "star-twinkle 2s infinite",
        cloud: "cloud 6s infinite",
      },
    },
  },
  plugins: [],
};
