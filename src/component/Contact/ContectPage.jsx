  import React, { useEffect } from "react";
  import { motion } from "framer-motion";
  import ContactVisualImage from "./ContactVisualImage";
  import "aos/dist/aos.css";
  import AOS from "aos";

  function ContactPage() {
    useEffect(() => {
      AOS.init({
        duration: 1200,
        easing: "ease-in-out",
        once: false,
      });
    }, []);

    return ( 

      <section className="w-full min-h-screen bg-[#111612] text-[#EFECE6]">
        <div className="container mx-auto px-6 lg:px-12">
          {/* <div className="overflow-x-hidden" data-aos="fade-up">
            <ContactVisualImage />
          </div> */}
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
                <motion.div
                  className="line2"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                >
                 
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
                  <div className="tabs mb-8">
                    <ul className="flex space-y-6 md:space-y-0 md:space-x-2 md:flex-row flex-col">
                      <li>
                     
                      </li>
                      <li>
                       
                      </li>
                      <li>
                        <a
                          href="#"
                          className="tab-contact p-2 border border-[#698f8c] hover:border-[#a0b3b1] rounded-md"
                        >
                          Development
                        </a>
                      </li>
                      <li>
                     
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="p-4 bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="p-4 bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Your Phone number"
                      className="p-4 bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Your Location (Country of residence)"
                      className="p-4 bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md"
                    />
                  </div>

                

                  <div className="grid grid-cols-2 gap-6">
                  
                    <input
                      type="text"
                      placeholder=" Budget"
                      className="p-4 bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md mt-4"
                    />
                  </div>

                  <textarea
                    rows={5}
                    placeholder=" Requirements"
                    className="p-4 mt-6 w-full bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md"
                  ></textarea>

                  <button className="mt-6 px-6 py-3 bg-[#698f8c] hover:bg-[#a0b3b1] text-white rounded-md font-medium">
                  <a
  href="tel:+971585976060"
  className="mt-6 px-6 py-3 bg-[#698f8c] hover:bg-[#a0b3b1] text-white rounded-md font-medium"
>
  Send Request
</a>
                  </button>
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
                      At Joya Properties, we offer a bespoke service built on attention
                      to detail and discretion for discerning clients.
                    </p>
                    <p className="mb-6">
                      We meticulously choose brokers with exceptional success in the
                      Joya market. Currently, we are not accepting applications to
                      join the agency.
                    </p>
                  </div>
                  <div className="whatsapp mt-6">
                    <a
                      href="https://web.whatsapp.com/send?phone=+9710585734777"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4"
                    >
                   
                    
                    </a>

                      {/* Map Section */}
 {/* Map Section */}
<div className="mt-6">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.998915856884!2d55.2612381!3d25.1884074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682d1ff90fe7%3A0x14375ae978cdf590!2sPrime%20Tower%20-%20Business%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1604414715792!5m2!1sen!2sae"
    width="100%"
    height="350"
    style={{ border: 0, marginTop: "10px" }}
    allowFullScreen=""
    loading="lazy"
    className="rounded-lg"
  ></iframe>
</div>

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
    