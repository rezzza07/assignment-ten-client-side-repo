import React, { useContext, useEffect, useState } from "react";
import Favorite from "./Favorite";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../contexts/AuthContext";
import { FaHeart } from "react-icons/fa";

const ArtDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const [art, setArt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [adding, setAdding] = useState(false);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (!id) {
      setError("No artwork ID provided");
      setLoading(false);
      return;
    }

    if (!user) {
      setError("Please log in to view artwork");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const url = `http://localhost:3000/arts/${id}`;
    const headers = { "Content-Type": "application/json" };
    if (user.accessToken) headers["Authorization"] = `Bearer ${user.accessToken}`;
    else if (user.token) headers["Authorization"] = `Bearer ${user.token}`;

    fetch(url, { headers })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        return res.json();
      })
      .then((data) => {
        const artData = data.result ?? data;
        if (!artData || !artData.title) throw new Error("Invalid artwork data");
        setArt(artData);
        setLikes(artData.likes || 0); 
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Failed to load artwork");
        setLoading(false);
      });
  }, [id, user]);

  if (loading) return <Loading />;

  if (error) {
    return (
      <div className="min-h-screen bg-transparent text-white flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Error Loading Artwork</h2>
          <p className="text-gray-300">{error}</p>
        </div>
      </div>
    );
  }

  if (!art) {
    return (
      <div className="min-h-screen bg-transparent text-white flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Artwork Not Found</h2>
          <p className="text-gray-300">The artwork you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  // Handle like click
  const handleLike = () => {
    if (!user) {
      toast.error("Please log in to like this artwork");
      return;
    }
    if (liked) return; 
    setLikes(likes + 1);
    setLiked(true);
 
  };

  return (
    <div className="min-h-screen bg-transparent text-white flex items-center justify-center p-6">
      <div className="relative rounded-2xl p-0.5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 shadow-2xl max-w-3xl w-full">
        <div className="rounded-2xl bg-gray-900 p-6 space-y-6">
          {/* ART IMAGE */}
          <img
            src={art.image}
            alt={art.title}
            className="w-full h-96 object-cover rounded-xl border border-white/10"
          />

          {/* DETAILS */}
          <div className="space-y-3">
            <h2 className="text-3xl font-bold">{art.title}</h2>
            <p className="text-lg text-gray-300">Medium: {art.mediumTools}</p>
            <p className="text-gray-400 leading-relaxed">
              Description: {art.description}
            </p>
          </div>

          {/* ARTIST */}
          <div className="flex items-center gap-4 mt-6">
            {/* Gradient Circular Border */}
            <div className="p-[3px] rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
              <img
                src={art.photo}
                alt={art.name}
                className="w-16 h-16 rounded-full object-cover bg-gray-900"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                {art.name} 
              </h3>
              <p className="text-gray-300 text-sm">{art.email}</p>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-4 mt-6 flex-wrap">
            
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition-all duration-300
              ${liked
                ? "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 text-white cursor-not-allowed"
                : "border border-pink-500 text-pink-500 hover:bg-gradient-to-r hover:from-orange-500 hover:via-pink-500 hover:to-purple-700 hover:text-white"
              }`}
            >
              <FaHeart></FaHeart> {liked ? "Liked" : "Like"} {likes}
            </button>

            {/* Favorite Button */}
            <button
              onClick={async () => {
                if (!user?.email) {
                  toast.error("Please log in to add favorites");
                  return;
                }

                setAdding(true);

                const fav = {
                  added_by: user.email,
                  artId: art._id || art.id,
                  art: art,
                  createdAt: new Date().toISOString(),
                };

                try {
                  const headers = { "Content-Type": "application/json" };
                  if (user.accessToken)
                    headers["Authorization"] = `Bearer ${user.accessToken}`;
                  else if (user.token)
                    headers["Authorization"] = `Bearer ${user.token}`;

                  const res = await fetch("http://localhost:3000/favorites", {
                    method: "POST",
                    headers,
                    body: JSON.stringify(fav),
                  });

                  if (!res.ok) {
                    const text = await res.text();
                    throw new Error(
                      `Failed to add favorite: ${res.status} ${text}`
                    );
                  }

                  await res.json();
                  toast.success("Added to favorites");
                  navigate("/myFavorites");
                } catch (err) {
                  toast.error("Could not add to favorites");
                } finally {
                  setAdding(false);
                }
              }}
              disabled={adding}
              className={`${adding ? "opacity-60 pointer-events-none" : ""}`}
            >
              <Favorite />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtDetails;
