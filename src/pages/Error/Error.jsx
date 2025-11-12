import React from 'react';

import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-900">
      <div className="text-center text-white px-6">
        <h1 className="text-8xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent mb-4">
          Oops! Page not found
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          The page you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate('/')}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:scale-105 transition-transform"
        >
          <FaHome /> Back to Home
        </button>
      </div>
    </div>
  );
};

export default Error;
