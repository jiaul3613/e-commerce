//import React from 'react'
import { useState } from "react"
import { NavLink, Link, useNavigate } from "react-router-dom"
import logo from '../assets/logo.png'
import user from '../assets/user.png'
import search from '../assets/search.png'
import cart from '../assets/cart.png'
import menu from '../assets/sidemenu.png'

const NavBar = () => {
    const [visable, setVisable] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between py-5 font-medium relative">
            {/* Logo */}
            <img src={logo} className="w-36 h-8 object-contain" alt="Logo" />
            
            {/* Desktop Navigation Links */}
            <ul className="hidden sm:flex gap-6 text-sm text-gray-700">
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden"/>
                </NavLink>

                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>COLLECTION</p>
                    <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden"/>
                </NavLink>

                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden"/>
                </NavLink>

                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden"/>
                </NavLink>
            </ul>

            {/* Right Side Utilities (Icons + Desktop Login) */}
            <div className="flex items-center gap-6 ml-auto sm:ml-0">
                {/* Desktop-only Login Button grouped cleanly with actions */}
                <button
                    onClick={() => navigate('/login')}
                    className="hidden sm:block px-6 py-1.5 bg-[#4438cae5] hover:bg-[#4438ca] hover:text-white text-white font-medium transition-colors duration-200 rounded-md shadow-sm"
                > 
                    Login 
                </button>

                <img src={search} className='w-5 h-6 cursor-pointer' alt="Search" />
                
                <div className="group relative">
                    <img src={user} className="w-6 h-6 cursor-pointer" alt="User" />
                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-10">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-md">
                            <p className="cursor-pointer hover:text-black">My Profile</p>
                            <p className="cursor-pointer hover:text-black">Orders</p>
                            <p className="cursor-pointer hover:text-black">Logout</p>
                        </div>
                    </div>
                </div>

                <Link to='/cart' className="relative">
                    <img src={cart} className="w-5 min-w-5" alt="Cart" />
                    <p className="absolute -right-1.25 -bottom-1.25 w-4 text-center leading-4"></p>
                </Link>

                {/* Hamburger Menu Icon */}
                <img onClick={() => setVisable(true)} src={menu} className="w-5 cursor-pointer sm:hidden" alt="Menu" />
            </div>

            {/* Sidebar menu for small screens */}
            <div className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-50 ${visable ? 'w-full' : 'w-0'}`}>
                <div className="flex flex-col text-gray-600 h-full">
                    <div onClick={() => setVisable(false)} className="flex items-center gap-4 p-4 cursor-pointer border-b">
                        <span className="font-bold text-lg">✕</span>
                        <p className="font-semibold">Back</p>
                    </div>
                    
                    {/* Mobile Navigation Links */}
                    <NavLink onClick={() => setVisable(false)} className='py-3 px-6 border-b' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisable(false)} className='py-3 px-6 border-b' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisable(false)} className='py-3 px-6 border-b' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisable(false)} className='py-3 px-6 border-b' to='/contact'>CONTACT</NavLink>
                    
                    {/* Mobile Login Button Option inside Sidebar */}
                    <div className="p-6 mt-auto">
                        <button 
                            onClick={() => { setVisable(false); navigate('/login'); }}
                            className="w-full text-center py-3 bg-[#ffdad6] text-gray-800 font-medium rounded-md"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;