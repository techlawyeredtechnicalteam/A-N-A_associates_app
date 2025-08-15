//
"use client";
import { IoCheckmark } from "react-icons/io5";
import { motion } from "framer-motion";
import { ABOUT_ANIMATION_VARIANTS } from "../Animation/AboutAnimation";

export const WhyChooseUsCard = ({ item, index }) => (
  <motion.div
    key={index}
    className="bg-white/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/30"
    variants={ABOUT_ANIMATION_VARIANTS.item}
    whileHover={{
      backgroundColor: "rgba(255, 255, 255, 0.3)"
    }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <motion.div
      className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      <IoCheckmark className="w-5 h-5 sm:w-6 sm:h-6 text-[#b98e44]" />
    </motion.div>
    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
      {item.title}
    </h3>
    <p className="text-xs sm:text-sm text-gray-700">{item.description}</p>
  </motion.div>
);
