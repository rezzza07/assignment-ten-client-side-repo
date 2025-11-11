import React from "react";

const artists = [
  {
    name: "Ariana Silva",
    role: "Digital Illustrator",
    img: "https://i.ibb.co/ZmYkSpv/artist1.jpg",
  },
  {
    name: "Noah Parker",
    role: "3D Concept Artist",
    img: "https://cdn.prod.website-files.com/62bdc93e9cccfb43e155104c/66c9beca445b37b90d7a4696_Luffy%20pfp%20400x400%20(6).png",
  },
  {
    name: "Luna Chen",
    role: "Watercolor Specialist",
    img: "https://i.ibb.co/3rq7CPM/artist3.jpg",
  },
  {
    name: "Ethan Rivera",
    role: "Mixed Media Creator",
    img: "https://i.ibb.co/tLDgW3Q/artist4.jpg",
  },
];

const TopArtists = () => {
  return (
    <section className="py-16 bg-gray-900 rounded-lg text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
          Top Artists of the Week
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {artists.map((artist, i) => (
            <div
              key={i}
              className="relative group w-[190px] h-[254px] mx-auto cursor-pointer"
            >
              
              <div className="absolute inset-0 -left-[5px] w-[200px] h-[264px] rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 blur-[1px] transition-transform duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:rotate-[-90deg] group-hover:scale-x-[1.34] group-hover:scale-y-[0.77]"></div>

              
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 blur-[20px] opacity-80 group-hover:blur-[30px] transition-all duration-700"></div>

              
              <div className="relative z-10 bg-black rounded-lg flex flex-col justify-end items-center p-4 gap-3 w-[190px] h-[254px]">
                <img
                  src={artist.img}
                  alt={artist.name}
                  className="w-20 h-20 object-cover rounded-full border-2 border-pink-400 shadow-lg"
                />
                <h3 className="text-lg font-semibold">{artist.name}</h3>
                <p className="text-sm text-gray-400">{artist.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopArtists;
