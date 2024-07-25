import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [sticky, setSticky] = useState(false)

    const navList = (<>
    <li><a href='/Home'> Home</a></li>
            
    <li><a href='/contact-us'>Contact Us</a></li>

    <li><a href='/about-us'>About Us</a></li>
    </>)
  return (
   <>
   <div>
        <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-10">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             {navList}
            </ul>
            </div>
            <a className="btn btn-ghost text-xl">ITG</a>
        </div>
        <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            {navList}
            </ul>
        </div>
        <div className="">
            <Link to={'/'}>
            <a className="btn">SignOut</a>
            </Link>
        </div>
        </div>
        </div> 
   </div>
   </>
  )
}

export default Navbar