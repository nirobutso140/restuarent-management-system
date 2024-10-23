import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaHome, FaAd } from 'react-icons/fa';
import { FaCalendar, FaList } from 'react-icons/fa6';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    <li><NavLink to='/cart'><FaHome/>My Cart</NavLink></li>
                    <li><NavLink to='/userHome'><FaShoppingCart/>User Home</NavLink></li>
                    <li><NavLink to='/userHome'><FaCalendar/>Reservation</NavLink></li>
                    <li><NavLink to='/review'><FaAd/>Add a Review</NavLink></li>
                    <li><NavLink to='/booking'><FaList/>My Booking</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome/>Home</NavLink></li>
                </ul>
            </div>
            <div className='flex-1 p-8'>
                <Outlet/>
            </div>
        </div>

    );
};

export default Dashboard;