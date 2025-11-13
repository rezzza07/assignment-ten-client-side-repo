import React, { useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Art from '../Art/Art';

const MyGallery = () => {
  const { user } = React.useContext(AuthContext);
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);

    fetch(`http://localhost:3000/arts?email=${user.email}`)
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
    return <div className="text-center py-20">Please Wait........ Loading</div>;
  }

  return (
    <div>
      <div className="text-5xl font-bold mt-10 mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
        My Gallery
      </div>

      {arts.length === 0 ? (
        <div className="text-center text-xl text-gray-400">No artworks yet!</div>
      ) : (
        <div className="max-w-[1300px] mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {arts.map((art) => (
            <Art key={art._id} art={art} isMyGallery={true} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyGallery;
