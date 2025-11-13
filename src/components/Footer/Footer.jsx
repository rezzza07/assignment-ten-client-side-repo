import { Link } from 'react-router';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { LuRotate3D } from 'react-icons/lu';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12 px-6 rounded-t-xl mt-20 text-white">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Branding */}
        <div>
          <div className="flex items-center space-x-3">
            <LuRotate3D size={28} className="text-gradient animate-spin-slow" />
            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
              Artopia
            </span>
          </div>
          <p className="mt-4 text-gray-300">
            Discover amazing digital art, connect with creators, and explore new trends.
          </p>
          <ul className="space-y-2 mt-6">
            <li><Link to="/all-art" className="hover:text-orange-400">All Art</Link></li>
            <li><Link to="/add-art" className="hover:text-orange-400">Add Art</Link></li>
            <li><Link to="/profile" className="hover:text-orange-400">Profile</Link></li>
            <li><Link to="/auth/login" className="hover:text-orange-400">Login</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
            Resources
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-orange-400">Learning Blog</Link></li>
            <li><Link to="/" className="hover:text-orange-400">Guides</Link></li>
            <li><Link to="/" className="hover:text-orange-400">Art Tips</Link></li>
            <li><Link to="/resources" className="hover:text-orange-400">Resources</Link></li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
            Community
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-orange-400">Discussion Forums</Link></li>
            <li><Link to="/" className="hover:text-orange-400">Study Groups</Link></li>
            <li><Link to="/" className="hover:text-orange-400">Events & Workshops</Link></li>
            <li><Link to="/" className="hover:text-orange-400">Leaderboard</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
            Connect With Us
          </h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <Facebook size={22} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Twitter size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <Instagram size={22} />
            </a>
          </div>
          <div>
            <a 
              href="mailto:support@artopia.com" 
              className="flex items-center text-gray-300 hover:text-orange-400"
            >
              <Mail size={18} className="mr-2" /> support@artopia.com
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400">
        <p className="text-sm">
          © {currentYear} Artopia. All Rights Reserved.
          <span className="ml-4">
            <Link to="/" className="hover:text-orange-400 mr-3">Privacy Policy</Link>
            <Link to="/" className="hover:text-orange-400">Terms of Service</Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
