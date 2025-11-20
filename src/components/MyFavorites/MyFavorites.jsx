import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Art from "../Art/Art";
import Loading from "../Loading/Loading";

const MyFavorites = () => {
  const { user } = useContext(AuthContext);
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      setArts([]);
      setLoading(false);
      return;
    }

    const loadFavorites = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://artopia-assignment.vercel.app/my-favorites?email=${user.email}`
        );
        const data = await res.json();

        const favorites = data?.result || [];

        // Fetch the actual art item for each favorite
        const fullArts = await Promise.all(
          favorites.map(async (fav) => {
            try {
              const res = await fetch(
                `https://artopia-assignment.vercel.app/arts/${fav.artId}`,
                {
                  headers: {
                    Authorization: `Bearer ${await user.getIdToken()}`,
                  },
                }
              );
              const a = await res.json();
              return a?.result || null;
            } catch (err) {
              console.error("Failed to fetch art:", err);
              return null;
            }
          })
        );

        const filtered = fullArts.filter((a) => a !== null);

        setArts(filtered);
      } catch (err) {
        console.error("Failed to load favorites:", err);
        setArts([]);
      }

      setLoading(false);
    };

    loadFavorites();
  }, [user]);

  if (loading) return <Loading />;

  return (
    <div>
      <div className="text-5xl font-bold mt-10 mb-20 text-center text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-pink-500 to-purple-700">
        My Favorites
      </div>

      <div className="max-w-[1300px] mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {arts.map((art) => (
          <Art key={art._id} art={art} isMyGallery={false} />
        ))}
      </div>
    </div>
  );
};

export default MyFavorites;
