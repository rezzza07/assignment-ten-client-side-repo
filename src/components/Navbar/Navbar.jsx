import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import RegisterButton from './RegisterButton';
import LoginButton from './LoginButton';
import Switch from './Switch';
import { AuthContext } from '../../contexts/AuthContext';
import Logo from './Logo';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().catch((error) => console.log(error));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-2 py-1 relative ${isActive ? 'active-link' : ''}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/exploreArtworks"
          className={({ isActive }) =>
            `px-2 py-1 relative ${isActive ? 'active-link' : ''}`
          }
        >
          Explore Artworks
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-2 py-1 relative ${isActive ? 'active-link' : ''}`
          }
        >
          About Us
        </NavLink>
      </li>



      {user && (
        <>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `px-2 py-1 relative ${isActive ? 'active-link' : ''}`
              }
            >
              Dashboard
            </NavLink>
          </li>
        </>
      )}

      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-2 py-1 relative ${isActive ? 'active-link' : ''}`
          }
        >
          Contact
        </NavLink>
      </li>


    </>
  );

  return (
    <div className="navbar max-w-[1300px] mx-auto bg-base-100 shadow-sm px-4 lg:px-6 py-3 sticky top-0 z-50">

      {/* LEFT — LOGO + MOBILE MENU */}
      <div className="navbar-start">
        {/* Mobile menu icon */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>

          {/* Mobile dropdown */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box w-56 mt-3 p-3 shadow z-50"
          >
            {links}

            {/* Auth buttons mobile */}
            <div className="mt-3">
              {!user ? (
                <div className="flex flex-col gap-2">
                  <Link to="/login"><LoginButton /></Link>
                  <Link to="/register"><RegisterButton /></Link>
                </div>
              ) : (
                <button
                  onClick={handleLogOut}
                  className="py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 text-white rounded-lg"
                >
                  Sign Out
                </button>
              )}
            </div>
          </ul>
        </div>


        <Logo></Logo>
      </div>


      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>


      <div className="navbar-end flex items-center gap-4">


        <Switch />

        {/* Auth */}
        {user ? (
          <div className="relative group">
            <img
              src={user.photoURL || "/default-avatar.png"}
              alt={user.displayName || "User"}
              className="w-10 h-10 rounded-full border-2 border-pink-500 cursor-pointer"
            />

            <div className="absolute right-0 mt-3 w-56 bg-base-100 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 p-4">
              <p className="text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 mb-3">
                {user.displayName || "User"}
              </p>

              <button
                onClick={handleLogOut}
                className="w-full py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 text-white rounded-lg hover:opacity-90 transition"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div className="hidden lg:flex gap-2">
            <Link to="/login"><LoginButton /></Link>
            <Link to="/register"><RegisterButton /></Link>
          </div>
        )}

      </div>


      <style>
        {`
          .active-link::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 3px;
            border-radius: 2px;
            background: linear-gradient(to right, #f97316, #ec4899, #8b5cf6);
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
