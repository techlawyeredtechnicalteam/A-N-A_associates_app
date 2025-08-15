"use client";
import { motion } from "framer-motion";
import { ABOUT_ANIMATION_VARIANTS } from "../Animation/AboutAnimation";
export const MissionVisionCard = ({ data }) => {
  const IconComponent = data.icon;

  return (
    <motion.div
      className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg border border-gray-100"
      variants={ABOUT_ANIMATION_VARIANTS.item}
      whileHover={{
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
    >
      <div className="flex items-center mb-4 sm:mb-6">
        <motion.div
          className="w-10 h-10 sm:w-12 sm:h-12 bg-[#b98e44] rounded-lg flex items-center justify-center mr-3 sm:mr-4"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </motion.div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
          {data.title}
        </h2>
      </div>
      <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
        {data.content}
      </p>
    </motion.div>
  );
};
