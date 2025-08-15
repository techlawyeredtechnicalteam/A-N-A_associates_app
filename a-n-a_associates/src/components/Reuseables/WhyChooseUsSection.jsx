//
"use client";
import { motion } from "framer-motion";
import { ABOUT_ANIMATION_VARIANTS } from "../Animation/AboutAnimation";
import { WhyChooseUsCard } from "./WhyChooseUsCard";
import { WHY_CHOOSE_US_DATA } from "@/constants/WhyChooseUsCard";
import { WHY_CHOOSE_SECTION_DATA } from "@/constants/WhyChooseSectionData";

export const WhyChooseUsSection = () => (
  <motion.section
    className="bg-[#b98e44] rounded-2xl p-6 sm:p-8 lg:p-12 xl:p-16 text-center shadow-xl"
    aria-labelledby="why-choose-us"
    variants={ABOUT_ANIMATION_VARIANTS.item}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <motion.h2
      id="why-choose-us"
      className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      {WHY_CHOOSE_SECTION_DATA.title}
    </motion.h2>
    <motion.p
      className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-800 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      {WHY_CHOOSE_SECTION_DATA.description}
    </motion.p>

    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      variants={ABOUT_ANIMATION_VARIANTS.container}
    >
      {WHY_CHOOSE_US_DATA.map((item, index) => (
        <WhyChooseUsCard key={index} item={item} index={index} />
      ))}
    </motion.div>
  </motion.section>
);
