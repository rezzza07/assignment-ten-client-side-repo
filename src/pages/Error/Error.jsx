import React from 'react';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-900">

      {/* Outer gradient border */}
      <div className="p-[3px] rounded-3xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 shadow-[0_0_40px_rgba(255,0,150,0.4)]">

        {/* Inner Card */}
        <div className="text-center text-white px-10 py-14 rounded-3xl bg-gray-900 backdrop-blur-xl">

          {/* ERROR ICON */}
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              width="90"
              height="90"
              className="drop-shadow-[0_0_12px_rgba(255,0,150,0.5)] 
                         bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 
                         bg-clip-text text-transparent fill-current"
            >
              <path d="M320 64C334.7 64 348.2 72.1 355.2 85L571.2 485C577.9 497.4 577.6 512.4 570.4 524.5C563.2 536.6 550.1 544 536 544L104 544C89.9 544 76.8 536.6 69.6 524.5C62.4 512.4 62.1 497.4 68.8 485L284.8 85C291.8 72.1 305.3 64 320 64zM320 416C302.3 416 288 430.3 288 448C288 465.7 302.3 480 320 480C337.7 480 352 465.7 352 448C352 430.3 337.7 416 320 416zM320 224C301.8 224 287.3 239.5 288.6 257.7L296 361.7C296.9 374.2 307.4 384 319.9 384C332.5 384 342.9 374.3 343.8 361.7L351.2 257.7C352.5 239.5 338.1 224 319.8 224z"/>
            </svg>
          </div>

          {/* 404 */}
          <h1 className="text-9xl font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,0,150,0.5)] mb-4">
            404
          </h1>

          {/* Title */}
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent mb-4 tracking-wide">
            Page Not Found
          </h2>

          {/* Subtitle */}
          <p className="text-gray-300 text-xl mb-10 max-w-xl mx-auto">
            The page you’re trying to reach does not exist or has been moved.
          </p>

          {/* Button */}
          <button
            onClick={() => navigate('/')}
            className="mx-auto flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 px-8 py-4 rounded-xl font-semibold text-xl hover:scale-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,0,150,0.6)]"
          >
            <FaHome size={24} /> Back to Home
          </button>

        </div>
      </div>
    </div>
  );
};

export default Error;
