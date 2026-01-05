import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../contexts/AuthContext";
import { FaHeart } from "react-icons/fa";
import Favourite from "./Favorite";

const ArtDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [art, setArt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedArts, setRelatedArts] = useState([]);

  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [likeLoading, setLikeLoading] = useState(false);

  const [isFavourite, setIsFavourite] = useState(false);
  const [checkingFav, setCheckingFav] = useState(true);


  useEffect(() => {
    setLoading(true);
    fetch(`https://artopia-assignment.vercel.app/arts/${id}`)
      .then(res => res.json())
      .then(data => {
        setArt(data);
        setLikes(data.likes || 0);
        setLoading(false);

        fetch(`https://artopia-assignment.vercel.app/arts?category=${data.category}&limit=4`)
          .then(res => res.json())
          .then(rel => setRelatedArts(rel.arts?.filter(a => a._id !== data._id) || []));


        if (user?.email) {
          fetch(`https://artopia-assignment.vercel.app/favorites/check?artId=${data._id}&email=${user.email}`)
            .then(res => res.json())
            .then(fav => setIsFavourite(fav.isFavorite))
            .finally(() => setCheckingFav(false));

          fetch(`https://artopia-assignment.vercel.app/artLikes/check?artId=${data._id}&email=${user.email}`)
            .then(res => res.json())
            .then(like => setLiked(like.liked));
        } else {
          setCheckingFav(false);
        }
      })
      .catch(() => {
        setError("Failed to load artwork");
        setLoading(false);
      });
  }, [id, user]);

  if (loading) return <Loading />;
  if (error) return <p className="min-h-screen flex items-center justify-center">{error}</p>;


  const handleLike = async () => {
    if (!user?.email) return toast.error("Login required to like art!");
    if (likeLoading) return;

    setLikeLoading(true);
    try {
      const res = await fetch(`https://artopia-assignment.vercel.app/arts/${art._id}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email }),
      });

      const data = await res.json();

      if (res.ok) {
        setLikes(data.likes);
        setLiked(data.liked);
        toast.success(data.liked ? "Liked!" : "Unliked");
      } else {
        toast.error(data.message || "Failed to update likes");
      }
    } catch (err) {
      console.error("Like Error:", err);
      toast.error("Server connection error");
    } finally {
      setLikeLoading(false);
    }
  };


  const toggleFavourite = async () => {
    if (!user?.email) return toast.error("Login required");
    try {
      const res = await fetch("https://artopia-assignment.vercel.app/favorites/toggle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ artId: art._id, email: user.email }),
      });
      const data = await res.json();
      setIsFavourite(data.status === "added");
      toast[data.status === "added" ? "success" : "info"](
        data.status === "added" ? "Added to Favorites" : "Removed from Favorites"
      );
    } catch {
      toast.error("Failed to update favorites");
    }
  };

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden bg-gray-500/10">
              <img
                src={art.images?.[0] || art.image}
                alt={art.title}
                className="w-full h-full object-cover"
              />
            </div>
            {art.images?.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {art.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`art-${idx}`}
                    className="aspect-square rounded-lg object-cover"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{art.title}</h1>
            <p className="opacity-80">by {art.name}</p>
            <span className="inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-orange-500 to-purple-600 text-white">
              {art.category}
            </span>

            {/* Overview */}
            <div className="p-6 rounded-xl border border-gray-500/10">
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
              <p className="opacity-90">{art.description}</p>
            </div>

            {/* Key Info */}
            <div className="p-6 rounded-xl border border-gray-500/10">
              <h2 className="text-xl font-semibold mb-4">Key Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm opacity-60">Medium / Tools</p>
                  <p className="font-semibold">{art.mediumTools || "—"}</p>
                </div>
                <div>
                  <p className="text-sm opacity-60">Category</p>
                  <p className="font-semibold">{art.category}</p>
                </div>
                <div>
                  <p className="text-sm opacity-60">Price</p>
                  <p className="font-semibold">{art.price ? `$${art.price}` : "Contact for price"}</p>
                </div>
                <div>
                  <p className="text-sm opacity-60">Status</p>
                  <p className="font-semibold text-green-600">Available</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                onClick={handleLike}
                className={`px-6 py-3 rounded-lg flex items-center gap-2 font-semibold ${liked ? "bg-pink-600 text-white" : "bg-gray-500/20 hover:bg-gray-500/30"}`}
              >
                <FaHeart /> {likes}
              </button>
              {!checkingFav && <Favourite isFavourite={isFavourite} onToggle={toggleFavourite} />}
            </div>
          </div>
        </div>

        {/* Related Arts */}
        {relatedArts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-6">Related Artworks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedArts.map(item => (
                <Link
                  key={item._id}
                  to={`/arts/${item._id}`}
                  className="rounded-xl overflow-hidden border hover:shadow-lg transition"
                >
                  <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold truncate">{item.title}</h3>
                    <p className="text-sm opacity-70">{item.price ? `$${item.price}` : "View details"}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtDetails;
