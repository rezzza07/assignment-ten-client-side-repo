import React from "react";
import { Sparkles } from "lucide-react";

const artists = [
  {
    name: "Ariana Silva",
    role: "Digital Illustrator",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQGQuCeWOnJAHw/profile-displayphoto-scale_200_200/B4EZgs3bYiGoAY-/0/1753099386167?e=2147483647&v=beta&t=y1Qf90LJWzL5mWFFLWt7p4cyYcm80kSegMxJNLcrJ_M",
  },
  {
    name: "Noah Parker",
    role: "3D Concept Artist",
    img: "https://media.licdn.com/dms/image/v2/D5603AQFKy-1qRTA0Mw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1708215647031?e=2147483647&v=beta&t=FfCy8d0X0D79KPeBCZ9WO8yBWCMQsFaHYZ0S5HGOmtw",
  },
  {
    name: "Luna Chen",
    role: "Watercolor Specialist",
    img: "https://media.licdn.com/dms/image/v2/D5603AQFBk-PlY6aRDg/profile-displayphoto-scale_200_200/B56Zo2DMahJQAY-/0/1761843401915?e=2147483647&v=beta&t=zMSDds0TPT85mhGa6kIYC_lkRrkJZ1K0EMnJmNUakAM",
  },
  {
    name: "Ethan Rivera",
    role: "Mixed Media Creator",
    img: "https://media.licdn.com/dms/image/v2/D4E22AQEo29DX3VpN0w/feedshare-shrink_800/feedshare-shrink_800/0/1722719394721?e=2147483647&v=beta&t=k9AFq7QsetQrn4CnU1XohmOJV_JPQbTK6ak6FnIkSA8",
  },
];

const TopArtists = () => {
  const gradientText = "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent";

  return (
    <section className="py-24 relative overflow-hidden bg-gray-950">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 blur-[120px] rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Top Artists of <span className={gradientText}>The Week</span>
          </h2>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
          {artists.map((artist, i) => (
            <div
              key={i}
              className="relative group w-[220px] h-[280px] cursor-pointer"
            >
              {/* Animated Morphing Border Background */}
              <div className="absolute inset-0 -left-[2px] -top-[2px] w-[224px] h-[284px] rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 blur-[1px] transition-transform duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:rotate-[-90deg] group-hover:scale-x-[1.25] group-hover:scale-y-[0.8]"></div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 blur-[15px] opacity-40 group-hover:opacity-100 group-hover:blur-[25px] transition-all duration-700"></div>

              {/* Main Card Content */}
              <div className="relative z-10 bg-slate-900 border border-white/10 rounded-xl flex flex-col justify-center items-center p-6 gap-4 w-[220px] h-[280px] transition-colors duration-500 group-hover:bg-black/80">
                <div className="relative">
                   <img
                    src={artist.img}
                    alt={artist.name}
                    className="w-24 h-24 object-cover rounded-full border-4 border-white/5 shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:border-pink-500/50"
                  />
                  {/* Active Indicator Dot */}
                  <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-slate-900 rounded-full"></div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-orange-400">
                    {artist.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium tracking-wide uppercase mt-1">
                    {artist.role}
                  </p>
                </div>

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopArtists;