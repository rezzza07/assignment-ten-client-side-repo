import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Art from "../Art/Art";
import Loading from "../Loading/Loading";


const ExploreArtworks = () => {
  const loaderData = useLoaderData();
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (loaderData) {
      setArts(loaderData);
      setLoading(false);
    }
  }, [loaderData]);

  if (loading) {
    return <Loading></Loading>
  }


  return (
    <div>
      <h2 className="text-5xl font-bold mt-10 mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
        Explore Artworks
      </h2>

      <div className="max-w-[1300px] mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {arts.map((art) => (
          <Art key={art._id} art={art} isMyGallery={false} />
        ))}
      </div>
    </div>
  );
};

export default ExploreArtworks;
