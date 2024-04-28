import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Layout = () => {
    const location = useLocation()
    console.log(location);
    const authentication = location.pathname.includes("/login") || location.pathname.includes("/register")
     
    return (
        <>
           {authentication  ? '' : <Navbar/>} 
            <Outlet/>
            {authentication ? '' : <Footer/> }
        </>
    );
};

export default Layout;