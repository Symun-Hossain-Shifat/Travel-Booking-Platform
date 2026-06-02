import { Separator } from "@heroui/react";
import banner from "@/assets/Banner.png";

const Banner = () => {
  return (
    <div
      className="relative text-white flex flex-col items-center justify-between gap-5 min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${banner.src})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-5 flex-1 px-5">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-base md:text-xl lg:text-2xl max-w-2xl">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="uppercase bg-cyan-500 px-5 py-3 cursor-pointer">
            Explore Now
          </button>

          <button className="uppercase px-5 py-3 bg-white/30 backdrop-blur-sm cursor-pointer">
            View Destination
          </button>
        </div>
      </div>

      {/* Bottom Search Bar */}
      <div className="relative z-10 bg-white/20 backdrop-blur-md flex flex-col md:flex-row justify-between gap-4 w-full items-center p-4 md:p-6">
        
        <div className="px-3 text-center md:text-left">
          <h3 className="text-sm">Location</h3>
          <p className="text-xs">Address, City or Zip</p>
        </div>

        <Separator variant="tertiary" orientation="vertical" />

        <div className="text-center md:text-left">
          <h3 className="text-sm">Date/Duration</h3>
          <p className="text-xs">Anytime / 3 Days</p>
        </div>

        <Separator variant="tertiary" orientation="vertical" />

        <div className="text-center md:text-left">
          <h3 className="text-sm">Budget</h3>
          <p className="text-xs">$0 - $3000</p>
        </div>

        <Separator variant="tertiary" orientation="vertical" />

        <div className="text-center md:text-left">
          <h3 className="text-sm">People</h3>
          <p className="text-xs">5 - 10</p>
        </div>

        <button className="bg-cyan-500 py-2 px-6 mt-2 md:mt-0">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;