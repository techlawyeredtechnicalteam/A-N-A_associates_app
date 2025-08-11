"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaMapPin } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import Header from "@/components/Header";

const ContactPage = () => {
  // Animation Varianta
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0.8 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Page Header */}
        <motion.div className="text-center mb-16" variants={cardVariants}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#152833]">
            Get In Touch
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your legal needs? Contact us today for expert legal
            advice and representation.
          </p>
        </motion.div>

        {/* Contact Information Grid - 3 Columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
        >
          {/* Office Address */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                className="bg-blue-300 p-4 rounded-2xl mb-6 group-hover:bg-blue-200 transition-colors duration-300"
                variants={iconVariants}
              >
                <FaMapPin className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#152833] mb-4">
                Our Office
              </h3>
              <div className="text-gray-600 leading-relaxed space-y-1">
                <p className="font-medium">1st Floor, Scapular Plaza,</p>
                <p>Igbo Efon Bus-stop</p>
                <p>Lekki Epe Expressway,</p>
                <p>Lekki, Lagos.</p>
              </div>
            </div>
          </motion.div>

          {/* Phone Numbers */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                className="bg-blue-300 p-4 rounded-2xl mb-6 group-hover:bg-blue-200 transition-colors duration-300"
                variants={iconVariants}
              >
                <MdLocalPhone className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#152833] mb-4">Phone</h3>
              <div className="space-y-3">
                <p className="text-gray-600">
                  <a
                    href="tel:+2348037778498"
                    className="hover:text-[#b98e44] transition-colors duration-300 font-medium"
                  >
                    +234 803 777 8498
                  </a>
                </p>
                <p className="text-gray-600">
                  <a
                    href="tel:+2348050590365"
                    className="hover:text-[#b98e44] transition-colors duration-300 font-medium"
                  >
                    +234 805 059 0365
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Office Hours */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                className="bg-blue-300 p-4 rounded-2xl mb-6 group-hover:bg-blue-200 transition-colors duration-300"
                variants={iconVariants}
              >
                <CiClock2 className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#152833] mb-4">
                Office Hours
              </h3>
              <div className="space-y-3 text-gray-600">
                <div>
                  <p className="font-semibold text-[#152833]">
                    Monday to Friday
                  </p>
                  <p>9:00 am to 6:00 pm</p>
                </div>
                <div>
                  <p className="font-semibold text-[#152833]">Saturday</p>
                  <p>9:00 am to 1:00 pm</p>
                </div>
                <div>
                  <p className="font-semibold text-[#152833]">Sunday</p>
                  <p>Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Map Section */}
      <motion.div
        className="bg-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#152833] mb-4">
              Find Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our office is conveniently located in Lekki, Lagos. Visit us for a
              consultation or contact us to schedule an appointment.
            </p>
          </div>

          {/* Map Container */}
          <motion.div
            className="rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-gradient-to-br from-blue-100 to-green-100 h-96 flex items-center justify-center relative">
              {/* Map Overlay */}
              <motion.div
                className="relative z-10 bg-white p-8 rounded-2xl shadow-xl max-w-sm mx-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center">
                    <FaMapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#152833] text-lg">
                      A.N.A & Associates
                    </h3>
                    <p className="text-sm text-gray-600">Legal Practitioners</p>
                  </div>
                </div>
                <div className="text-sm text-gray-600 space-y-1 mb-6">
                  <p>1st Floor, Scapular Plaza</p>
                  <p>Igbo Efon Bus-stop</p>
                  <p>Lekki Epe Expressway</p>
                  <p>Lekki, Lagos</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 font-medium">Open Now</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Closes at 6:00 PM
                  </p>
                </div>
              </motion.div>
          
              {/* Street Grid Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "50px 50px"
                  }}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* Map Instructions */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <p className="text-gray-600 mb-4">
              Need directions? Click the button below to open in your preferred
              map application.
            </p>
            <motion.a
              href="https://maps.google.com/?q=1st+Floor+Scapular+Plaza+Igbo+Efon+Bus-stop+Lekki+Epe+Expressway+Lekki+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-300 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-200 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaMapPin className="w-5 h-5" />
              <span>Get Directions</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
