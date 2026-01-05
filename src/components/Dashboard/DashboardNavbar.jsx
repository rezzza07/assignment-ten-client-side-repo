import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router';
import Switch from '../Navbar/Switch';
import { User as UserIcon, Menu } from 'lucide-react';
import Logo from '../Navbar/Logo';

const DashboardNavbar = ({ setIsMobileOpen }) => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <header className="border-b border-pink-600/30 shadow-sm transition-colors duration-200 sticky top-0 backdrop-blur-md z-40 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">


          <div className="flex items-center">
            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg bg-gradient-to-r from-orange-500 to-purple-700 text-white shadow-md hover:scale-105 transition-transform"
            >
              <Menu className="h-6 w-6" />
            </button>


            <span className="lg:hidden ml-4 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
              <Logo></Logo>
            </span>
          </div>


          <div className="flex items-center space-x-3 sm:space-x-6">


            <div className="hidden sm:block">
              <Switch />
            </div>

            <div className="flex items-center gap-2 sm:gap-3 border-l border-gray-200 dark:border-gray-700 pl-3 sm:pl-6">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-base-content leading-none">
                  {user?.displayName || 'Artist'}
                </p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
                  {user?.email}
                </p>
              </div>

              <div className="relative group">
                <button className="flex items-center focus:outline-none">
                  <div className="h-10 w-10 rounded-full border-2 border-pink-500/30 flex items-center justify-center overflow-hidden">
                    {user?.photoURL ? (
                      <img src={user.photoURL} alt="User" className="h-full w-full object-cover" />
                    ) : (
                      <UserIcon className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </button>

                <div className="absolute right-0 mt-2 w-48 rounded-xl shadow-2xl py-2 z-50 hidden group-hover:block border border-gray-200 dark:border-gray-700 bg-base-100 dark:bg-gray-800">
                  <Link to="/dashboard/profile" className="block px-4 py-2 text-sm hover:bg-pink-500/10 hover:text-pink-500 transition-colors">Profile</Link>
                  <Link to="/dashboard" className="block px-4 py-2 text-sm hover:bg-pink-500/10 hover:text-pink-500 transition-colors">Dashboard Home</Link>
                  <button
                    onClick={logOut}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 border-t border-gray-100 dark:border-gray-700 mt-1"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;