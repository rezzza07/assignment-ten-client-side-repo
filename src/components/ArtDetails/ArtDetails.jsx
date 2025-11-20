import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../contexts/AuthContext";
import { FaHeart } from "react-icons/fa";
import Favourite from "./Favorite";

const ArtDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const [art, setArt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const [isFavourite, setIsFavourite] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!user) {
      setError("Please log in to view artwork");
      setLoading(false);
      return;
    }

    const headers = { "Content-Type": "application/json" };
    if (user.accessToken) headers["Authorization"] = `Bearer ${user.accessToken}`;

    fetch(`https://artopia-assignment.vercel.app/arts/${id}`, { headers })
      .then((res) => res.json())
      .then((data) => {
        const artData = data.result ?? data;
        setArt(artData);
        setLikes(artData.likes || 0);
        setLoading(false);

        fetch(`https://artopia-assignment.vercel.app/favorites/check?email=${user.email}&artId=${artData._id}`)
          .then((res) => res.json())
          .then((fav) => {
            setIsFavourite(fav.isFavorite);
            setChecking(false);
          });
      })
      .catch(() => {
        setError("Failed to load artwork");
        setLoading(false);
      });
  }, [id, user]);

  if (loading) return <Loading />;

  if (error)
    return (
      <div className="text-center text-white min-h-screen flex items-center justify-center">
        <p>{error}</p>
      </div>
    );

  const handleLike = () => {
    if (!user) return toast.error("Login required");
    if (liked) return;

    setLikes((p) => p + 1);
    setLiked(true);
  };

  const toggleFavourite = async () => {
    if (!user?.email) return toast.error("Please log in first");

    try {
      const body = {
        email: user.email,
        artId: art._id,
      };

      const res = await fetch("https://artopia-assignment.vercel.app/favorites/toggle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (data.status === "added") {
        setIsFavourite(true);
        toast.success("Added to Favorites");
      } else {
        setIsFavourite(false);
        toast.info("Removed from Favorites");
      }
    } catch (err) {
      toast.error("Failed to update favorites");
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-white flex items-center justify-center p-6">
      <div className="relative rounded-2xl max-w-3xl w-full p-0.5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
        <div className="rounded-2xl bg-gray-900 p-6 space-y-6">
          
          <div className="p-1 rounded-2xl ">
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-96 object-cover rounded-2xl"
            />
          </div>

          {/* Profile */}
          <div className="flex items-center gap-4">
            <div className="p-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
              <img
                src={art.photo}
                alt="profile"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold">{art.title}</h2>
              <p className="text-gray-300">Medium: {art.mediumTools}</p>
            </div>
          </div>

          {/* Gradient Rounded Border for main art photo */}


          <p className="text-gray-400">
            <span className="font-bold text-white">Description:</span> {art.description}
          </p>

          <div className="flex items-center gap-3 mt-6">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold ${liked ? "bg-pink-600 text-white" : "border border-pink-500 text-pink-500"
                }`}
            >
              <FaHeart /> {liked ? "Liked" : "Like"} {likes}
            </button>

            <Favourite isFavourite={isFavourite} onToggle={toggleFavourite} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtDetails;