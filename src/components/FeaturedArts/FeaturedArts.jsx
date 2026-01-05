import React from 'react';
import { Art } from '../Art/Art';
import Loading from '../Loading/Loading';

const FeaturedArts = ({ featuredArts, loading }) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <section className="my-16">
      <h2 className="text-5xl font-bold mb-6 text-center text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-pink-500 to-purple-700">
        Featured Arts
      </h2>

      <div className="max-w-[1300px] mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {featuredArts.map(art => (
          <Art key={art._id} art={art} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedArts;
