import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaBed, FaBath, FaRulerCombined, FaCar, FaCity, FaShip, FaPlane, FaGlobe } from "react-icons/fa";
import MortgageCalculator from "../../../services/MortageCalculator";
import icon1 from "../../../../images/icons/DWC.svg"
import icon2 from "../../../../images/icons/marina.svg"
import icon3 from  "../../../../images/icons/DXB.svg"
import icon4 from "../../../../images/icons/Downtown.svg"

import icon5 from "../../../../images/icons/new/Wallet.svg"
import icon6 from "../../../../images/icons/new/Special offer.svg"
import icon7 from "../../../../images/icons/new/Property Booking.svg"


const OffPlanDetails = () => {
  const project = {
    title: "Bugatti Residences",
    description: `Bugatti Residences by Binghatti is the world’s first project by the renowned French luxury car brand Bugatti. Binghatti Properties, one of Dubai’s leading developers, is the creator of the complex. Located in the thriving neighbourhood of Business Bay, the upcoming striking landmark will comprise 2 towers, each 52 storeys high (4B+G+1P+45+R).`,
    details: `The architectural concept of Bugatti Residences by Binghatti will skillfully combine expert craftsmanship with the impeccable heritage of Bugatti. That said, the contours of the project’s exteriors will be reminiscent of ripples of the beaches of the French Riviera and the dunes of Dubai.`,
    imgSrcs: [
      "/features/WhatsApp Image 2024-11-05 at 13.53.30_fb6c3c26.jpg",
      "/features/WhatsApp Image 2024-11-05 at 13.53.31_fdda7eeb.jpg",
      "/features/WhatsApp Image 2024-11-04 at 21.54.12_4a2182ac.jpg",
    ],
    paymentPlan: {
      description: `flexible and attractive payment plan options for buyers and investors, looking to have an exclusive beachfront lifestyle. Grab this opportunity to have a lifestyle on the Palm, where the rest of the things are convenien`,
      mapImage: "/features/map-image.jpg",
    },
    proximity: [
      { icon: icon4, text: "35 Minutes to Expo City" },
      { icon: icon2 , text: "30 Minutes to Marina Walk" },
      { icon: icon3, text: "30 Minutes to Dubai International Airport" },
      { icon:icon1, text: "35 Minutes to Downtown Dubai" }
    ],
    highlights: [
      { icon: <FaBed />, text: "5 Beds" },
      { icon: <FaBath />, text: "5 Baths" },
      { icon: <FaRulerCombined />, text: "26,000 Sq. ft." },
      { icon: <FaCar />, text: "5 Cars" },
    ],
  };

  const similarProjects = [
    {
      title: "The Acres Estates",
      imgSrc: "/features/project2/WhatsApp Image 2024-11-04 at 23.44.28_17385a5b.jpg",
      description: "Exclusive villas offering luxurious and sustainable living spaces.",
      link: "/projects/the-acres-estates",
    },
    {
      title: "Green Ridge Villas",
      imgSrc: "/features/project3/WhatsApp Image 2024-11-04 at 23.51.47_b270ce52.jpg",
      description: "Modern villas with lush green landscapes and contemporary architecture.",
      link: "/projects/green-ridge-villas",
    },
    {
      title: "Oceanfront Residences",
      imgSrc: "/features/project3/WhatsApp Image 2024-11-04 at 23.51.52_11fc0400.jpg",
      description: "Luxurious oceanfront homes with stunning sea views and amenities.",
      link: "/projects/oceanfront-residences",
    },
  ];
  

  return (
    <div className="bg-[#111612] text-[#faf8f7]">
  {/* Icons Section */}
<div className="py-10 mt-10 mt-10">
  <div className="container mx-auto px-2 flex justify-around text-center">
    <div className="flex items-center space-x-4">
      <img
        src={icon5}
        alt="Starting Price Icon"
        className="w-12 h-12" // Icon size
      />
      <div>
        <p className="text-lg font-semibold">AED 1,040,000</p>
        <span className="text-sm text-[#d3d3d3]">Starting Price</span>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <img
        src={icon6}
        alt="Special Conditions Icon"
        className="w-12 h-12" // Icon size
      />
      <div>
        <p className="text-lg font-semibold">Special Conditions</p>
        <span className="text-sm text-[#d3d3d3]">Apply Now</span>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <img
        src={icon7}
        alt="Buy Property Icon"
        className="w-12 h-12" // Icon size
      />
      <div>
        <p className="text-lg font-semibold">Buy Property</p>
        <span className="text-sm text-[#d3d3d3]">Directly from Developer</span>
      </div>
    </div>
  </div>
</div>



      {/* About This Property Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="py-20"
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
              <h2 className="text-4xl font-bold mb-10 mt-10">About This Property</h2>
              <p className="text-[#d3d3d3] leading-relaxed mb-10">{project.description}</p>
              <p className="text-[#d3d3d3] leading-relaxed mt-10 pt-10">{project.details}</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      
{/* Proximity Section */}
<div className="py-12">
  <div className="container mx-auto px-4">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: 0.2, // Stagger delay for children
          },
        },
      }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
    >
      {project.proximity.map((item, index) => {
        const [time, ...place] = item.text.split(" to "); // Separate time from the place
        return (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center"
          >
            {/* Render icon with applied color */}
            <img
              src={item.icon}
              alt="Proximity Icon"
              className="w-16 h-16 mb-6" // Increased size here
              style={{ color: "#6b7280", fill: "#6b7280" }} // Apply color here
            />
            <p className="text-base font-semibold text-[#faf8f7]"> {/* Increased text size */}
              {time} <br />
            </p>
            <p className="text-sm text-[#d3d3d3]">{place.join(" ")}</p> {/* Adjusted text size */}
          </motion.div>
        );
      })}
    </motion.div>
  </div>
</div>

{/* Payment Plan Section */}
<div className="py-12">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }} // Trigger on scroll up/down
    transition={{ duration: 1.5, ease: "easeOut" }} // Smooth animation
    className="container mx-auto px-4 lg:px-16"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Description with Title */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-[#d3d3d3] text-lg leading-relaxed"
      >
      <h2 className="text-2xl font-extrabold mb-10">Payment Plan</h2>

        <p>{project.paymentPlan.description}</p>
      </motion.div>

      {/* Clickable Map */}
      <motion.a
        href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.3935221257595!2d55.27218731499999!3d25.20484968387482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjgiTiA1NcKwMTYnMjIuNiJF!5e0!3m2!1sen!2sae!4v1604414715792!5m2!1sen!2sae"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full h-64 md:h-96 rounded-lg overflow-hidden block"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.3935221257595!2d55.27218731499999!3d25.20484968387482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjgiTiA1NcKwMTYnMjIuNiJF!5e0!3m2!1sen!2sae!4v1604414715792!5m2!1sen!2sae"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      </motion.a>
    </div>
  </motion.div>
</div>



{/* Similar Projects Section */}
<div className="bg-[#111612] text-[#faf8f7] py-16">
  <div className="container mx-auto px-4 lg:px-16">
    <h2 className="text-3xl font-bold mb-8">Similar Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {similarProjects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-[#1c1e1b] rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} // Trigger animation on every scroll
          transition={{
            duration: 1.5, // Slower animation
            ease: "easeOut", // Smooth easing
            delay: index * 0.3, // Slight delay for staggered effect
          }}
        >
          <a href={project.link}>
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-[#d3d3d3] mt-2">{project.description}</p>
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  </div>
</div>


      
    </div>
  );
};

export default OffPlanDetails;
