import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useParams } from "react-router";

const Like = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id || !user) return;

    const headers = {};
    if (user?.accessToken)
      headers["Authorization"] = `Bearer ${user.accessToken}`;
    else if (user?.token)
      headers["Authorization"] = `Bearer ${user.token}`;

    fetch(`https://artopia-assignment.vercel.app/arts/${id}`, { headers })
      .then((res) => res.json())
      .then((data) => {
        const art = data.result;

        setLikes(art.likeCount || 0);

        if (art.likedBy && user?.email) {
          setLiked(art.likedBy.includes(user.email));
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Load Like Error:", err);
        setLoading(false);
      });

  }, [id, user]);



  const handleLike = async () => {
    if (!user) return;

    // optimistic update
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);

    try {
      const headers = { "Content-Type": "application/json" };
      if (user?.accessToken)
        headers["Authorization"] = `Bearer ${user.accessToken}`;
      else if (user?.token)
        headers["Authorization"] = `Bearer ${user.token}`;

      const res = await fetch(
        `https://artopia-assignment.vercel.app/arts/${id}/toggle-like`,
        { method: "POST", headers }
      );

      const data = await res.json();

      if (!data.success) throw new Error("Failed");

    
      setLikes(data.likeCount);
      setLiked(data.liked);

    } catch (err) {
      console.error("Like API Error:", err);

      setLiked(liked);
      setLikes(likes);
    }
  };

  if (loading) return <span className="text-white">Loading...</span>;

  return (
    <button
      onClick={handleLike}
      className={`group flex items-center gap-3 rounded-full border border-pink-600 px-5 py-2 font-semibold transition-all duration-300
        ${liked ? "bg-pink-600 text-white" : "text-pink-600 hover:bg-pink-50"}`}
    >
      <span>{liked ? "LIKED" : "LIKE"}</span>

      <svg
        className={`size-6 transition-all duration-300 ${
          liked
            ? "fill-pink-500 scale-110"
            : "fill-none stroke-pink-600 group-hover:scale-110"
        }`}
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 
          2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 
          3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>

      <span className="text-sm font-medium">{likes}</span>
    </button>
  );
};

export default Like;
