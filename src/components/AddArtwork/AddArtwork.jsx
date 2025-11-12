import React, { use } from 'react';

import { AuthContext } from '../../contexts/AuthContext';


const AddArtwork = () => {

  const { user } = use(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      image: e.target.image.value,
      title: e.target.title.value,
      name: user.displayName,
      photo: user.photo || "",
      email: user.email,
      category: e.target.category.value,
      mediumTools: e.target.mediumTools.value,
      description: e.target.description.value,
      dimensions: e.target.dimensions.value,
      price: e.target.price.value,
      visibility: e.target.visibility.value,
      likes: 0,
      createdAt: new Date(),

    }

    fetch('http://localhost:3000/arts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)

      })

  }
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-transparent text-white transition-colors duration-300">
      <div className="relative w-full max-w-2xl rounded-xl p-6 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 backdrop-blur-xl overflow-hidden border-2 border-transparent">

        {/* Gradient Border */}
        <div className="absolute inset-0 rounded-xl p-[2px] bg-gray-900 pointer-events-none"></div>

        <form onSubmit={handleSubmit} className="relative space-y-4">

          <h2 className="text-4xl font-bold mb-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
            Add New Artworks
          </h2>

          {/* User Name */}
          <div>
            <label className='label font-medium' >Name</label>
            <input
              type="text"
              placeholder=''
              name="name"
              value={user?.displayName || ''}
              required
              readOnly
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20"
            />
          </div>


          {/* User Email */}
          <div>
            <label className='label font-medium' >Email</label>
            <input
              type="email"
              name="email"
              value={user?.email || ''}
              required
              readOnly
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20"
            />
          </div>



          {/* Image URL */}
          <div>
            <label className='label font-medium' >Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="https://example.com/image.jpg"
              required
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20 placeholder-gray-300 focus:outline-none"
            />
          </div>


          {/* Title */}
          <div>
            <label className='label font-medium' >Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              required
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20 placeholder-gray-300 focus:outline-none"
            />
          </div>


          {/* Category */}
          <div>
            <label className='label font-medium' >Category</label>
            <input
              type="text"
              name="category"
              placeholder="Enter category"
              required
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20 placeholder-gray-300 focus:outline-none"
            />
          </div>


          {/* Medium/Tools */}
          <div>
            <label className='label font-medium' >Medium</label>
            <input
              type="text"
              name="mediumTools"
              placeholder="Enter medium"
              required
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20 placeholder-gray-300 focus:outline-none"
            />
          </div>


          {/* Description */}
          <div>
            <label className='label font-medium' >Description</label>
            <textarea
              name="description"
              placeholder="Enter description"
              required
              rows="4"
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20 placeholder-gray-300 focus:outline-none"
            />
          </div>


          {/* Visibility */}
          <div>
            <label className='label font-medium' >Visibility</label>
            <select
              defaultValue=""
              name="visibility"
              required
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20 focus:outline-none"
            >
              <option value="" disabled>
                Select Visibility
              </option>
              <option value="public" className="bg-gray-900 text-white">
                Public
              </option>
              <option value="private" className="bg-gray-900 text-white">
                Private
              </option>
            </select>
          </div>

          {/* Dimensions */}
          <div>
            <label className='label font-medium' >Dimensions</label>
            <input
              type="text"
              name="dimensions"
              placeholder="Enter dimensions"
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20 placeholder-gray-300 focus:outline-none"
            />
          </div>


          {/* Price */}
          <div>
            <label className='label font-medium' >Price</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20 placeholder-gray-300 focus:outline-none"
            />
          </div>







          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 hover:opacity-90 transition"
          >
            Add Artwork
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArtwork;