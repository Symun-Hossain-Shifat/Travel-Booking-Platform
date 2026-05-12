import Image from 'next/image'
import React from 'react'
import logo from '../assets/Wanderlast.png'
import { CgProfile } from 'react-icons/cg'

function Navbarpage () {
  return (
    <div>
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Destinations</a></li>
        <li><a>My Booking</a></li>
        <li><a>Admin</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">
        <Image 
        src={logo} 
        alt="Logo Image"
        height={100}
        width={150} />
    </a>
  </div>
  <div className="navbar-end">
  <ul className='flex gap-5 mx-5 font-semibold'>
      <li className="flex items-center gap-3  cursor-pointer hover:text-blue-500">
  <a className="flex  items-center gap-2">
    <span className=" p-1 rounded-full">
      <CgProfile />
    </span>
    Profile
  </a>
</li>
        <li className='cursor-pointer hover:text-blue-500'><a>Login</a></li>
        <li className='cursor-pointer hover:text-blue-500'><a>SignUp</a></li>
       
      </ul>
  </div>
</div>
         </div>
  )
}

export default Navbarpage 