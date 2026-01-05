import React from "react";

const About = () => {
  return (
    <div className="min-h-screen py-10 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
            About Artopia
          </h1>

          <p className="text-base-content/70 text-lg mb-4">Connecting artists and art lovers worldwide</p>


        </div>



        <div
          className="relative w-full max-w-[1000px] mx-auto rounded-xl overflow-hidden cursor-pointer group"
          style={{
            padding: "2px",
            background: "linear-gradient(to right, #f97316, #ec4899, #8b5cf6)",
          }}
        >
          <div className="bg-base-100 dark:bg-gray-900 rounded-lg w-full h-full flex flex-col p-8 overflow-auto shadow-md group-hover:shadow-lg transition-shadow duration-300">


            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
              Our Mission
            </h2>
            <p className="mb-6 text-base-content/70 leading-relaxed text-lg">
              At Artopia, we create a vibrant online community where artists can showcase their work,
              connect with fellow creatives, and reach art enthusiasts worldwide. We believe art has
              the power to inspire, educate, and bring people together.
            </p>


            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
              What We Offer
            </h2>
            <ul className="list-disc list-inside space-y-3 mb-6 text-base-content/70 text-lg">
              <li>A platform for artists to upload, manage, and sell their artworks</li>
              <li>Tools for art collectors to discover and purchase unique pieces</li>
              <li>Community features to connect artists and art lovers</li>
              <li>Educational resources and artist spotlights</li>
              <li>Secure payment processing and reliable delivery</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
              Our Story
            </h2>
            <p className="text-base-content/70 leading-relaxed text-lg">
              Founded in 2024, Artopia was born from a passion for art and technology. Our founders
              recognized the challenges artists face in getting their work seen and appreciated. By
              combining innovative web technology with a deep understanding of the art world, we've
              created a platform that serves both creators and collectors equally.
            </p>

          </div>
        </div>


      </div>
    </div>
  );
};

export default About;
