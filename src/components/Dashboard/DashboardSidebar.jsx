import React from 'react';
import { Home, Plus, Heart, Image, User, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import Logo from '../Navbar/Logo';
import { LuPalette } from 'react-icons/lu';

const DashboardSidebar = ({ isCollapsed, setIsCollapsed, setIsMobileOpen }) => {
  const location = useLocation();

  const menuItems = [
    { name: 'Overview', href: '/dashboard', icon: Home },
    { name: 'Add Artwork', href: '/dashboard/add-artwork', icon: Plus },
    { name: 'My Gallery', href: '/dashboard/my-gallery', icon: Image },
    { name: 'My Favorites', href: '/dashboard/my-favorites', icon: Heart },
    { name: 'Profile', href: '/dashboard/profile', icon: User },
  ];

  const handleNavigation = () => {
    if (setIsMobileOpen) {
      setIsMobileOpen(false);
    }
  };

  return (
    <div className={`relative flex flex-col h-full transition-all duration-300 border-r border-gray-200 dark:border-gray-800 ${isCollapsed ? 'w-20' : 'w-64'}`}>

      {/* Desktop Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="hidden lg:flex absolute -right-3 top-8 z-50 p-1 rounded-full bg-base-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:text-pink-500 shadow-sm transition-transform active:scale-90"
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      {/* Mobile Close Button */}
      <button
        onClick={() => setIsMobileOpen(false)}
        className="lg:hidden absolute right-4 top-4 p-2 text-gray-500 hover:text-pink-500"
      >
        <X size={24} />
      </button>

      {/* Artopia Logo */}
      <div className={`flex items-center h-16 px-4 ${isCollapsed ? 'justify-center' : 'justify-start'}`}>
        <Link to="/" className="font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent transition-all duration-300">
          {isCollapsed ? <span className="text-xl"><div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 rounded-full flex items-center justify-center">
            <LuPalette className="text-white w-5 h-5 md:w-6 md:h-6" />
          </div></span> : <span className="text-2xl"><Logo></Logo></span>}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;

          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={handleNavigation}
              className={`flex items-center p-2 rounded-xl transition-all duration-200 group relative ${isActive
                ? 'bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 shadow-md text-white'
                : 'text-base-content hover:bg-gradient-to-r hover:from-orange-500/10 hover:via-pink-500/10 hover:to-purple-700/10'
                } ${isCollapsed ? 'justify-center' : 'px-4'}`}
            >
              <Icon
                className={`h-5 w-5 shrink-0 ${isActive ? 'text-white' : 'text-base-content group-hover:text-pink-500'
                  }`}
              />

              {!isCollapsed && (
                <span className="ml-3 text-sm font-medium whitespace-nowrap">
                  {item.name}
                </span>
              )}


              {isCollapsed && (
                <div className="absolute left-14 invisible lg:group-hover:visible bg-gray-800 dark:bg-gray-700 text-white text-xs py-1 px-2 rounded md whitespace-nowrap z-50 shadow-xl border border-white/10">
                  {item.name}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Help Section */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-800/50">
          <div className="rounded-2xl p-4 bg-gradient-to-br from-orange-500/5 via-pink-500/5 to-purple-700/5 border border-pink-500/10">
            <p className="text-[11px] font-medium text-pink-600 dark:text-pink-400">Need help?</p>
            <Link to="/contact" className="text-[10px] mt-1 font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 hover:text-pink-500">
              Contact Support
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardSidebar;