//import React from 'react'
import { useState } from "react"
import { NavLink ,Link } from "react-router-dom"
import logo from '../assets/logo.png'
import user from '../assets/user.png'
import search from '../assets/search.png'
import cart from '../assets/cart.png'
import menu from '../assets/sidemenu.png'


const NavBar = () => {
    const [ visable , setVisable ] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium ">
        <img src={logo} className="w-36 h-8 " alt="" />
        <ul className="hidden sm:flex gap-6 text-sm text-gray-700">
        <NavLink  to='/' className='flex flex-col items-center gap-1' >
            <p>HOME</p>
            <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden"/>
        </NavLink>

        <NavLink  to='/collection' className='flex flex-col items-center gap-1' >
            <p>COLLECTION</p>
            <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden"/>
        </NavLink>


        <NavLink  to='/about' className='flex flex-col items-center gap-1' >
            <p>ABOUT</p>
            <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden"/>
        </NavLink>

        <NavLink  to='/contact' className='flex flex-col items-center gap-1' >
            <p>CONTACT</p>
            <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden"/>
        </NavLink>

        </ul>
        <div className="flex items-center gap-6">
            <img src={search}  className='w-5  h-6 cursor-pointer' alt="" />
            <div className="group relative">
                <img src={user} className="w-6 h-6" alt="" />
                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                        <p className="cursor-pointer hover:text-black">My Profile</p>
                        <p className="cursor-pointer hover:text-black">Orders</p>
                        <p className="cursor-pointer hover:text-black">Logout</p>
                    </div>

                </div>

            </div>
            <Link to='/cart' className="relative">
            <img src={cart} className="w-5 min-w-5" alt="" />
            <p className="absolute -right-1.25 -bottom-1.25  w-4 text-center leading-4"></p>
            </Link>
            <img  onClick={()=>setVisable(true)} src={menu} className="w-5 cursor-pointer sm:hidden" alt="" />
        </div>
        {/* Sidebar menu for small screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visable ? 'w-full' : 'w-0'}`}>
            <div className="flex flex-col text-gray-600">
                <div onClick={()=>setVisable(false) } className="flext items-center gap-4 p-3 cursor-pointer">
                    <img className='h-4 rotate-180' src="" alt="" />
                    <p>Back</p>

                </div>
                <NavLink onClick={()=>setVisable(false)} className='py-2 p1-6 border' to='/'>HOME</NavLink>
                <NavLink onClick={()=>setVisable(false)} className='py-2 p1-6 border' to='/collection'>COLLECTION</NavLink>
                <NavLink onClick={()=>setVisable(false)} className='py-2 p1-6 border' to='/about'>ABOUT</NavLink>
                <NavLink onClick={()=>setVisable(false)} className='py-2 p1-6 border' to='/contact'>CONTACT</NavLink>
            </div>

        </div>


    </div>
  )
}

export default NavBar