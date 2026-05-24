import Bookingpage from '@/app/Components/Bookingpage';
import { Deletealert } from '@/app/Components/Delete';
import { WithForm } from '@/app/Components/Modal';
import { auth } from '@/lib/auth';
import { Card } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'




async function DestinationDetailspage ({params}) {
    const {id} = await params 
    const {token} = await auth.api.getToken({
      headers : await headers()
    })

    console.log(token)

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}` , {
      headers : {
            authorization: `Bearer ${ token || ''}`
      }
    })
    const Data = await  res.json();
    // console.log(Data)

    const {destinationName,category , price , departureDate, imageUrl} = Data
    
    
    const session = await auth.api.getSession({
  headers: await headers(),
});
const User = session?.user
const Name = User?.name
const Email = User?.email
const Id = User?.id 


  // console.log(User)

  const Bookinginfo = {
     Id ,
    destinationName,
    category , 
    price , 
    departureDate,
     imageUrl,
     Name , 
     Email

  }
 
console.log(Bookinginfo)
  return (
    <div>
        <Card>
             <div className="min-h-screen bg-white p-10">

      {/* Back Button */}
      <div className="flex justify-between items-center p-5">
        <Link
          href="/destinations"
          className="text-sm text-blue-600 hover:underline"
        >
          ← Back to Destinations
        </Link>
        <div className='flex gap-5'>
            
        <Deletealert Data = {Data}></Deletealert>
          
       
            
          <WithForm  Data = {Data}></WithForm>
          
       

        </div>
       
      </div>

      {/* Hero Image */}
      <div className="max-w-6xl mx-auto px-4 mt-4">
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] rounded-xl overflow-hidden">
          <Image
            src={Data.imageUrl} 
            alt="Bali Paradise"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* Title */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">
              {Data.destinationName}
            </h1>
            <div className="flex items-center gap-3 mt-2 text-sm text-gray-600">
              <span>⭐ 4.9 (234 reviews)</span>
              <span>•</span>
              <span>{Data.duration
}</span>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              {Data.description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Highlights</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
              {[
                "Luxury beachfront accommodations",
                "Traditional Balinese spa treatment",
                "Visit Uluwatu Temple sunset",
                "Tropical island adventures",
                "Water sports experience",
                "Private beach dinner experience",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-green-500">✔</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT SIDE - BOOKING CARD */}
       <Bookingpage Data = {Data }  Bookinginfo={Bookinginfo}></Bookingpage>
      </div>
    </div>

        </Card>
       
    </div>
  )
}

export default DestinationDetailspage 