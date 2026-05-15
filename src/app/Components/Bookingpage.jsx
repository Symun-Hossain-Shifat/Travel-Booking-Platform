'use client'
import React from 'react'

function Bookingpage ({Data , Bookinginfo}) {
  console.log(Bookinginfo)

   const Bookingfunction = async () => {
     const res = await fetch('http://localhost:5000/booking' , {
      method : 'POST',
      headers : {
          'content-type' : 'application/json'
      },
      body : JSON.stringify(Bookinginfo)
     })
     const result = await res.json();
     console.log(result)
     
    }
      
  return (
    <div>
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
                    <button onClick={Bookingfunction}  className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
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
  )
}

export default Bookingpage 