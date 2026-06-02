import { ShieldCheck, Map, Headphones } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Safe & Secure",
      desc: "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
    },
    {
      icon: <Map size={28} />,
      title: "Expert Guides",
      desc: "Local experts who bring deep insights to life, ensuring an authentic travel experience.",
    },
    {
      icon: <Headphones size={28} />,
      title: "24/7 Support",
      desc: "Round-the-clock customer service to assist you wherever you are, anytime.",
    },
  ];

  return (
    <section className="w-full py-16 bg-sky-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why Choose Wanderlust
        </h2>
        <p className="text-gray-500 mt-2">
          Your trusted partner for exceptional travel experiences
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center"
            >
              <div className="flex justify-center text-sky-600 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}