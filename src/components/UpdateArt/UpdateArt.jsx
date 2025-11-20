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

  useEffect(() => {
    const fetchArt = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
          toast.error("Unauthorized. Please log in again.");
          return;
        }

        const token = await user.getIdToken();

        const res = await fetch(`https://artopia-assignment.vercel.app/arts/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          toast.error("Failed to load artwork.");
          return;
        }

        const data = await res.json();
        setArt(data?.result ?? data);
      } catch (err) {
        console.error(err);
        toast.error("Error loading artwork.");
      } finally {
        setLoading(false);
      }
    };

    fetchArt();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <Loading></Loading>
      </div>
    );
  }

  if (!art) {
    return (
      <div className="min-h-screen flex items-center mb-7 justify-center text-red-500">
        Artwork not found.
      </div>
    );
  }



  
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok) {
        toast.error("Failed to update artwork.");
        return;
      }

      toast.success("Artwork updated successfully!");
      navigate("/myGallery");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update artwork.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-transparent text-white transition-colors duration-300">
      <div className="relative w-full max-w-2xl rounded-xl p-6 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 backdrop-blur-xl overflow-hidden border-2 border-transparent">

        <div className="absolute inset-0 rounded-xl p-[2px] bg-gray-900 pointer-events-none"></div>

        <form onSubmit={handleSubmit} className="relative space-y-4">
          <h2 className="text-4xl font-bold mb-14 text-center text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-pink-500 to-purple-700">
            Update Artwork
          </h2>

          {/* Name */}
          <div>
            <label className='label font-medium'>Name</label>
            <input
              type="text"
              name="name"
              defaultValue={art.name}
              readOnly
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20"
            />
          </div>

          {/* Email */}
          <div>
            <label className='label font-medium'>Email</label>
            <input
              type="email"
              name="email"
              defaultValue={art.email}
              readOnly
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20"
            />
          </div>

          {/* Image */}
          <div>
            <label className='label font-medium'>Image URL</label>
            <input
              type="text"
              name="image"
              defaultValue={art.image}
              required
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20"
            />
          </div>

          {/* Title */}
          <div>
            <label className='label font-medium'>Title</label>
            <input
              type="text"
              name="title"
              defaultValue={art.title}
              required
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20"
            />
          </div>

          {/* Category */}
          <div>
            <label className='label font-medium'>Category</label>
            <input
              type="text"
              name="category"
              defaultValue={art.category}
              required
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20"
            />
          </div>

          {/* Medium */}
          <div>
            <label className='label font-medium'>Medium</label>
            <input
              type="text"
              name="mediumTools"
              defaultValue={art.mediumTools}
              required
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20"
            />
          </div>

          {/* Description */}
          <div>
            <label className='label font-medium'>Description</label>
            <textarea
              name="description"
              defaultValue={art.description}
              required
              rows="4"
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20"
            />
          </div>

          {/* Visibility */}
          <div>
            <label className='label font-medium'>Visibility</label>
            <select
              name="visibility"
              defaultValue={art.visibility}
              required
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>

          {/* Dimensions */}
          <div>
            <label className='label font-medium'>Dimensions</label>
            <input
              type="text"
              name="dimensions"
              defaultValue={art.dimensions}
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20"
            />
          </div>

          {/* Price */}
          <div>
            <label className='label font-medium'>Price</label>
            <input
              type="number"
              name="price"
              defaultValue={art.price}
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold bg-linear-to-r from-orange-500 via-pink-500 to-purple-700 hover:opacity-90 transition"
          >
            Update
          </button>
        </form>

      </div>
    </div>
  );
};

export default UpdateArt;
