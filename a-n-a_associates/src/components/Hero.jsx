"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  cardVariants,
  containerVariants,
  headingVariants,
  subheadingVariants,
  missionVariants,
  cardsContainerVariants
} from "./AnimationVariants";

const COMPANY_NAME = "A.N.A & Associates";

// Components
const ValueCard = ({ title, description, index }) => (
  <motion.article
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/10 hover:border-[#b98e44]/30 transition-colors duration-300"
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

const CTAButton = ({ href, variant, ariaLabel, children }) => {
  const baseClasses =
    "px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105";
  const variantClasses = {
    primary: "bg-[#b98e44] text-black hover:bg-yellow-500 shadow-lg",
    secondary:
      "bg-transparent border-2 border-[#b98e44] text-[#b98e44] hover:bg-[#b98e44] hover:text-black"
  };

  return (
    <Link href={href} aria-label={ariaLabel}>
      <button className={`${baseClasses} ${variantClasses[variant]}`}>
        {children}
      </button>
    </Link>
  );
};

const BackgroundAnimation = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-3 sm:opacity-5">
        <motion.div
          className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold whitespace-nowrap flex items-center h-full"
          animate={{
            x: [0, -2000]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <span className="inline-block text-[#b98e44] pr-8">
            {Array(10).fill(`${COMPANY_NAME} • `).join("")}
          </span>
        </motion.div>
      </div>

      {/* Second layer for continuous effect */}
      <div className="absolute inset-0 opacity-2 sm:opacity-3">
        <motion.div
          className="text-[6rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] font-bold whitespace-nowrap flex items-center h-full"
          animate={{
            x: [-2000, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ marginTop: "10%" }}
        >
          <span className="inline-block text-white/10 pr-8">
            {Array(10).fill(`LEGAL EXCELLENCE • `).join("")}
          </span>
        </motion.div>
      </div>
    </div>
  );
};

// Main Component
const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Data for value cards
  const valueCards = [
    {
      title: "Excellence",
      description: "Delivering superior legal services with unmatched expertise"
    },
    {
      title: "Integrity",
      description: "Building trust through ethical practice and transparency"
    },
    {
      title: "Innovation",
      description: "Pioneering modern approaches to legal challenges"
    }
  ];

  return (
    <>
      <section
        className="min-h-screen bg-[#152833] relative overflow-hidden"
        aria-label="Hero section"
      >
        <BackgroundAnimation />

        <motion.main
          // style={{ y }}
          className="relative z-10 flex items-center justify-center min-h-screen px-3 sm:px-4 lg:px-8"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-6xl mx-auto"
          >
            {/* Subheading */}
            <motion.p
              variants={subheadingVariants}
              className="text-[#b98e44] text-xs sm:text-sm md:text-base mb-4 sm:mb-6 tracking-wider uppercase font-medium"
            >
              Leading Legal Excellence in Nigeria
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              variants={headingVariants}
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
              variants={missionVariants}
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
              variants={cardsContainerVariants}
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
                ariaLabel={`Learn more about ${COMPANY_NAME}`}
                delay={1.3}
              >
                <span className="hidden sm:inline">Learn More About Us</span>
                <span className="sm:hidden">About Us</span>
              </CTAButton>
            </motion.div>
          </motion.div>
        </motion.main>

        {/* CSS for continuous scrolling animation */}
        {/* <style jsx>{`
          @keyframes scroll-infinite {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll-infinite {
            animation: scroll-infinite 15s linear infinite;
          }

          @media (max-width: 768px) {
            .animate-scroll-infinite {
              animation: scroll-infinite 20s linear infinite;
            }
          }
        `}</style> */}
      </section>
    </>
  );
};

export default Hero;
