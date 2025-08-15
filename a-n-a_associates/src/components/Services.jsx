"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/constants/Services";
import { SERVICES_ANIMATION_VARIANTS } from "./Animation/ServicesAnimation";

const Services = () => {
  return (
    <motion.div
      className="bg-gray-50 text-gray-900 relative overflow-hidden py-20"
      initial="hidden"
      animate="visible"
      variants={SERVICES_ANIMATION_VARIANTS.container}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={SERVICES_ANIMATION_VARIANTS.header}
        >
          <motion.p
            className="text-[#b98e44] text-sm md:text-base mb-4 tracking-wider uppercase font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our Areas of Practice
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="block text-[#152833]">
              Comprehensive Legal Services
            </span>
            <span className="block text-gray-600">
              Across Nigeria and Beyond
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            We offer top-tier legal services to individuals, businesses, and
            government institutions with expertise and dedication.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={SERVICES_ANIMATION_VARIANTS.container}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
              variants={SERVICES_ANIMATION_VARIANTS.item}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 100, damping: 10 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="w-16 h-16 bg-blue-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-300/20 transition-colors duration-300"
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {service.icon}
              </motion.div>
              <motion.h3
                className="text-xl font-bold mb-4 text-[#152833] leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 leading-relaxed text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-16"
          variants={SERVICES_ANIMATION_VARIANTS.cta}
        >
          <motion.div
            className="bg-[#152833] rounded-3xl p-8 md:p-12"
            whileHover={{
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 30 }
            }}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Need Legal Assistance?
            </motion.h3>
            <motion.p
              className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Our experienced legal team is ready to provide strategic solutions
              tailored to your specific needs. Contact us today for a
              consultation.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-[#b98e44] text-[#b98e44] px-8 py-4 rounded-lg font-semibold hover:bg-[#b98e44] hover:text-black transition-all duration-200 inline-block"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
