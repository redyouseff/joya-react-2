import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com"; // EmailJS for sending emails
import "aos/dist/aos.css";
import AOS from "aos";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    budget: "",
    requirements: "",
  });

  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS Configuration
    emailjs
      .send(
        "service_id", // Replace with your EmailJS service ID
        "template_id", // Replace with your EmailJS template ID
        formData,
        "user_id" // Replace with your EmailJS user ID
      )
      .then(
        () => {
          setFormStatus("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            location: "",
            budget: "",
            requirements: "",
          });
        },
        () => {
          setFormStatus("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <section className="w-full min-h-screen bg-[#111612] text-[#EFECE6]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="contacts py-12 text-white pt-32 bb-16 overflow-x-hidden">
          <div className="container mx-auto">
            <div className="text-center">
              <motion.div
                className="line1"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <h2 className="text-5xl lg:text-[90px] font-light leading-none">
                  Contact us
                </h2>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 px-4 lg:px-0">
              {/* Form Section */}
              <motion.div
                className="form"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <p className="text-xl uppercase text-[#9da5a4] mb-6">
                  What Can We Do For You?
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="p-4 bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="p-4 bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="text"
                      name="phone"
                      placeholder="Your Phone number"
                      className="p-4 bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="text"
                      name="location"
                      placeholder="Your Location (Country of residence)"
                      className="p-4 bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-6 mt-4">
                    <input
                      type="text"
                      name="budget"
                      placeholder="Budget"
                      className="p-4 bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md"
                      value={formData.budget}
                      onChange={handleInputChange}
                    />
                  </div>

                  <textarea
                    name="requirements"
                    rows={5}
                    placeholder="Requirements"
                    className="p-4 mt-6 w-full bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md"
                    value={formData.requirements}
                    onChange={handleInputChange}
                  ></textarea>

                  <button
                    type="submit"
                    className="mt-6 px-6 py-3 bg-[#698f8c] hover:bg-[#a0b3b1] text-white rounded-md font-medium"
                  >
                    Send Request
                  </button>
                </form>

                {formStatus && (
                  <p className="mt-4 text-center text-sm">{formStatus}</p>
                )}
              </motion.div>

              {/* Side Section */}
              <motion.div
                className="side"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
              >
                <div className="text text-[#9da5a4]">
                  <p className="mb-6">
                    At Joya Properties, we offer a bespoke service built on
                    attention to detail and discretion for discerning clients.
                  </p>
                </div>

                {/* Map Section */}
                <div className="mt-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.3935221257595!2d55.27218731499999!3d25.20484968387482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjgiTiA1NcKwMTYnMjIuNiJF!5e0!3m2!1sen!2sae!4v1604414715792!5m2!1sen!2sae"
                    width="100%"
                    height="350"
                    style={{ border: 0, marginTop: "10px" }}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
