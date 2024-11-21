import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaBed, FaBath, FaRulerCombined, FaCar } from "react-icons/fa";

const FeatureTitleDuplicate = () => {
  const project = {
    title: "Villa Allegra",
    description: `
      Experience Luxury Living in Villa Allegra. Situated on the coveted Billionaire’s Row of Palm Jumeirah, this exquisite 5-bedroom villa presents an opportunity to live in the most desirable address in Dubai. Inspired by the contemporary style of Los Angeles, this custom-built villa has been crafted with the finest materials, with a focus on modern & contemporary elegance.
    `,
    details: `
      Villa Allegra offers unrivaled luxury with state-of-the-art amenities, expansive spaces, and meticulous attention to detail. Designed for both relaxation and entertainment, it features a private infinity pool, home theater, and stunning views of the Dubai skyline.
    `,
    imgSrcs: [
      "/off plane/2/WhatsApp Image 2024-11-05 at 02.56.21_b639dddf.jpg",
      "/off plane/2/WhatsApp Image 2024-11-05 at 02.56.28_38b5b347.jpg",
      "/off plane/2/WhatsApp Image 2024-11-05 at 02.56.29_36f40446.jpg",
    ],
    highlights: [
      { icon: <FaBed />, text: "5 beds" },
      { icon: <FaBath />, text: "9 baths" },
      { icon: <FaRulerCombined />, text: "26,000 Sq. ft." },
      { icon: <FaCar />, text: "5 cars" },
    ],
    agent: {
      name: "Mohamed Nabil",
      image: "/features/image.png",
      phone: "+97147654321",
      whatsapp: "https://wa.me/97147654321",
    },
  };

  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-screen visual-image-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Background image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/off plane/2/WhatsApp Image 2024-11-05 at 02.56.29_36f40446.jpg')",
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        ></motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t w-full h-1/2 from-transparent to-[#111612] z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#111612] z-10"></div>
      </motion.div>

      {/* Project Details Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="bg-[#111612] text-[#faf8f7] py-20"
      >
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Images Section */}
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                {project.imgSrcs.slice(0, 2).map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Property Image ${index + 1}`}
                    className="w-full h-[250px] object-cover rounded-lg"
                  />
                ))}
              </div>
              <img
                src={project.imgSrcs[2]}
                alt="Property Image 3"
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </motion.div>

            {/* Details Section */}
            <motion.div
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full space-y-6"
            >
              {/* Title, Agent, and Highlights Section */}
              <div className="flex justify-between items-center mb-8 pt-5">
                <div>
                  <h2 className="text-4xl f mb-1 mb-5">{project.title}</h2>
                  <div className="flex space-x-8 mb-6 mt-" style={{
                    paddingTop: 60,
                    marginLeft: 20,
                  }}>
                    {project.highlights.map((highlight, index) => (
                      <div key={index} className="flex flex-col items-center space-y-3  space-x-4">
                        <div className="text-2xl text-gray-500">{highlight.icon}</div>
                        <span className="text-lg  text-gray-500">{highlight.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={project.agent.image}
                    alt={project.agent.name}
                    className="w-24 h-24 rounded-full border-4 border-[#404740] mb-2"
                  />
                  <h4 className="text-xl font-semibold text-center mb-2">
                    {project.agent.name}
                  </h4>
                  <div className="flex flex-col items-center space-y-2">
                  <a
    href={`tel:${project.agent.phone}`}
    className="flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-gray-400 pr-11"
  >
    <FaPhoneAlt /> <span>CALL NOW</span>
  </a>
  <a
    href={project.agent.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-gray-400"
  >
    <FaWhatsapp /> <span>SEND A MESSAGE</span>
  </a>
                  </div>
                </div>
              </div>
              {/* Description Section */}
              <div>
                <p className="text-[#d3d3d3] leading-relaxed mb-4">{project.description}</p>
                <p className="text-[#d3d3d3] leading-relaxed">{project.details}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FeatureTitleDuplicate;
