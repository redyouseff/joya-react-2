import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function OffPlan() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const offPlanCards = [
    {
      title: "Bugatti Residences",
      imgSrc: "/features/WhatsApp Image 2024-11-04 at 21.54.12_4a2182ac.jpg",
      description:
        "Bugatti Residences by Binghatti is a luxury project in Dubai, combining expert craftsmanship with the impeccable heritage of Bugatti. This architectural marvel captures the essence of French Riviera and Dubai dunes.",
    },
    {
      title: "The Acres Estates",
      imgSrc: "/features/project2/WhatsApp Image 2024-11-04 at 23.44.28_17385a5b.jpg",
      description:
        "The Acres Estates is an exclusive collection of villas offering spacious living with a sustainable community focus. Enjoy private pools, gardens, and serene views of lush landscapes.",
    },
    {
      title: "GREENRIDGE",
      imgSrc: "/features/project3/WhatsApp Image 2024-11-04 at 23.51.53_aa60586b.jpg",
      description:
        "Greenridge provides a balanced lifestyle for families, blending privacy with vibrant community life in stunning 3- and 4-bedroom townhouses surrounded by landscaped beauty.",
    },
  ];

  const maxDescriptionLength = 140;

  return (
    <div className="bg-[#111612] min-h-screen flex flex-col items-center pt-48 pb-12">
      <h2 className="text-5xl font-semibold text-white mb-14 mt-20" data-aos="fade-down">
        Off Plan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl px-4 mb-32">
        {offPlanCards.map((card, index) => (
          <a
            href="/Projects/Off-Plan2"
            key={index}
            className="bg-[#1c1e1b] rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
          >
            <div className="overflow-hidden rounded-lg mb-6">
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-64 object-cover rounded-lg transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h3 className="text-3xl font-semibold text-white mb-4">{card.title}</h3>
            <p className="text-[#a0b3b1] text-base leading-relaxed">
              {truncateText(card.description, maxDescriptionLength)}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default OffPlan;
