import React from "react";

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
  return (
    <section className="py-16 rounded-lg text-white">
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
