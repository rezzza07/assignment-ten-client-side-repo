import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router";

const Banner = () => {
  const slides = [
    {
      image:"",
      title: "VIBRANT VISIONS",
      subtitle: "Where imagination meets color and emotion.",
      artist: "By Ava Morales",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1920&q=80",
      title: "URBAN EXPRESSION",
      subtitle: "Street meets fine art — creativity beyond walls.",
      artist: "By J. Kwan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80",
      title: "LIGHT & FORM",
      subtitle: "Modern sculpture illuminated by digital design.",
      artist: "By M. Dutta",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const gradient =
    "bg-gradient-to-r from-[#ff6a00] via-[#ee0979] to-[#7f00ff]";

  return (
    <section className="">
      <div className="relative overflow-hidden h-[520px] md:h-[620px] lg:h-[760px] flex items-center bg-[#0b0b0b]">

        {/* Background images (fade transition) */}
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`slide-${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            } filter brightness-[0.9] contrast-[1.1]`}
          />
        ))}

        {/* Subtle left gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

        {/* Text content */}
        <div className="relative z-20 max-w-5xl px-8 md:px-16 lg:px-44">
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
            <div className="text-sm uppercase tracking-widest text-gray-300 font-medium">
              Trending Artist
            </div>

            <h1 className="text-white font-extrabold leading-tight text-4xl md:text-6xl lg:text-7xl drop-shadow-lg">
              {slides[current].title}
            </h1>

            <p className="max-w-2xl text-gray-300 text-base md:text-lg leading-relaxed">
              {slides[current].subtitle}
            </p>

            <p className="text-sm italic text-gray-400">
              {slides[current].artist}
            </p>

            <div className="flex items-center gap-5 mt-4">
              <Link to="/artworks">
                <span
                  className={`inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-md font-semibold text-white cursor-pointer transition-all duration-300 ${gradient} hover:opacity-90 shadow-lg`}
                >
                  View Details
                </span>
              </Link>

              <Link to="/artists">
                <span className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-md font-semibold text-white cursor-pointer transition-all duration-300 border border-white/40 hover:bg-white/10">
                  Discover Artists
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation buttons with more side space */}
        <button
          onClick={prevSlide}
          className={`absolute left-10 md:left-16 top-1/2 -translate-y-1/2 z-30 text-white p-4 rounded-full transition-all duration-300 ${gradient} hover:opacity-90 shadow-lg`}
        >
          <FaChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className={`absolute right-10 md:right-16 top-1/2 -translate-y-1/2 z-30 text-white p-4 rounded-full transition-all duration-300 ${gradient} hover:opacity-90 shadow-lg`}
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Banner;
