import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Art } from "../Art/Art";
import Loading from "../Loading/Loading";
import { Heart, Search } from "lucide-react";
import { Link } from "react-router";

const MyFavorites = () => {
  const { user } = useContext(AuthContext);
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const loadFavorites = async () => {
      try {
        setLoading(true);
        
        const res = await fetch(
          `https://artopia-assignment.vercel.app/my-favorites?email=${user.email}`
        );
        const data = await res.json();
        
       
        setArts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to load favorites:", err);
        setArts([]);
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, [user]);

  if (loading) return <Loading />;

  const gradientText = "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent";

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className={`text-4xl font-extrabold ${gradientText}`}>
            My Favorites
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            You have curated {arts.length} pieces of inspiration.
          </p>
        </div>
        
        <Link 
          to="/exploreArtworks"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform"
        >
          <Search className="w-5 h-5" />
          Explore More
        </Link>
      </div>

      {/* Grid Section */}
      {arts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 bg-white/5 dark:bg-slate-800/20 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700">
          <Heart className="w-16 h-16 text-gray-300 dark:text-gray-600 mb-4" />
          <p className="text-xl text-gray-500 dark:text-gray-400 font-medium">No favorites yet</p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-1 mb-6">Start exploring to find art you love!</p>
          <Link to="/exploreArtworks" className="text-pink-500 font-bold hover:underline">
            Go to Gallery
          </Link>
        </div>
      ) : (
        <div className="max-w-[1300px] mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {arts.map((art) => (
            <div key={art._id} className="transition-all hover:translate-y-[-5px]">
              <Art art={art} isMyGallery={false} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFavorites;