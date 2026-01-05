import React, { useEffect, useState } from "react";
import { Art } from "../Art/Art";
import Loading from "../Loading/Loading";
import Input from "./Input";

const ExploreArtworks = () => {
  const [arts, setArts] = useState([]);
  const [filteredArts, setFilteredArts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [priceSort, setPriceSort] = useState("none"); 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  
  useEffect(() => {
    const fetchArts = () => {
      fetch("https://artopia-assignment.vercel.app/arts")
        .then((res) => res.json())
        .then((data) => {
          setArts(data.arts || data);
          setFilteredArts(data.arts || data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch arts:", err);
          setLoading(false);
        });
    };

    fetchArts();

  
    const handleArtAdded = () => fetchArts();
    window.addEventListener("artAdded", handleArtAdded);
    return () => window.removeEventListener("artAdded", handleArtAdded);
  }, []);


  useEffect(() => {
    let results = [...arts];

    
    if (searchTerm.trim()) {
      results = results.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

   
    if (category !== "all") {
      results = results.filter((item) => item.category === category);
    }

   
    if (priceSort === "low-high") {
      results = results.sort((a, b) => a.price - b.price);
    } else if (priceSort === "high-low") {
      results = results.sort((a, b) => b.price - a.price);
    }

    setFilteredArts(results);
    setCurrentPage(1); 
  }, [searchTerm, category, priceSort, arts]);

  // Pagination 
  const totalPages = Math.ceil(filteredArts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredArts.slice(startIndex, startIndex + itemsPerPage);

  if (loading) return <Loading />;

  const categories = ["all", ...new Set(arts.map((item) => item.category))];

  return (
    <div className="max-w-[1300px] mx-auto px-4">
      {/* Header */}
      <div className="flex flex-col items-center mb-20">
        <h2 className="text-5xl font-bold mt-10 mb-12 text-center 
          text-transparent bg-clip-text 
          bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
          Explore Artworks
        </h2>

        {/* Search */}
        <div className="w-full flex mb-6 justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <Input onSearch={(term) => setSearchTerm(term)} />
          </div>
        </div>

        {/* Filters */}
        <div className="w-full flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
          {/* Category Filter */}
          <div className="w-full sm:w-1/3 lg:w-1/5">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="
                w-full p-3 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700
                text-white font-medium shadow-lg border border-white/20
                focus:outline-none focus:ring-2 focus:ring-pink-500/60
              "
            >
              {categories.map((cat, index) => (
                <option key={index} value={cat} className="bg-gray-900 text-white">
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>

          {/* Price Sort */}
          <div className="w-full sm:w-1/3 lg:w-1/5">
            <select
              value={priceSort}
              onChange={(e) => setPriceSort(e.target.value)}
              className="
    w-full p-3 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700
    text-white font-medium shadow-lg border border-white/20
    focus:outline-none focus:ring-2 focus:ring-pink-500/60
  "
            >
              <option value="none" className="bg-gray-900 text-white">Sort by Price</option>
              <option value="low-high" className="bg-gray-900 text-white">Price: Low → High</option>
              <option value="high-low" className="bg-gray-900 text-white">Price: High → Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Artworks Grid */}
      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
        {currentItems.length > 0 ? (
          currentItems.map((art) => (
            <Art key={art._id} art={art} isMyGallery={false} />
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full text-xl">
            No artworks found.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-8 mb-8 flex-wrap gap-2">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-lg ${currentPage === page
                ? "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ExploreArtworks;
