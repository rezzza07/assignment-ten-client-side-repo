import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';

const AddArtwork = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const gradientText = "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent";

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      image: e.target.image.value,
      title: e.target.title.value,
      name: user.displayName,
      photo: user.photoURL || "",
      email: user.email,
      category: e.target.category.value,
      mediumTools: e.target.mediumTools.value,
      description: e.target.description.value,
      dimensions: e.target.dimensions.value,
      price: e.target.price.value,
      visibility: e.target.visibility.value,
      likes: 0,
      createdAt: new Date(),
      images: [
        e.target.image1.value,
        e.target.image2.value,
        e.target.image3.value,
        e.target.image4.value
      ].filter(img => img.trim() !== ''),
    };

    fetch('https://artopia-assignment.vercel.app/arts', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(() => {
        toast.success("Artwork added successfully!");
        window.dispatchEvent(new Event('artAdded'));
        navigate("/dashboard/my-gallery");
      })
      .catch(() => toast.error("Failed to add artwork!"));
  };

  return (
    <div className="max-w-4xl mx-auto pb-10">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className={`text-4xl font-extrabold ${gradientText}`}>
          Add New Artwork
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Share your latest creation with the Artopia community.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Main Info Section */}
        <div className="space-y-6 md:col-span-2 bg-white/5 dark:bg-slate-800/40 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name  */}
            <div>
              <label className="block mb-2 text-sm font-semibold dark:text-gray-300">Artist Name</label>

              <input
                type="text"
                value={user?.displayName || ''}
                readOnly
                className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-slate-900/50 text-gray-500 cursor-not-allowed"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-semibold dark:text-gray-300">Email</label>
              <input
                type="email"
                value={user?.email || ''}
                readOnly
                className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-slate-900/50 text-gray-500 cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {/* Artwork Details */}
        <div className="space-y-6 bg-white/5 dark:bg-slate-800/40 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="text-lg font-bold dark:text-white">Basic Details</h3>
          <div>
            <label className="block mb-2 text-sm font-semibold dark:text-gray-300">Artwork Title</label>
            <input type="text" name="title" required placeholder="Ex: Starry Night Over the Sea" className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent dark:text-white" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold dark:text-gray-300">Category</label>
            <input type="text" name="category" placeholder="Ex: Impressionism" className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent dark:text-white" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm font-semibold dark:text-gray-300">Price ($)</label>
              <input type="number" name="price" className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent dark:text-white" />
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
            <input type="text" name="image" required className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent dark:text-white" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold dark:text-gray-300">Medium / Tools</label>
            <input type="text" name="mediumTools" placeholder="Ex: Oil on Canvas, Photoshop" className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent dark:text-white" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold dark:text-gray-300">Dimensions</label>
            <input type="text" name="dimensions" placeholder="Ex: 24x36 inches" className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent dark:text-white" />
          </div>
        </div>

        {/* Description Section */}
        <div className="md:col-span-2 bg-white/5 dark:bg-slate-800/40 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <label className="block mb-2 text-sm font-semibold dark:text-gray-300">Artwork Description</label>
          <textarea name="description" rows={4} className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent dark:text-white"></textarea>
        </div>

        {/* Multi-Image */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-4 gap-4">
          {['image1', 'image2', 'image3', 'image4'].map((img, i) => (
            <div key={img}>
              <label className="block mb-1 text-xs font-bold uppercase text-gray-500">{`Extra Img ${i + 1}`}</label>
              <input type="text" name={img} className="w-full p-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent dark:text-white" />
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 pt-4">
          <button
            type="submit"
            className="w-full py-4 rounded-2xl font-bold text-white shadow-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 hover:scale-[1.01] transition-all active:scale-95"
          >
            Publish Artwork
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArtwork;