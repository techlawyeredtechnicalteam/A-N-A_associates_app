//
"use client";
import { motion } from "framer-motion";
import { HERO_ANIMATION_VARIANTS } from "../Animation/HeroAnimation";

export const ValueCard = ({ title, description, index }) => (
  <motion.article
    variants={HERO_ANIMATION_VARIANTS.card}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/10 hover:border-blue-400/30 transition-colors duration-300"
  >
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
      viewport={{ once: true }}
      className="text-[#b98e44] font-semibold text-base sm:text-lg mb-2"
    >
      {title}
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
      viewport={{ once: true }}
      className="text-gray-300 text-sm leading-relaxed"
    >
      {description}
    </motion.p>
  </motion.article>
);
