import React from 'react';
import Art from '../Art/Art';
import { use } from 'react';

const FeaturedArts = ({ featuredArtsPromise }) => {
    const arts = use(featuredArtsPromise);

    return (
        <section className='my-16' >
            <h2 className="text-5xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
                Featured Arts
            </h2>

            <div className="max-w-[1300px] mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">

                {arts.map((art) => (
                    <Art key={art._id} art={art} />
                ))}

            </div>
        </section>

    );
};

export default FeaturedArts;
