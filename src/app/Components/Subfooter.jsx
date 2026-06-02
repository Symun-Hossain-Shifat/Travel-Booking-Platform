import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SubfooterSection() {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] sm:h-[70vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/travel-bg.jpg" // Replace with your image path
          alt="Aerial view of a tropical island with a plane overhead"
          fill
          priority
          className="object-cover object-center opacity-60"
        />
        {/* Vignette/Gradient Overlay to match the dark edges in the original image */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/90" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center justify-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide mb-4 text-slate-100 drop-shadow-md">
          Ready To Start Your Journey?
        </h1>

        {/* Subheading */}
        <p className="text-sm sm:text-base md:text-lg font-light text-slate-300 max-w-xl mx-auto mb-8 tracking-normal opacity-90">
          Join thousands of travelers who have discovered the world with us
        </p>

        {/* Call To Action Button */}
        <Link 
          href="/book" 
          className="group flex items-center gap-3 bg-white text-black px-8 py-4 text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-slate-100 hover:scale-[1.02] shadow-xl"
        >
          Book Your Trip Today
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}