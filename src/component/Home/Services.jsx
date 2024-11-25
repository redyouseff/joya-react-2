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
        <div className="flex flex-wrap justify-center items-center gap-12">
          {/* First Row */}
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="p-10 bg-[#1a1f21] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center relative group w-72"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto bg-[#3d6a64] rounded-full flex items-center justify-center mb-8 group-hover:bg-opacity-90 transition duration-300">
                {React.createElement(service.icon, { className: "text-[#EFECE6]", size: 50 })}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#faf8f7]">
                {service.title}
              </h3>
            </div>
          ))}

          {/* Second Row - Centered */}
          <div className="flex gap-12">
            {services.slice(3).map((service, index) => (
              <div
                key={index}
                className="p-10 bg-[#1a1f21] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center relative group w-72"
              >
                {/* Icon */}
                <div className="w-20 h-20 mx-auto bg-[#3d6a64] rounded-full flex items-center justify-center mb-8 group-hover:bg-opacity-90 transition duration-300">
                  {React.createElement(service.icon, { className: "text-[#EFECE6]", size: 50 })}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#faf8f7]">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
