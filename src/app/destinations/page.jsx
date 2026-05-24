import Link from 'next/link'
import React from 'react'
import { TfiArrowTopRight } from 'react-icons/tfi'

async function Destinationpage () {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`)
    const Datas = await res.json()
    console.log(Datas)
  return (
    <div>
 


    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <div className='mb-8'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>Explore All Destinations</h2>
        <p className='text-gray-500 mt-2'>Find your perfect travel experience from our curated collection</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border border-gray-200 rounded-2xl p-4 mb-8'>
        <select className='outline-none border rounded-xl px-4 py-3 text-sm'>
          <option>Category</option>
        </select>
        <select className='outline-none border rounded-xl px-4 py-3 text-sm'>
          <option>Price Range</option>
        </select>
        <select className='outline-none border rounded-xl px-4 py-3 text-sm'>
          <option>Sort By</option>
        </select>
        <button className='bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl px-4 py-3 font-medium'>Search</button>
      </div>

      <p className='text-sm text-gray-500 mb-5'>Showing {Datas.length} destinations</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {
        Datas.map(item => (
             <div key={item._id} className='bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition'>
            <div className='relative h-56'>
              <img src={item.imageUrl} alt=
              'Travel image' className='w-full h-full object-cover' />
              <span className='absolute top-3 right-3 bg-white/90 text-sm px-3 py-1 rounded-full font-semibold'>★ 4.5</span>
            </div>
            <div className='p-5'>
              <p className='text-xs text-gray-500 mb-1'>📍 {item.country
}</p>
              <div className='flex items-start justify-between gap-3'>
                <h3 className='font-semibold text-lg text-gray-900'>{item.destinationName}</h3>
                <p className='font-bold text-gray-900 whitespace-nowrap'>${item.price}<span className='text-xs text-gray-400 font-normal'> /person</span></p>
              </div>
              <p className='text-sm text-gray-500 mt-1'>{item.duration
}</p>
              <Link href={`/destinations/${item._id}`}>
              <button className='mt-4 flex gap-3 items-center text-cyan-600 font-semibold hover:underline'>See Details <TfiArrowTopRight /></button>
              </Link>
              
            </div>
          </div>

        ))
      }
          
    
      </div>
    </section>

</div>
  )
}

export default Destinationpage 