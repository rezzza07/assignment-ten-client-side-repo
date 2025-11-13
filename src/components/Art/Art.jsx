import React from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

export const Art = ({ art, isMyGallery }) => {
  const { _id, image, title, name, category } = art;

  const navigate = useNavigate()

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      theme: 'auto',
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#111827",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:3000/arts/${art._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            navigate('/exploreArtworks')
            Swal.fire({
          title: "Deleted!",
          theme: 'auto',
          text: "Your file has been deleted.",
          icon: "success"
        });
          })
          .catch(err => {
            console.log(err)

          })
        
      }
    });
  }

  return (
    <div
      className="relative w-[380px] h-[380px] rounded-xl overflow-hidden cursor-pointer group"
      style={{
        padding: "2px",
        background: "linear-gradient(to right, #f97316, #ec4899, #8b5cf6)",
      }}
    >
      <div className="bg-gray-900 rounded-lg w-full h-full flex flex-col overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
        {/* Image */}
        <div className="relative">
          <img src={image} alt={title} className="w-full h-52 object-cover rounded-t-lg" />
          {/* Category */}
          <span className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col justify-between h-[calc(100%-208px)]">
          {/* Title + buttons */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
              {title}
            </h2>

            {isMyGallery && (
              <div className="flex gap-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded text-sm">Update</button>
                <button onClick={handleDelete} className="bg-red-500 text-white px-3 py-1 rounded text-sm">Delete</button>
              </div>
            )}
          </div>

          <p className="text-gray-400 text-sm mb-4">{name}</p>

          <Link
            to={`/artDetails/${_id}`}
            className="flex items-center justify-center mt-auto w-full py-2 font-semibold rounded-md text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 hover:opacity-90 transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Art;
