'use client'

import { authClient } from '@/lib/auth-client'
import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import logo from '@/assets/Wanderlast.png'


function Navbarpage () {
 
const signoutfunction = async () => {
  await authClient.signOut();
}
const { data: session } = authClient.useSession()
// console.log(session)
  return (
    <div className='sticky top-0 z-50'>
        <div className="navbar bg-base-100 shadow-sm ">
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
        <li><Link href={'/bookingdestination'}>My Booking</Link></li>
        <li><Link href={'/addtravel'}>Add Travel</Link></li>
      </ul>
    </div>
  </div>
  <div className=" navbar-center">
    <a className="btn btn-ghost text-xl">
        <Image 
        src={logo} 
       
        alt="Logo Image"
        height={100}
        width={150} />
    </a>
  </div>
  <div className="navbar-end">
  
    {session? <ul className='flex gap-5 mx-5 font-semibold'>
     <li className="flex items-center gap-3  cursor-pointer hover:text-blue-500">
  <Link href={'/profile'} className="flex  items-center gap-2">
    <span className=" p-1 rounded-full">
      <CgProfile />
    </span>
    Profile
  </Link>
</li>
<li className='cursor-pointer hover:text-blue-500'><Button variant="danger-soft" className='rounded-none' onClick={signoutfunction}>Logout</Button></li>
    </ul>  :
    <ul className='flex gap-5 mx-5 font-semibold'>
   <li className='cursor-pointer hover:text-blue-500 mx-5'><Link href='/signin'><Button variant="danger-soft" className='rounded-none' >Login</Button></Link></li> </ul> }
     
      
  </div>
</div>
         </div>
  )
}

export default Navbarpage 