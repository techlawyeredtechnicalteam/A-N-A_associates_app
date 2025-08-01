"use client";

import { motion } from "framer-motion";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";
import { FaBullseye } from "react-icons/fa";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import React from "react";
import Image from "next/image";

const About = () => {
  const whyChooseUs = [
    {
      title: "Experienced Legal Team",
      description:
        "Over a decade of active legal practice with proven expertise"
    },
    {
      title: "Client-Centered Approach",
      description: "Your needs and success are our top priority"
    },
    {
      title: "Prompt Response Time",
      description: "Quick and efficient service delivery when you need it most"
    },
    {
      title: "Proven Track Record",
      description: "Consistent success and recognition in the legal community"
    },
    {
      title: "Transparent Billing",
      description: "Clear, honest pricing with no hidden costs"
    }
  ];

  // JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "A.N.A & Associates",
    alternateName: "ANA Associates",
    description:
      "A modern and full-service law firm based in Lagos, Nigeria, committed to providing exceptional legal solutions with integrity and excellence.",
    url: "https://anaassociates.vercel.app/about",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "1st Floor, Scapular Plaza, Igbo Efon Bus-stop, Lekki Epe Expressway",
      addressLocality: "Lekki",
      addressRegion: "Lagos",
      addressCountry: "Nigeria",
      postalCode: "101245"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "6.4474",
      longitude: "3.5706"
    },
    openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-13:00"],
    founder: {
      "@type": "Person",
      name: "Adekunle Aribisala",
      jobTitle: "Principal Partner",
      description:
        "Seasoned legal practitioner with over a decade of experience in diverse areas of law",
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "University of Ibadan",
          description: "Bachelor of Laws (LL.B) - 2011"
        },
        {
          "@type": "EducationalOrganization",
          name: "University of Lagos",
          description: "Master of Laws (LL.M) - 2018"
        }
      ],
      memberOf: [
        {
          "@type": "Organization",
          name: "Nigerian Bar Association",
          abbreviation: "NBA"
        },
        {
          "@type": "Organization",
          name: "Business Recovery and Insolvency Practitioners Association of Nigeria",
          abbreviation: "BRIPAN"
        }
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Notary Public of Nigeria"
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Called to Nigerian Bar - 2012"
        }
      ]
    },
    serviceArea: {
      "@type": "Country",
      name: "Nigeria"
    },
    areaServed: ["Lagos, Nigeria", "Nigeria"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Legal Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Corporate and Commercial Law",
            description:
              "Strategic legal advice for businesses including company formation, governance, and regulatory compliance"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Civil Litigation",
            description:
              "Strategic litigation services across all levels of Nigerian courts"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Property and Real Estate Law",
            description:
              "Comprehensive real estate legal services covering property acquisition and title perfection"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Insolvency and Debt Recovery",
            description:
              "Comprehensive insolvency and debt recovery services with accredited practitioners"
          }
        }
      ]
    },
    serviceArea: {
      "@type": "Country",
      name: "Nigeria"
    },
    areaServed: "Lagos, Nigeria"
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Head>
        <title>
          A.N.A & Associates - Leading Law Firm in Lagos, Nigeria | Adekunle
          Aribisala
        </title>
        <meta
          name="title"
          content="About A.N.A & Associates - Leading Law Firm in Lagos, Nigeria | Adekunle Aribisala"
        />
        <meta
          name="description"
          content="Learn about A.N.A & Associates, a full-service law firm in Lagos, Nigeria. Led by Principal Partner Adekunle Aribisala with over a decade of legal expertise in corporate law, civil litigation, property law, and insolvency."
        />
        <meta
          name="keywords"
          content="A.N.A Associates, ANA Associates, Lagos law firm, Nigerian lawyers, Adekunle Aribisala, corporate law Nigeria, civil litigation Lagos, property law Nigeria, insolvency law, legal services Lagos, Nigerian Bar Association, BRIPAN, Notary Public Nigeria, University of Ibadan, University of Lagos, Lekki law firm, legal practitioners Nigeria"
        />
        <meta name="author" content="A.N.A & Associates" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://anaassociates.vercel.app/about" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        {/* Breadcrumb Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://ana-associates.com"
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About",
                  item: "https://ana-associates.com/about"
                }
              ]
            })
          }}
        />
      </Head>

      <motion.div
        className="bg-gray-50"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Header />
        <main className="max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.header
            className="text-center mb-12 sm:mb-16"
            variants={fadeInVariants}
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.p
                className="text-[#b98e44] text-xs sm:text-sm md:text-base mb-2 sm:mb-4 tracking-wider uppercase font-medium italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Meet our Principal Partner
              </motion.p>
            </motion.h1>
          </motion.header>

          {/* Principal Partner Profile */}
          <motion.section
            className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 sm:mb-16"
            aria-labelledby="principal-partner"
            variants={itemVariants}
            transition={{ duration: 0.2 }}
          >
            <div className="lg:flex">
              {/* Profile Image Section */}
              <div className="lg:w-1/3 bg-[#b98e44] p-6 sm:p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="w-48 h-48 sm:w-32 sm:h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg"
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-200 rounded-full flex items-center justify-center">
                      {/* Profile Image */}
                      <Image
                        src="/profile.jpg"
                        alt="A.N.A & Associates Principal Partner - Adekunle Aribisala"
                        className="h-48 w-48 sm:h-24 sm:w-24 rounded-full object-cover"
                        width="96"
                        height="96"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  </motion.div>
                  <h2
                    id="principal-partner"
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2"
                  >
                    ADEKUNLE ARIBISALA
                  </h2>
                  <p className="text-sm sm:text-base text-gray-800 font-medium">
                    Principal Partner
                  </p>
                </div>
              </div>

              {/* Profile Content */}
              <div className="lg:w-2/3 p-6 sm:p-8 lg:p-12">
                <div className="mb-6">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-[#b98e44] mb-2">
                    Principal Partner | Legal Practitioner | Notary Public
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                    Adekunle Aribisala is a seasoned legal practitioner with
                    over a decade of experience in diverse areas of law. He
                    obtained his Bachelor of Laws (LL.B) degree from the
                    University of Ibadan in 2011 and was subsequently called to
                    the Nigerian Bar in 2012.
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                    Driven by a passion for continuous learning and professional
                    excellence, he earned his Master of Laws (LL.M) degree from
                    the University of Lagos in 2018.
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                    With over a decade of active legal practice, Adekunle has
                    distinguished himself as an experienced litigator with
                    in-depth knowledge across several areas of law, including
                    Corporate and Commercial Law Practice, General Civil Law,
                    Property and Real Estate Law, and Insolvency.
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    He is known for his analytical skills, strategic approach to
                    dispute resolution, and his dedication to delivering
                    excellent legal services. Adekunle is a member of the
                    Nigerian Bar Association (NBA) and the Business Recovery and
                    Insolvency Practitioners Association of Nigeria (BRIPAN). He
                    is also a verified Notary Public of Nigeria, authorized to
                    perform a wide range of notarial acts.
                  </p>
                </div>

                {/* Credentials */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <motion.div
                    className="bg-gray-50 p-3 sm:p-4 rounded-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                      Education
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      LL.B, University of Ibadan (2011)
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      B.L, Nigerian Law School (2012)
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      LL.M, University of Lagos (2018)
                    </p>
                  </motion.div>
                  <motion.div
                    className="bg-gray-50 p-3 sm:p-4 rounded-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                      Memberships
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Nigerian Bar Association (NBA)
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      International Bar Association (IBA)
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Business Recovery and Insolvency Practitioners Association
                      of Nigeria (BRIPAN)
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Mission & Vision */}
          <motion.section
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16"
            aria-labelledby="mission-vision"
            variants={containerVariants}
          >
            <motion.div
              className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg border border-gray-100"
              variants={itemVariants}
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
                  <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                To provide strategic, innovative, and cost-effective legal
                solutions that help our clients succeed in Nigeria's evolving
                business landscape.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg border border-gray-100"
              variants={itemVariants}
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
                  <FaBullseye className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  Our Vision
                </h2>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                To be a leading law firm in Nigeria, recognized for excellence,
                integrity, and client satisfaction across all legal practice
                areas.
              </p>
            </motion.div>
          </motion.section>

          {/* Why Choose Us */}
          <motion.section
            className="bg-[#b98e44] rounded-2xl p-6 sm:p-8 lg:p-12 xl:p-16 text-center shadow-xl"
            aria-labelledby="why-choose-us"
            variants={itemVariants}
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
              Why Choose A.N.A & Associates?
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-800 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We combine local knowledge with global best practices, offering
              comprehensive legal support in navigating Nigeria's complex legal
              landscape with integrity and professionalism.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              variants={containerVariants}
            >
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/30"
                  variants={itemVariants}
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
                  <p className="text-xs sm:text-sm text-gray-700">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default About;
