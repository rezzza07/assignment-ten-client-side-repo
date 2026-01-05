import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
    return (
        <div className="min-h-screen bg-base-100 dark:bg-gray-900">
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;