import { Link } from 'react-router';
import { LuRotate3D } from 'react-icons/lu';

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    color: "bg-blue-600",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width={22} height={22}>
        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z"/>
      </svg>
    ),
  },
  {
    href: "https://twitter.com",
    label: "X",
    color: "bg-black",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width={22} height={22}>
  <path d="M18.244 2H21.5l-7.41 8.455L22.5 22h-6.843l-5.068-6.482L4.83 22H1.5l7.93-9.04L1.5 2h6.98l4.54 5.94L18.244 2zm-2.403 17h2.11L8.24 4.922H6.01L15.841 19z"/>
</svg>

    ),
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    color: "bg-gradient-to-tr from-[#405de6] via-[#833ab4] to-[#fd1f1f]",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width={22} height={22}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403.596.212 1.022.464 1.468.91.446.445.698.872.91 1.468.163.46.35 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43-.212.596-.464 1.022-.91 1.468-.445.446-.872.698-1.468.91-.46.163-1.26.35-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403-.596-.212-1.022-.464-1.468-.91-.446-.445-.698-.872-.91-1.468-.163-.46-.35-1.26-.403-2.43-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43.212-.596.464-1.022.91-1.468.445-.446.872-.698 1.468-.91.46-.163 1.26-.35 2.43-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.772.131 4.83.302 4.042.635c-.824.35-1.523.822-2.218 1.518S.985 3.218.635 4.042C.302 4.83.131 5.772.072 7.052.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.28.23 2.222.563 3.01.35.824.822 1.523 1.518 2.218s1.394 1.168 2.218 1.518c.788.333 1.73.504 3.01.563 1.28.059 1.689.072 4.948.072s3.668-.013 4.948-.072c1.28-.059 2.222-.23 3.01-.563.824-.35 1.523-.822 2.218-1.518s1.168-1.394 1.518-2.218c.333-.788.504-1.73.563-3.01.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.28-.23-2.222-.563-3.01-.35-.824-.822-1.523-1.518-2.218S20.866.985 20.042.635c-.788-.333-1.73-.504-3.01-.563C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12 px-6  text-white">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Branding */}
        <div>
          <div className="flex items-center space-x-3">
            
            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
              artopia
            </span>
          </div>
          <p className="mt-4 text-gray-300">
            Discover amazing digital art, connect with creators, and explore new trends.
          </p>
          
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
            {socialLinks.map((social) => (
              <div key={social.label} className="relative group">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex justify-center items-center w-12 h-12 rounded-full text-gray-800 bg-white relative overflow-hidden transition-all duration-300 group-hover:text-white"
                >
                  <div
                    className={`absolute bottom-0 left-0 w-full h-0 ${social.color} transition-all duration-300 group-hover:h-full`}
                  ></div>
                  <div className="relative z-10">{social.icon}</div>
                </a>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded text-white text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {social.label}
                </span>
              </div>
            ))}
          </div>
          <div>
            <a 
              href="mailto:support@artopia.com" 
              className="flex items-center text-gray-300 hover:text-orange-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width={18} height={18} className="mr-2">
                <path d="M12 12.713l-11.714-7.713h23.428l-11.714 7.713zm0 2.574l-12-7.913v13.626h24v-13.626l-12 7.913z"/>
              </svg>
              support@artopia.com
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
