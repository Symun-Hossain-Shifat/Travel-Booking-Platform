'use client'


import { redirect } from 'next/navigation'
import React from 'react'
import { FaEye } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'

function Updatedpage ({Id}) {
    console.log(Id)
      const Deletebooking = async () => {
         const {data : tokendata } = await authClient.token() 
      console.log(tokendata)
    const res = await fetch(`http://localhost:5000/booking/${Id}` , {
        method : 'DELETE' , 
        headers : {

        'content-type' : 'application/json'  ,
        authorization : `Bearer ${tokendata?.token}`
        }

    })
    const Data = await res.json()
     console.log(Data)
    redirect('/')
   
    
  }
  return (
    <div>
      <div className="flex gap-5 items-end">
                <button onClick={Deletebooking} className="border border-red-400 text-red-500 px-5 py-2 rounded-md flex items-center gap-2 hover:bg-red-50 transition">
                  <RiDeleteBin6Line />
                 Delete
                </button>

                <button className="bg-cyan-500 text-white px-5 py-2 rounded-md flex items-center gap-2 hover:bg-cyan-600 transition">
                  <FaEye />
                  View
                </button>
              </div>
    </div>
  )
}

export default Updatedpage 