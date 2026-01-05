import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router";
import { toast } from 'react-toastify';
import { getAuth } from "firebase/auth";
import Loading from '../Loading/Loading';

const UpdateArt = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [art, setArt] = useState(null);
  const [loading, setLoading] = useState(true);

  // Reusable Gradient and Input Classes
  const gradientText = "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent";
  const inputClass = "w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent dark:text-white focus:ring-2 focus:ring-pink-500/50 outline-none transition-all";
  const readOnlyClass = "w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-slate-900/50 text-gray-500 cursor-not-allowed";

  useEffect(() => {
    const fetchArt = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) return;

        const token = await user.getIdToken();
        const res = await fetch(`https://artopia-assignment.vercel.app/arts/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();
        setArt(data?.result ?? data);
      } catch (err) {
        toast.error("Error loading artwork.");
      } finally {
        setLoading(false);
      }
    };
    fetchArt();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      image: e.target.image.value,
      title: e.target.title.value,
      name: e.target.name.value,
      email: e.target.email.value,
      category: e.target.category.value,
      mediumTools: e.target.mediumTools.value,
      description: e.target.description.value,
      dimensions: e.target.dimensions.value,
      price: e.target.price.value,
      visibility: e.target.visibility.value,
    };

    try {
      const res = await fetch(`https://artopia-assignment.vercel.app/arts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();
      toast.success("Artwork updated successfully!");
      window.dispatchEvent(new Event('artAdded'));
      navigate("/dashboard/my-gallery");
    } catch (err) {
      toast.error("Failed to update artwork.");
    }
  };

  if (loading) return <Loading />;
  if (!art) return <div className="text-center py-20 font-poppins text-red-500">Artwork not found.</div>;

  return (
    <div className="font-poppins max-w-4xl mx-auto pb-10 transition-colors duration-300">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className={`text-4xl font-extrabold ${gradientText}`}>
          Update Masterpiece
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Refine the details of your artwork to keep your gallery up to date.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Artist Info (Read Only) */}
        <div className="space-y-6 md:col-span-2 bg-white/5 dark:bg-slate-800/40 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Artist Name</label>
              <input type="text" name="name" value={art.name} readOnly className={readOnlyClass} />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Contact Email</label>
              <input type="email" name="email" value={art.email} readOnly className={readOnlyClass} />
            </div>
          </div>
        </div>

        {/* Artwork Details */}
        <div className="space-y-6 bg-white/5 dark:bg-slate-800/40 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="text-lg font-bold dark:text-white">Basic Details</h3>
          <div>
            <label className="block mb-2 text-sm font-semibold dark:text-gray-300">Artwork Title</label>
            <input type="text" name="title" defaultValue={art.title} required className={inputClass} />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold dark:text-gray-300">Category</label>
            <input type="text" name="category" defaultValue={art.category} required className={inputClass} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm font-semibold dark:text-gray-300">Price ($)</label>
              <input type="number" name="price" defaultValue={art.price} className={inputClass} />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold dark:text-gray-300">Visibility</label>
              <select
                name="visibility"
                className="w-full p-3 rounded-xl border border-gray-200
             bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600
             text-white font-semibold
             focus:outline-none focus:ring-2 focus:ring-pink-400
             dark:border-gray-700 dark:text-white"
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
          </div>
        </div>

        {/* Media & Specs */}
        <div className="space-y-6 bg-white/5 dark:bg-slate-800/40 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="text-lg font-bold dark:text-white">Media & Specifications</h3>
          <div>
            <label className="block mb-2 text-sm font-semibold dark:text-gray-300">Main Image URL</label>
            <input type="text" name="image" defaultValue={art.image} required className={inputClass} />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold dark:text-gray-300">Medium / Tools</label>
            <input type="text" name="mediumTools" defaultValue={art.mediumTools} required className={inputClass} />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold dark:text-gray-300">Dimensions</label>
            <input type="text" name="dimensions" defaultValue={art.dimensions} className={inputClass} />
          </div>
        </div>

        {/* Description Section */}
        <div className="md:col-span-2 bg-white/5 dark:bg-slate-800/40 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <label className="block mb-2 text-sm font-semibold dark:text-gray-300">Artwork Description</label>
          <textarea name="description" defaultValue={art.description} rows={4} className={`${inputClass} resize-none`}></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 pt-4">
          <button
            type="submit"
            className="w-full py-4 rounded-2xl font-bold text-white shadow-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 hover:scale-[1.01] transition-all active:scale-95"
          >
            Update Masterpiece
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateArt;