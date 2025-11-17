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
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    if (loaderData) {
      setArts(loaderData);
      setFilteredArts(loaderData);
      setLoading(false);
    }
  }, [loaderData]);


  const categories = ["all", ...new Set(arts.map((item) => item.category))];


  useEffect(() => {
    let results = arts;

    if (searchTerm.trim()) {
      results = results.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category !== "all") {
      results = results.filter((item) => item.category === category);
    }

    setFilteredArts(results);
  }, [searchTerm, category, arts]);

  if (loading) return <Loading />;

  return (
    <div className="max-w-[1300px] mx-auto px-4">

      {/* Header */}
      <div className="flex flex-col items-center mb-20">
        <h2 className="text-5xl font-bold mt-10 mb-12 text-center 
          text-transparent bg-clip-text 
          bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
          Explore Artworks
        </h2>

        {/* Search bar  */}
        <div className="w-full flex mb-28 justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <Input onSearch={(term) => setSearchTerm(term)} />
          </div>
        </div>

        {/* Category Filter */}
        <div className="w-full mt-6 flex">
          <div className="w-full md:w-1/3 lg:w-1/5">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="
                w-full 
                p-3 rounded-xl 
                bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700
                text-white font-medium
                shadow-lg border border-white/20
                focus:outline-none focus:ring-2 focus:ring-pink-500/60
              "
            >
              {categories.map((cat, index) => (
                <option
                  key={index}
                  value={cat}
                  className="bg-gray-900 text-white"
                >
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Artworks Grid */}
      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {filteredArts.length > 0 ? (
          filteredArts.map((art) => (
            <Art key={art._id} art={art} isMyGallery={false} />
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full text-xl">
            No artworks found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ExploreArtworks;
