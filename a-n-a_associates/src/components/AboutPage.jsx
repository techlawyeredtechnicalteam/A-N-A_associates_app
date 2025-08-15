"use client";

import React from "react";
import { motion } from "framer-motion";
import { ABOUTPAGE_ANIMATION_VARIANTS } from "./Animation/AboutPageAnimation";
import { MissionVisionSection } from "./Reuseables/MissionVisionSection";
import { WhyChooseUsSection } from "./Reuseables/WhyChooseUsSection";

const AboutPage = () => {
  return (
    <motion.section
      variants={ABOUTPAGE_ANIMATION_VARIANTS.container}
      initial="hidden"
      animate="visible"
      className="bg-gray-100 min-h-screen z-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={ABOUTPAGE_ANIMATION_VARIANTS.fadeInUp}
        >
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
        <MissionVisionSection />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />
      </div>
    </motion.section>
  );
};

export default AboutPage;
