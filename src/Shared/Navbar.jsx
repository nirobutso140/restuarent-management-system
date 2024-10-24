import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaCartShopping } from "react-icons/fa6";
import useAxiosSecure from '../Hooks/useAxiosSecure';
const axiosSecure = useAxiosSecure()

const Navbar = () => {
    const [cart, setCart] = useState([])
    console.log(cart)
    useEffect(()=>{
        axiosSecure.get("/cart")
        .then((res)=> setCart(res.data))
        .catch((error) => console.error(error))
      })
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => console.log("logout successfully"))
            .catch(error => console.error(error))
    }
    const navOptions = <>
        <li><Link to='/'>HOME</Link></li>
        {
            user && <>
                <li><Link to='/menu'>MENU</Link></li>
                <li><Link to='/shop'>OUR SHOP</Link></li>

            </>
        }
        <li><Link to='/contact'>CONTACT US</Link></li>
        <li><Link to='/login'>LOGIN</Link></li>
        <li><Link to='/register'>REGISTER</Link></li>
        <li><Link to="/cart">
            <FaCartShopping />
            <div className="badge badge-secondary">+{cart.length}</div>
        </Link></li>
    </>
    return (
        <>
            <div className="navbar  fixed text-white z-10 bg-black max-w-screen-xl bg-opacity-30">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Sabbir's Kichen</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {

                        user ?
                            <>
                                <span className="mx-3">{user?.displayName}</span>
                                <button onClick={handleLogOut} className="btn btn-sm btn-secondary">Log out</button>
                            </>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm">Log in</button>
                            </Link>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;