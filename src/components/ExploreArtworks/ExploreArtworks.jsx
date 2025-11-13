import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Art from "../Art/Art";
import Loading from "../Loading/Loading";
import Input from "./Input";


const ExploreArtworks = () => {
  const loaderData = useLoaderData();
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredArts, setFilteredArts] = useState([]);

  useEffect(() => {
    if (loaderData) {
      setArts(loaderData);
      setFilteredArts(loaderData); // Initialize filtered arts
      setLoading(false);
    }
  }, [loaderData]);

  const handleSearch = (term) => {
    const results = arts.filter((art) =>
      art.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredArts(results);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-[1300px] mx-auto px-4">
      {/* Header */}
      <div className="flex flex-col items-center relative mb-40">
        <h2 className="text-5xl font-bold mt-10 mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
          Explore Artworks
        </h2>

        {/* Search bar */}
        <div className="w-full md:w-1/3 mt-6 absolute right-0 top-full">
          <Input onSearch={handleSearch} />
        </div>
      </div>

      {/* Artworks Grid */}
      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {filteredArts.length > 0 ? (
          filteredArts.map((art) => (
            <Art key={art._id} art={art} isMyGallery={false} />
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No artworks found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ExploreArtworks;
