


import Image from "next/image";
import { FaRegCalendarAlt, FaEye } from "react-icons/fa";
import { MdOutlineConfirmationNumber } from "react-icons/md";

import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Updatedpage from "../Components/Updated";


export default async function MyBookings() {
        
        const session = await auth.api.getSession({
      headers: await headers(),
    });
    const User = session?.user

     const {token} = await auth.api.getToken({
          headers : await headers()
        })
    
        console.log(token)
    
    const Id = User?.id 
  const res =  await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${Id}` , {
        headers : {
              authorization: `Bearer ${ token || ''}`
        }
      })
  const Datas = await res.json()
  console.log(Datas)



  return (
    <div className="w-10/12 mx-auto py-10">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">My Bookings</h1>
        <p className="text-gray-500 mt-2">
          Manage and view your upcoming travel plans
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-6">
        {Datas.map((booking) => (
          <div
            key={booking._id}
            className="border rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="flex flex-col lg:flex-row gap-5 lg:items-center justify-between">
              
              {/* Left Side */}
              <div className="flex flex-col sm:flex-row gap-5">
                
                {/* Image */}
                <div className="relative w-full sm:w-[260px] h-[180px] rounded-lg overflow-hidden">
                  <Image
                    src={booking.imageUrl}
                    alt={booking.destinationName}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  
                  {/* Status */}
                  <div className="flex items-center gap-2 bg-green-100 text-green-600 w-fit px-3 py-1 rounded-full text-sm font-medium">
                    <IoCheckmarkCircleOutline />
                    Confirmed
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl font-bold mt-3">
                    {booking.destinationName}
                  </h2>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-500 mt-3">
                    <FaRegCalendarAlt />
                    <span>Departure: {booking.departureDate}</span>
                  </div>

                  {/* Booking ID */}
                  <div className="flex items-center gap-2 text-gray-500 mt-2">
                    <MdOutlineConfirmationNumber />
                    <span>Booking ID: b1</span>
                  </div>

                  {/* Price */}
                  <h3 className="text-3xl font-bold text-cyan-500 mt-4">
                    ${booking.price}
                  </h3>
                </div>
              </div>

              {/* Buttons */}
               <Updatedpage Id = {booking._id}></Updatedpage>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}