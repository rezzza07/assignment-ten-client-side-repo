import React from 'react';
import { useLoaderData } from 'react-router';

const ArtDetails = () => {
    const data = useLoaderData()
    const art =data.result
    console.log(art);
    

return (
    
  <div className="min-h-screen bg-transparent text-white flex items-center justify-center p-6 transition-colors duration-300">
    <div className="relative rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden border-2 border-transparent bg-clip-padding backdrop-blur-xl">
      
      {/* Gradient Border */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden border border-white/20"></div>

      {/* Card Content */}
      <div className="relative bg-white/10 dark:bg-black/20 rounded-xl p-6 space-y-6">
        
        
        <img
          src={art.image}
          alt={art.title}
          className="w-full h-96 object-cover rounded-lg"
        />

        {/* Artwork Details */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">{art.title}</h2>
          <p className="text-lg  text-gray-100">Medium: {art.mediumTools}</p>
          <p className="text-gray-200 leading-relaxed">Description: {art.description}</p>
        </div>

        {/* Artist Info */}
        <div className="flex items-center gap-4 mt-4">
          <div className="relative p-[2px] rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
            <img
              src={art.photo}
              alt={art.name}
              className="w-16 h-16 rounded-full border-2 border-transparent"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{art.name}</h3>
            <p className="text-gray-100 text-sm">
              Total Artworks: <span className="font-semibold">{art.totalArtworks || 0}</span>
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-6 flex-wrap">
          
          {/* Like Button */}
          <button
            
            className="flex items-center gap-2 px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-orange-500 hover:opacity-90 transition shadow-md"
          >
             Like ({art.likes})
          </button>

          {/* Add to Favorites Button */}
          <button
            
            className="flex items-center gap-2 px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 hover:opacity-90 transition shadow-md"
          >
             Add to Favorites
          </button>
        </div>
      </div>
    </div>
  </div>
);

};

export default ArtDetails;