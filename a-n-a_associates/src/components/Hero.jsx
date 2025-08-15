"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { ValueCard } from "./Reuseables/ValueCard";
import { valueCards } from "@/constants/HeroValueCards";
import { CTAButton } from "./Reuseables/CTAButton/CTAButton";
import { HERO_ANIMATION_VARIANTS } from "./Animation/HeroAnimation";
import { BackgroundAnimation } from "./Animation/BackgroundAnimation";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        className="min-h-screen bg-[#152833] relative overflow-hidden"
        aria-label="Hero section"
      >
        <BackgroundAnimation />

        <motion.main className="relative z-10 flex items-center justify-center min-h-screen px-3 sm:px-4 lg:px-8">
          <motion.div
            variants={HERO_ANIMATION_VARIANTS.container}
            initial="hidden"
            animate="visible"
            className="text-center max-w-6xl mx-auto"
          >
            {/* Subheading */}
            <motion.p
              variants={HERO_ANIMATION_VARIANTS.subheading}
              className="text-[#b98e44] text-xs sm:text-sm md:text-base mb-4 sm:mb-6 tracking-wider uppercase font-medium"
            >
              Leading Legal Excellence in Nigeria
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              variants={HERO_ANIMATION_VARIANTS.heading}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-white px-2"
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block"
              >
                Strategic Legal Solutions
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block text-gray-300 mt-2"
              >
                for Your Success
              </motion.span>
            </motion.h1>

            {/* Mission Statement */}
            <motion.div
              variants={HERO_ANIMATION_VARIANTS.mission}
              className="mb-6 sm:mb-8 max-w-4xl mx-auto px-2"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-gray-300 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 leading-relaxed"
              >
                We provide{" "}
                <motion.strong
                  transition={{ duration: 0.2 }}
                  className="text-[#b98e44] font-semibold"
                >
                  strategic
                </motion.strong>
                ,{" "}
                <motion.strong
                  transition={{ duration: 0.2 }}
                  className="text-[#b98e44] font-semibold"
                >
                  innovative
                </motion.strong>
                , and{" "}
                <motion.strong
                  transition={{ duration: 0.2 }}
                  className="text-[#b98e44] font-semibold"
                >
                  cost-effective
                </motion.strong>{" "}
                legal solutions that help our clients succeed.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-gray-400 text-sm sm:text-base md:text-lg"
              >
                Recognized for excellence, integrity, and client satisfaction
                across Nigeria.
              </motion.p>
            </motion.div>

            {/* Key Values */}
            <motion.section
              variants={HERO_ANIMATION_VARIANTS.cardContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto px-2"
              aria-label="Our core values"
            >
              {valueCards.map((card, index) => (
                <ValueCard
                  key={index}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </motion.section>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-2"
            >
              <CTAButton
                href="/about"
                variant="secondary"
                ariaLabel="Learn more"
                delay={1.3}
              >
                <span className="hidden sm:inline">Learn More About Us</span>
                <span className="sm:hidden">About Us</span>
              </CTAButton>
            </motion.div>
          </motion.div>
        </motion.main>
      </section>
    </>
  );
};

export default Hero;
