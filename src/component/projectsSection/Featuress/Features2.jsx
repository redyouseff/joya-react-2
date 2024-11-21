import React, { useState } from "react";
import FeaturesVisualImage from "./FeaturesVisualImage";
import FeaturesProperties from "./FeaturesProperties";
import FeatureTitle from "./FeaturesTitle";
import { motion } from "framer-motion";
import MortgageCalculator from "../../services/MortageCalculator";

const Features2 = () => {
  const [featureProperties] = useState([
    {
      title: "The Acres Estates",
      imgSrc: "/features/project2/WhatsApp Image 2024-11-04 at 23.44.28_17385a5b.jpg",
      description: "Exclusive villas offering luxurious and sustainable living spaces.",
      link: "/projects/the-acres-estates",
    },
    {
      title: "Greenridge",
      imgSrc: "/features/project3/WhatsApp Image 2024-11-04 at 23.51.53_aa60586b.jpg",
      description: "A serene community designed for family living in landscaped surroundings.",
      link: "/projects/greenridge",
    },
    {
      title: "District One Villas",
      imgSrc: "/off plane/1/WhatsApp Image 2024-11-05 at 02.53.59_940121d8.jpg",
      description: "Spacious villas in a prestigious Dubai neighborhood.",
      link: "/projects/district-one-villas",
    },
  ]);

  return (
    <div className="bg-[#111612] overflow-hidden">
      {/* Hero Section */}
      {/* <div>
        <FeaturesVisualImage />
      </div> */}

      {/* Title Section */}
      <div>
        <FeatureTitle />
      </div>

      <MortgageCalculator></MortgageCalculator>
      
      {/* Properties Section */}
      <div className="py-16 bg-[#111612] text-[#faf8f7]">
        <div className="container mx-auto px-4 lg:px-16">
          <h2 className="text-3xl font-bold mb-8">Similar Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featureProperties.map((property, index) => (
              <motion.div
                key={index}
                className="bg-[#1c1e1b] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <a href={property.link}>
                  {/* Image Hover Effect */}
                  <motion.div
                    className="overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={property.imgSrc}
                      alt={property.title}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                  {/* Text Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{property.title}</h3>
                    <p className="text-sm text-[#d3d3d3] mt-2">{property.description}</p>
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

export default Features2;
