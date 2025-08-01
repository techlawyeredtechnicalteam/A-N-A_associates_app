"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  aboutcontainerVariants,
  fadeInUpVariants,
  aboutVariants,
  iconVariants,
  featureVariants
} from "./AnimationVariants";

const AboutPage = () => {
  return (
    <motion.section
      variants={aboutcontainerVariants}
      initial="hidden"
      animate="visible"
      className="bg-gray-100 min-h-screen z-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={fadeInUpVariants}
        >
          {/* Logo */}
          {/* <motion.div
            className="flex justify-center mb-6 sm:mb-8"
            variants={logoVariants}
          >
            <motion.div
              transition={{ duration: 0.3 }}
              className="w-16 h-16 sm:w-20 sm:h-20 bg-[#b98e44] rounded-full flex items-center justify-center shadow-lg"
            >
              <img
                src="/logo-crop.jpg"
                alt="A.N.A & Associates Logo - Lady Justice representing legal excellence and integrity"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
                width="48"
                height="48"
                loading="eager"
                decoding="async"
              />
            </motion.div>
          </motion.div> */}

          {/* Main Description */}
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A modern and full-service law firm based in Lagos, Nigeria. We are
            committed to providing exceptional legal solutions tailored to meet
            the unique needs of our clients. We pride ourselves on our ability
            to combine local knowledge with global best practices.
          </motion.p>
        </motion.div>

        {/* Mission & Vision Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16"
          variants={aboutcontainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Mission */}
          <motion.div
            className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg border border-gray-100"
            variants={aboutVariants}
          >
            <motion.div
              className="flex items-center mb-4 sm:mb-6"
              variants={fadeInUpVariants}
            >
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#b98e44] rounded-lg flex items-center justify-center mr-3 sm:mr-4"
                variants={iconVariants}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </motion.div>
              <motion.h3
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our Mission
              </motion.h3>
            </motion.div>
            <motion.p
              className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              To provide strategic, innovative, and cost-effective legal
              solutions that help our clients succeed.
            </motion.p>
          </motion.div>

          {/* Vision - Fixed with motion.div */}
          <motion.div
            className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg border border-gray-100"
            variants={aboutVariants}
          >
            <motion.div
              className="flex items-center mb-4 sm:mb-6"
              variants={fadeInUpVariants}
            >
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#b98e44] rounded-lg flex items-center justify-center mr-3 sm:mr-4"
                variants={iconVariants}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </motion.div>
              <motion.h3
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our Vision
              </motion.h3>
            </motion.div>
            <motion.p
              className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              To be a leading law firm in Nigeria, recognized for excellence,
              integrity, and client satisfaction.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          className="bg-[#b98e44] rounded-2xl p-8 sm:p-12 lg:p-16 text-center shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Why Choose Us?
          </motion.h3>
          <motion.p
            className="text-gray-800 text-lg sm:text-xl mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            We offer comprehensive support in navigating Nigeria's complex legal
            and regulatory landscape with our experienced team and
            client-centered approach.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={aboutcontainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Feature 1 */}
            <motion.div
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30"
              variants={featureVariants}
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Experienced Legal Team
              </h4>
              <p className="text-gray-700 text-sm">
                Seasoned professionals with deep expertise
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30"
              variants={featureVariants}
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Client-Centered Approach
              </h4>
              <p className="text-gray-700 text-sm">
                Your needs are our top priority
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30"
              variants={featureVariants}
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Prompt Response Time
              </h4>
              <p className="text-gray-700 text-sm">
                Quick and efficient service delivery
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30"
              variants={featureVariants}
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Proven Track Record
              </h4>
              <p className="text-gray-700 text-sm">
                Consistent success for our clients
              </p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 sm:col-span-2 lg:col-span-1"
              variants={featureVariants}
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Transparent Billing
              </h4>
              <p className="text-gray-700 text-sm">
                Clear and honest pricing structure
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
