import React from "react";
import { Home, Key, Briefcase, Phone } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Real Estate Buying & Selling",
  },
  {
    icon: Key,
    title: "Property Rental",
  },
  {
    icon: Phone,
    title: "Off Plan Property Sales",
  },
  {
    icon: Briefcase,
    title: "Commercial",
  },
  {
    icon: Home,
    title: "Property Management",
  },
];

const Services = () => {
  return (
    <section className="py-16 text-[#EFECE6] mt-10">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-[#f0ede6]">
          Our Signature Services
        </h2>

        {/* Grid for Main Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="p-8 bg-[#111810] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center relative group w-64"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto bg-[#3d6a64] rounded-full flex items-center justify-center mb-6 group-hover:bg-opacity-90 transition duration-300">
                {React.createElement(service.icon, { className: "text-[#EFECE6]", size: 40 })}
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium text-[#faf8f7] mb-3">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Centered Row for Last Two Services */}
        <div className="flex justify-center gap-16 mt-16">
          {services.slice(3).map((service, index) => (
            <div
              key={index}
              className="p-8 bg-[#111810] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center relative group w-64"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto bg-[#3d6a64] rounded-full flex items-center justify-center mb-6 group-hover:bg-opacity-90 transition duration-300">
                {React.createElement(service.icon, { className: "text-[#EFECE6]", size: 40 })}
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium text-[#faf8f7] mb-3">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
