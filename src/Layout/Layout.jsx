import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Layout = () => {
    const location = useLocation()
    console.log(location);
    const isLogin = location.pathname.includes("/login")
    return (
        <>
           {isLogin ? '' : <Navbar/>} 
            <Outlet/>
            {isLogin ? '' : <Footer/> }
        </>
    );
};

export default Layout;