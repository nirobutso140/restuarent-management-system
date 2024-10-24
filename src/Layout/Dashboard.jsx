import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaHome, FaAd, FaUtensilSpoon, FaUtensils, FaBook, FaUser } from 'react-icons/fa';
import { FaCalendar, FaList } from 'react-icons/fa6';

const Dashboard = () => {
    const isAdmin = true;
    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to='/adminHome'><FaHome />Admin Home</NavLink></li>
                                <li><NavLink to='/addItems'><FaUtensils />Add Items</NavLink></li>
                                <li><NavLink to='/manageItems'><FaList />Manage Items</NavLink></li>
                                <li><NavLink to='/bookings'><FaBook />Manage Bookings</NavLink></li>
                                <li><NavLink to='/allUser'><FaUser />All User</NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to='/cart'><FaHome />My Cart</NavLink></li>
                                <li><NavLink to='/userHome'><FaShoppingCart />User Home</NavLink></li>
                                <li><NavLink to='/userHome'><FaCalendar />Reservation</NavLink></li>
                                <li><NavLink to='/review'><FaAd />Add a Review</NavLink></li>
                                <li><NavLink to='/booking'><FaList />My Booking</NavLink></li>
                            </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome />Home</NavLink></li>
                </ul>
            </div>
            <div className='flex-1 p-8'>
                <Outlet />
            </div>
        </div>

    );
};

export default Dashboard;