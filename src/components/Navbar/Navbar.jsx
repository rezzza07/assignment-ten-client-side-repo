import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import RegisterButton from './RegisterButton';
import LoginButton from './LoginButton';
import Switch from './Switch';
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/exploreArtworks">Explore Artworks</NavLink></li>

      {user && (
        <>
          <li><NavLink to="/addArtwork">Add Artwork</NavLink></li>
          <li><NavLink to="/myGallery">My Gallery</NavLink></li>
          <li><NavLink to="/myFavorites">My Favorites</NavLink></li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-5 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>

        <h1 className="text-3xl font-bold 
          bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 
          bg-clip-text text-transparent">
          artopia
        </h1>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end gap-4 flex items-center">
        <Switch />

        {user ? (
          <div className="flex items-center gap-2">
            {/* User Profile Picture */}
            <img
              src={user.photoURL || "/default-avatar.png"}
              alt={user.displayName || "User"}
              className="w-10 h-10 rounded-full border-2 border-pink-500"
            />

            {/* Sign Out Button */}
            <button
              onClick={handleLogOut}
              className="btn bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 text-white border-none hover:opacity-90 transition"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/login"><LoginButton /></Link>
            <Link to="/register"><RegisterButton /></Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
