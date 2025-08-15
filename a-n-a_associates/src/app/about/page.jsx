"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHead } from "@/components/SEO/PageHead";
import { ABOUT_ANIMATION_VARIANTS } from "@/components/Animation/AboutAnimation";
import { WhyChooseUsSection } from "@/components/Reuseables/WhyChooseUsSection";
import { MissionVisionSection } from "@/components/Reuseables/MissionVisionSection";

const About = () => {
  return (
    <>
      <PageHead />
      <motion.div
        className="bg-gray-50"
        initial="hidden"
        animate="visible"
        variants={ABOUT_ANIMATION_VARIANTS.container}
      >
        <Header />
        <main className="max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.header
            className="text-center mb-12 sm:mb-16"
            variants={ABOUT_ANIMATION_VARIANTS.fadeIn}
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
                Meet our Managing Partner
              </motion.p>
            </motion.h1>
          </motion.header>

          {/* Managing Partner Profile */}
          <motion.section
            className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 sm:mb-16"
            aria-labelledby="Managing-partner"
            variants={ABOUT_ANIMATION_VARIANTS.item}
            transition={{ duration: 0.2 }}
          >
            <div className="lg:flex">
              {/* Profile Image Section */}
              <div className="lg:w-1/3 bg-[#b98e44] p-6 sm:p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg rounded-full overflow-hidden"
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src="/profile.jpg"
                      alt="A.N.A & Associates Managing Partner - Adekunle Aribisala"
                      className="rounded-full object-cover object-top w-full h-full"
                      width={192}
                      height={192}
                      loading="eager"
                      decoding="async"
                      priority
                    />
                  </motion.div>
                  <h2
                    id="Managing-partner"
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2"
                  >
                    ADEKUNLE ARIBISALA
                  </h2>
                  <p className="text-sm sm:text-base text-gray-800 font-medium">
                    Managing Partner
                  </p>
                </div>
              </div>

              {/* Profile Content */}
              <div className="lg:w-2/3 p-6 sm:p-8 lg:p-12">
                <div className="mb-6">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-[#b98e44] mb-2">
                    Managing Partner | Legal Practitioner | Notary Public
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
          <MissionVisionSection />

          {/* Why Choose Us */}
          <WhyChooseUsSection />
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default About;
