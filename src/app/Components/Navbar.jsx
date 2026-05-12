import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/destinations'}>Destinations</Link></li>
        <li><Link href={'/'}>My Booking</Link></li>
        <li><Link href={'/addtravel'}>Add Travel</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">
        <Image 
        src={'/assets/Wanderlast.png'} 
        alt="Logo Image"
        height={100}
        width={150} />
    </a>
  </div>
  <div className="navbar-end">
  <ul className='flex gap-5 mx-5 font-semibold'>
      <li className="flex items-center gap-3  cursor-pointer hover:text-blue-500">
  <Link href={'/'} className="flex  items-center gap-2">
    <span className=" p-1 rounded-full">
      <CgProfile />
    </span>
    Profile
  </Link>
</li>
        <li className='cursor-pointer hover:text-blue-500'><Link href={'/'}>Login</Link></li>
        <li className='cursor-pointer hover:text-blue-500'><Link href={'/'}>SignUp</Link></li>
       
      </ul>
  </div>
</div>
         </div>
  )
}

export default Navbarpage 