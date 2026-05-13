import { Deletealert } from '@/app/Components/Delete';
import { WithForm } from '@/app/Components/Modal';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


import { RiDeleteBin6Line } from 'react-icons/ri';

async function DestinationDetailspage ({params}) {
    const {id} = await params 
    console.log(id)
    const res = await fetch(`http://localhost:5000/destination/${id}`)
    const Data = await  res.json();
    // console.log(Data)
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
        <div className="lg:col-span-1">
          <div className="border rounded-xl p-5 shadow-sm sticky top-5">

            <div className="text-sm text-gray-500">Starting from</div>
            <div className="text-2xl font-bold text-black">
              ${Data.price} <span className="text-sm font-normal">/ per person</span>
            </div>

            {/* Date */}
            <div className="mt-4 text-sm text-gray-600">
              📅{Data.departureDate
}
            </div>

            {/* Button */}
            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Book Now →
            </button>

            {/* Features */}
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>✔ Free cancellation up to 7 days</p>
              <p>✔ Travel insurance included</p>
              <p>✔ 24/7 customer support</p>
            </div>

          </div>
        </div>

      </div>
    </div>

        </Card>
       
    </div>
  )
}

export default DestinationDetailspage 