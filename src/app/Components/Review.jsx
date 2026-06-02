import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import manone from '@/asset/man1.jpg'
import mantwo from '@/asset/man2.jpg'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "Traveler",
      image: mantwo ,
      text: "The Bali Trip was absolutely magical! Every detail was perfectly planned. The resorts were luxurious and the cultural experiences were unforgettable.",
    },
    {
      name: "Sarah Johnson",
      role: "New York, USA",
      image: manone , // replace with your image
      text: "Swiss Alps adventure exceeded all expectations. The mountain views were breathtaking and our guide was incredibly knowledgeable. Highly recommended!",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What Travelers Say
            </h2>
            <p className="text-gray-500 mt-2">
              Real experiences from our happy travelers
            </p>
          </div>

          {/* arrows */}
          <div className="flex gap-2">
            <button className="p-2 rounded-full border hover:bg-gray-100">
              <ArrowLeft size={18} />
            </button>
            <button className="p-2 rounded-full border hover:bg-gray-100">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >

              {/* Text */}
              <div className="flex-1">
                <p className="text-gray-600 text-sm leading-relaxed">
                  “{item.text}”
                </p>

                <div className="mt-4">
                  <p className="font-semibold text-gray-800">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>

                {/* stars */}
                <div className="flex gap-1 mt-2 text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}