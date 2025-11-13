import React from "react";

const CommunityHighlights = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold tracking-tight">Community Highlights</h2>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Celebrating the incredible contributions and achievements of the Artopia community
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Contributions */}
          <div className="border border-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-5xl font-bold mb-2">150+</h3>
            <p className="text-lg opacity-90">Artists Contributing</p>
            <p className="mt-2 text-sm opacity-80">
              Our community is growing every day with talented creators sharing their visions.
            </p>
          </div>

          {/* Artworks Shared */}
          <div className="border border-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-5xl font-bold mb-2">320+</h3>
            <p className="text-lg opacity-90">Artworks Shared</p>
            <p className="mt-2 text-sm opacity-80">
              Thousands of stunning creations have been contributed to inspire others.
            </p>
          </div>

          {/* Community Achievements */}
          <div className="border border-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-5xl font-bold mb-2">75+</h3>
            <p className="text-lg opacity-90">Achievements Unlocked</p>
            <p className="mt-2 text-sm opacity-80">
              Celebrating milestones and successful projects created by our community.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <a
            href="/community"
            className="inline-block bg-white text-purple-700 font-semibold px-8 py-4 rounded-full text-lg hover:bg-opacity-90 transition"
          >
            Join the Community
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunityHighlights;
