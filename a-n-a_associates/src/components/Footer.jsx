"use client";

import React from "react";
import Link from "next/link";
import { BsArrowUp } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 bg-[#152833] text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-4 group">
                {/* Logo Image with enhanced styling */}
                <div className="flex-shrink-0 relative">
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-1.5 sm:p-2 border border-white/20 shadow-2xl">
                    <Image
                      src="/logo-crop.jpg"
                      alt="A.N.A & Associates Logo - Lady Justice representing legal excellence and integrity"
                      className="w-auto object-cover mx-auto"
                      width={120}
                      height={64}
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </div>

                {/* Company Name and Details with enhanced typography */}
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white leading-tight tracking-wide drop-shadow-lg">
                    A.N.A & ASSOCIATES
                  </span>
                  <span className="text-xs font-semibold text-[#b98e44] uppercase tracking-widest drop-shadow-md">
                    LEGAL PRACTITIONERS &<br /> NOTARIES PUBLIC
                  </span>
                  <span className="text-xs font-medium text-[#898E88] drop-shadow-md">
                    Real Estate & Property Management
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Details</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-[#b98e44] font-medium mb-2">Address</h4>
                <div className="text-gray-300 text-sm space-y-1">
                  <p>1st Floor, Scapular Plaza,</p>
                  <p>Igbo Efon Bus-stop</p>
                  <p>Lekki Epe Expressway,</p>
                  <p>Lekki, Lagos.</p>
                </div>
              </div>

              <div>
                <h4 className="text-[#b98e44] font-medium mb-2">
                  Phone Numbers
                </h4>
                <div className="text-gray-300 text-sm space-y-1">
                  <p>
                    <a
                      href="tel:+2348037778498"
                      className="hover:text-[#b98e44] transition-colors"
                    >
                      08037778498
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+2348050590365"
                      className="hover:text-[#b98e44] transition-colors"
                    >
                      08050590365
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Hours & Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Office Hours</h3>
            <div className="space-y-4 text-gray-300 text-sm">
              <div>
                <p className="font-medium text-white">Monday to Friday</p>
                <p>9:00 am to 6:00 pm</p>
              </div>
              <div>
                <p className="font-medium text-white">Saturday</p>
                <p>9:00 am to 1:00 pm</p>
              </div>
              <div>
                <p className="font-medium text-white">Sunday</p>
                <p>Closed</p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-[#b98e44] font-medium mb-3">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="/services"
                  className="block text-gray-300 hover:text-[#b98e44] transition-colors text-sm"
                >
                  Legal Services
                </a>
                <a
                  href="/about"
                  className="block text-gray-300 hover:text-[#b98e44] transition-colors text-sm"
                >
                  About Us
                </a>
                <a
                  href="/contact"
                  className="block text-gray-300 hover:text-[#b98e44] transition-colors text-sm"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 A.N.A & Associates. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="absolute bottom-8 right-8">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg flex items-center justify-center transition-colors shadow-lg"
        >
          <BsArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
