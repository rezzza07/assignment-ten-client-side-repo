import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Art from '../Art/Art';
import Loading from '../Loading/Loading';

const MyFavorites = () => {

    const { user } = useContext(AuthContext);
    const [arts, setArts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // If user not available, clear and stop loading
        if (!user?.email) {
            setArts([]);
            setLoading(false);
            return;
        }

        setLoading(true);

        fetch(`http://localhost:3000/my-favorites?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                // Normalize possible response shapes:
                // - { success: true, result: [...] }
                // - an array directly
                // - { data: [...] }
                // - a single object
                const normalized = Array.isArray(data)
                    ? data
                    : Array.isArray(data?.result)
                        ? data.result
                        : Array.isArray(data?.data)
                            ? data.data
                            : data && typeof data === 'object'
                                ? [data]
                                : [];

                // Each favorite document may store the real art under `art`.
                // Unwrap to plain art objects for the UI.
                const artworks = normalized.map(item => item?.art ?? item);

                setArts(artworks);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to load favorites:', err);
                setArts([]);
                setLoading(false);
            });
    }, [user]);

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className=''>
            <div className="text-5xl font-bold mt-10 mb-20 text-center text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-pink-500 to-purple-700">
                My Favorites</div>
            <div className='max-w-[1300px] mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>

                {arts.map((art) => (
                    <Art key={art._id || art.id} art={art} isMyGallery={false} />
                ))}

            </div>
        </div>
    );
};

export default MyFavorites;