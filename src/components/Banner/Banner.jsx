import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router";

const Banner = () => {
  const slides = [
    {
      image: "https://i.ibb.co.com/k6Vs82x2/Gemini-Generated-Image-q4ubspq4ubspq4ub.png",
      title: "VIBRANT VISIONS",
      subtitle: "Where imagination meets color and emotion.",
      artist: "By Ava Morales",
    },
    {
      image: "https://artgas.au/wp-content/uploads/2024/02/Urban_Pop_Art-1.webp",
      title: "URBAN EXPRESSION",
      subtitle: "Street meets fine art — creativity beyond walls.",
      artist: "By J. Kwan",
    },
    {
      image: "https://img.freepik.com/free-photo/abstract-wallpaper-background-mixed-color-acrylic-paint-textured_53876-134374.jpg?semt=ais_hybrid&w=740&q=80",
      title: "LIGHT & FORM",
      subtitle: "Modern sculpture illuminated by digital design.",
      artist: "By M. Dutta",
    },
  ];

  const [current, setCurrent] = useState(0);


  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(slideInterval);
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const gradient = "bg-gradient-to-r from-[#ff6a00] via-[#ee0979] to-[#7f00ff]";

  return (
    <section className="w-full">
      <div className="relative overflow-hidden h-[550px] md:h-[650px] lg:h-[780px] flex items-center bg-[#0b0b0b]">
        

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1]"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-20"></div>

    
        <div className="relative z-30 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col gap-5 md:gap-7 lg:gap-9 max-w-3xl">
            <div className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/70 font-semibold animate-pulse">
              Trending Artworks
            </div>

            <h1 className="text-white font-extrabold leading-[1.1] text-5xl md:text-7xl lg:text-8xl drop-shadow-2xl italic tracking-tighter">
              {slides[current].title}
            </h1>

            <p className="max-w-xl text-white/90 text-lg md:text-xl leading-relaxed font-medium">
              {slides[current].subtitle}
            </p>

            <p className="text-sm md:text-base italic text-white/60 font-light border-l-2 border-[#ee0979] pl-4">
              {slides[current].artist}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <Link to="/exploreArtworks">
                <span className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white cursor-pointer transition-all duration-300 ${gradient} hover:scale-105 shadow-[0_10px_20px_rgba(238,9,121,0.3)]`}>
                  Explore More
                </span>
              </Link>

              <Link to="/dashboard/add-artwork">
                <span className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white cursor-pointer transition-all duration-300 border-2 border-white/20 hover:bg-white/10 hover:border-white/40">
                  Got something to share with us?
                </span>
              </Link>
            </div>
          </div>
        </div>


        <div className="absolute bottom-10 right-10 md:right-20 z-40 flex gap-4">
          <button
            onClick={prevSlide}
            className={`flex items-center justify-center w-12 h-12 md:w-16 md:h-16 text-white rounded-full transition-all duration-300 border border-white/20 hover:bg-white/10 backdrop-blur-sm`}
          >
            <FaChevronLeft size={18} />
          </button>

          <button
            onClick={nextSlide}
            className={`flex items-center justify-center w-12 h-12 md:w-16 md:h-16 text-white rounded-full transition-all duration-300 ${gradient} shadow-lg hover:scale-110`}
          >
            <FaChevronRight size={18} />
          </button>
        </div>

       
        <div className="absolute bottom-10 left-10 md:left-20 z-40 flex gap-2">
            {slides.map((_, i) => (
                <div 
                    key={i} 
                    className={`h-1 transition-all duration-500 rounded-full ${i === current ? 'w-12 bg-[#ee0979]' : 'w-4 bg-white/30'}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;