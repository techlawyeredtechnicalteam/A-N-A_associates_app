"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaHandshake } from "react-icons/fa";
import { MdOutlineGavel } from "react-icons/md";
import {
  RiScales3Line,
  RiBuildingLine,
  RiHomeLine,
  RiParentLine,
  RiTeamLine,
  RiFileList3Line
} from "react-icons/ri";

const Services = () => {
  const services = [
    {
      title: "Insolvency and Debt Recovery",
      description:
        "Comprehensive insolvency and debt recovery services with accredited practitioners. We help creditors, debtors, and financial institutions navigate financial distress, liquidation, and debt enforcement processes.",
      icon: <RiScales3Line className="w-8 h-8 text-black" />
    },
    {
      title: "Corporate and Commercial Practice",
      description:
        "Strategic legal advice for businesses at every stage. From company formation to governance, regulatory compliance, and commercial transactions tailored to your business objectives.",
      icon: <RiBuildingLine className="w-8 h-8 text-black" />
    },
    {
      title: "Arbitration and Alternative Dispute Resolution",
      description:
        "Efficient, cost-effective dispute resolution services. We represent clients in domestic and international arbitration, mediation, and conciliation processes.",
      icon: <FaHandshake className="w-8 h-8 text-black" />
    },
    {
      title: "Civil Litigation",
      description:
        "Strategic litigation services across all levels of Nigerian courts. We provide skilled advocacy and diligent representation with a focus on achieving favorable outcomes efficiently.",
      icon: <MdOutlineGavel className="w-8 h-8 text-black" />
    },
    {
      title: "Property Management and Real Estate Law",
      description:
        "Comprehensive real estate legal services covering property acquisition, title perfection, development advisory, and property management including tenant relations.",
      icon: <RiHomeLine className="w-8 h-8 text-black" />
    },
    {
      title: "Probate and Administration of Estate Law",
      description:
        "Expert legal support in estate administration and probate processes. We guide families through asset distribution, will execution, and estate planning with compassion and efficiency.",
      icon: <RiFileList3Line className="w-8 h-8 text-black" />
    },
    {
      title: "Family Law",
      description:
        "Sensitive and practical family law services protecting individual and family rights. We handle family-related matters with confidentiality and compassion while ensuring fair resolutions.",
      icon: <RiParentLine className="w-8 h-8 text-black" />
    },
    {
      title: "Employment and Labour Law",
      description:
        "Comprehensive employment law services for employers and employees. We help create compliant workplace structures, manage relationships, and resolve employment disputes effectively.",
      icon: <RiTeamLine className="w-8 h-8 text-black" />
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1
      }
    }
  };

  const ctaVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.8
      }
    }
  };

  return (
    <motion.div
      className="bg-gray-50 text-gray-900 relative overflow-hidden py-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={headerVariants}>
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
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 100, damping: 10 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="w-16 h-16 bg-[#b98e44]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#b98e44]/20 transition-colors duration-300"
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
        <motion.div className="text-center mt-16" variants={ctaVariants}>
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
