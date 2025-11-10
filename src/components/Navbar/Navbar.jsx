import React, { use } from 'react';
import { Link, NavLink } from 'react-router';

import RegisterButton from './RegisterButton';
import LoginButton from './LoginButton';
import Switch from './Switch';
import { AuthContext } from '../../contexts/AuthContext';


const Navbar = () => {


    const { user, logOut } = use(AuthContext);

    const handleLogOut = () => {
        console.log("user trying to logout")

        logOut()
            .then(() => {
            }).catch((error) => {
                console.log(error);
            });
    }

    const links = <>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/exploreArtworks" >Explore Artworks</NavLink></li>

        {
            user && <>
                <li><NavLink to="/addArtwork" >Add Artwork</NavLink></li>
                <li><NavLink to="/myGallery" >My Gallery</NavLink></li>
                <li><NavLink to="/myFavorites" >My Favorites</NavLink></li>
            </>
        }

    </>


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

                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
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
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>


            <div className="navbar-end gap-16 ">


                <Switch></Switch>


                <div className='flex gap-2'>
                    {user ? (

                        <button onClick={handleLogOut} className='btn' >
                            Sign Out
                        </button>
                    ) : (

                        <>
                            <Link to="/login">
                                <LoginButton />
                            </Link>
                            <Link to="/register">
                                <RegisterButton />
                            </Link>
                        </>
                    )}
                </div>




            </div>

        </div>
    );
};

export default Navbar;