import { LuPalette } from 'react-icons/lu';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* Icon with gradient background */}
      <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 rounded-full flex items-center justify-center">
        <LuPalette className="text-white w-5 h-5 md:w-6 md:h-6" />
      </div>

      {/* Gradient text */}
      <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent">
        artopia
      </h1>
    </div>
  );
};

export default Logo;
