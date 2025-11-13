import React, { use } from "react";
import { useLoaderData } from "react-router";
import Like from "./Like";
import Favorite from "./Favorite";
import { AuthContext } from "../../contexts/AuthContext";

const ArtDetails = () => {
  const data = useLoaderData();
  const art = data.result;
  const user = use(AuthContext);

  console.log(art);

  const handleFavorites = () => {
    fetch(`http://localhost:3000/favorites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...art,added_by:user.email})
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        alert('Added to Favorites')
        
       
      })
      .catch(err => {
        console.log(err)

      })
  }

  return (
    <div className="min-h-screen bg-transparent text-white flex items-center justify-center p-6">
      {/* Gradient Border Card */}
      <div className="relative rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 p-[2px] shadow-2xl max-w-3xl w-full">

        {/* Inner content with normal background */}
        <div className="rounded-2xl bg-[#0b0b0b]/80 backdrop-blur-xl p-6 space-y-6">

          {/* Artwork Image */}
          <img
            src={art.image}
            alt={art.title}
            className="w-full h-96 object-cover rounded-xl border border-white/10"
          />

          {/* Artwork Details */}
          <div className="space-y-3">
            <h2 className="text-3xl font-bold">{art.title}</h2>
            <p className="text-lg text-gray-100">Medium: {art.mediumTools}</p>
            <p className="text-gray-300 leading-relaxed">
              Description: {art.description}
            </p>
          </div>

          {/* Artist Info */}
          <div className="flex items-center gap-4 mt-6">
            <div className="p-[2px] rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
              <img
                src={art.photo}
                alt={art.name}
                className="w-16 h-16 rounded-full border border-transparent"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{art.name}</h3>
              <p className="text-gray-100 text-sm">
                Total Artworks:{" "}
                <span className="font-semibold">{art.totalArtworks || 0}</span>
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-6 flex-wrap">
            <Like />
            
            
            <button onClick={handleFavorites}>
              <Favorite />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtDetails;
