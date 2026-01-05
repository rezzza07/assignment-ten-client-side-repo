import React, { useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Art } from '../Art/Art';
import Loading from '../Loading/Loading';
import { Image as ImageIcon, PlusCircle } from 'lucide-react';
import { Link } from 'react-router';

const MyGallery = () => {
  const { user } = React.useContext(AuthContext);
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);

    const fetchGallery = async () => {
      try {
        const token = await user.getIdToken();
        const url = `https://artopia-assignment.vercel.app/arts?email=${user.email}`;
        
        const res = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });
        
        const data = await res.json();
        setArts(data.arts || []);
      } catch (err) {
        console.error("Error fetching gallery:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [user]);

  if (loading) return <Loading />;

  const gradientText = "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent";

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className={`text-4xl font-extrabold ${gradientText}`}>
            My Gallery
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Managing {arts.length} artworks in your collection.
          </p>
        </div>
        
        <Link 
          to="/dashboard/add-artwork"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform"
        >
          <PlusCircle className="w-5 h-5" />
          Add New Art
        </Link>
      </div>

      {/* Gallery Stats Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white/5 dark:bg-slate-800/40 p-4 rounded-2xl border border-gray-200 dark:border-gray-700">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Uploads</p>
          <p className="text-2xl font-bold dark:text-white">{arts.length}</p>
        </div>
        <div className="bg-white/5 dark:bg-slate-800/40 p-4 rounded-2xl border border-gray-200 dark:border-gray-700">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Public Visibility</p>
          <p className="text-2xl font-bold text-green-500">{arts.filter(a => a.visibility === 'public').length}</p>
        </div>
        <div className="bg-white/5 dark:bg-slate-800/40 p-4 rounded-2xl border border-gray-200 dark:border-gray-700">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Private Drafts</p>
          <p className="text-2xl font-bold text-orange-500">{arts.filter(a => a.visibility !== 'public').length}</p>
        </div>
      </div>

      {/* Art Grid */}
      {arts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white/5 dark:bg-slate-800/20 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700">
          <ImageIcon className="w-16 h-16 text-gray-300 dark:text-gray-600 mb-4" />
          <p className="text-xl text-gray-500 dark:text-gray-400">Your gallery is empty</p>
          <Link to="/dashboard/add-artwork" className="mt-4 text-pink-500 font-bold hover:underline">
            Start by adding your first masterpiece
          </Link>
        </div>
      ) : (
        <div className="max-w-[1300px] mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {arts.map((art) => (
            <div key={art._id} className="transition-all hover:translate-y-[-5px]">
               <Art art={art} isMyGallery={true} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyGallery;