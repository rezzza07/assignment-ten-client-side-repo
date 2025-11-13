import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center space-x-6 text-7xl font-extrabold tracking-widest">

        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent">
          L
        </span>

        <div className="w-24 h-24">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full overflow-visible animate-[rot_3s_infinite]"
          >
            <g className="points">
              <circle
                fill="none"
                r="50"
                cy="50"
                cx="50"
                className="animate-[breath_3s_infinite]"
                stroke="url(#gradient)"
                strokeWidth="2"
              />
              <circle
                r="4"
                cy="50"
                cx="5"
                className="animate-[toBig2_3s_infinite] fill-[url(#gradient)]"
              />
              <circle
                r="4"
                cy="50"
                cx="95"
                className="animate-[toBig_3s_infinite] fill-[url(#gradient)]"
              />
            </g>

            
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" /> {/* orange-500 */}
                <stop offset="50%" stopColor="#ec4899" /> {/* pink-500 */}
                <stop offset="100%" stopColor="#8b5cf6" /> {/* purple-700 */}
              </linearGradient>
            </defs>
          </svg>
        </div>

        
        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent">
          A
        </span>
        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent">
          D
        </span>
        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent">
          I
        </span>
        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent">
          N
        </span>
        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent">
          G
        </span>
      </div>


      <style>{`
        @keyframes rot {
          0% { transform: rotate(0deg); }
          30%, 50% { transform: rotate(360deg); }
          80%, 100% { transform: rotate(0deg); }
        }

        @keyframes toBig {
          0%, 30% { transform: scale(1) translateX(0px); }
          50%, 80% { transform: scale(10) translateX(-4.5px); }
          100% { transform: scale(1) translateX(0px); }
        }

        @keyframes toBig2 {
          0%, 30% { transform: scale(1) translateX(0px); }
          50%, 80% { transform: scale(10) translateX(4.5px); }
          100% { transform: scale(1) translateX(0px); }
        }

        @keyframes breath {
          15%, 65% { transform: scale(1); }
          40%, 90% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default Loading;
