import React from "react";
import { Link, useNavigate } from "react-router";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

export const Art = ({ art, isMyGallery }) => {
  const { _id, images, image, title, name, category, price } = art;

  const displayImage = images && images.length > 0 ? images[0] : image;
  const navigate = useNavigate();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#111827",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://artopia-assignment.vercel.app/arts/${_id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then(() => {
            window.dispatchEvent(new Event("artAdded"));
            navigate("/exploreArtworks");
            Swal.fire("Deleted!", "Artwork has been deleted.", "success");
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <div
      className="relative w-full max-w-[380px] h-[380px] rounded-xl overflow-hidden cursor-pointer group"
      style={{
        padding: "2px",
        background: "linear-gradient(to right, #f97316, #ec4899, #8b5cf6)",
      }}
    >
      <div className="bg-base-100 dark:bg-gray-900 rounded-lg w-full h-full flex flex-col overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">

        {/* IMAGE */}
        <div className="relative">
          <img
            src={displayImage}
            alt={title}
            className="w-full h-52 object-cover rounded-t-lg"
          />

          {/* CATEGORY */}
          <span className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {category}
          </span>

          {/* EDIT & DELETE */}
          {isMyGallery && (
            <div className="absolute top-12 right-3 flex flex-col gap-2">
              <Link
                to={`/dashboard/update-art/${_id}`}
                className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-md transition"
                title="Edit"
              >
                <FaEdit />
              </Link>

              <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition"
                title="Delete"
              >
                <FaTrashAlt />
              </button>
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className="p-5 flex flex-col justify-between flex-grow">

          {/* TITLE */}
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 mb-2">
            {title}
          </h2>

          {/* ARTIST & PRICE */}
          <div className="mb-4">
            <p className="text-base-content/70 text-sm">{name}</p>
            <p className="text-sm font-semibold text-base-content">
              {price ? `$${price}` : "Price not set"}
            </p>
          </div>

          {/* DETAILS BUTTON */}
          <Link
            to={`/artDetails/${_id}`}
            className="mt-auto flex items-center justify-center w-full py-2 font-semibold rounded-md text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 hover:opacity-90 transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Art;
