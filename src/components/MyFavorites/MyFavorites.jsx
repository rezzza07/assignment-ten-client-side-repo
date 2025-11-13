import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Art from '../Art/Art';
import Loading from '../Loading/Loading';

const MyFavorites = () => {

    const { user } = use(AuthContext);
    const [arts, setArts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (!user?.email) return;

        setLoading(true);

        fetch(`http://localhost:3000/my-favorites?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setArts(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, [user]);

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className=''>
            <div className="text-5xl font-bold mt-10 mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
                My Favorites</div>
            <div className='max-w-[1300px] mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>

                {arts.map((art) => (
                    <Art key={art._id} art={art} isMyGallery={false} />
                ))}

            </div>
        </div>
    );
};

export default MyFavorites;