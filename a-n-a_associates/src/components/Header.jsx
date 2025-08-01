"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
import React, { useState, useEffect } from "react";
import {
  headerVariants,
  textVariants,
  navItemVariants,
  navVariants
} from "./AnimationVariants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Enhanced navigation with SEO-friendly structure
  const navItems = [
    {
      name: "Home",
      href: "/",
      description:
        "A.N.A & Associates homepage - Leading law firm in Lagos, Nigeria"
    },
    {
      name: "About",
      href: "/about",
      description: "Learn about our legal team and expertise"
    },
    {
      name: "Legal Services",
      href: "/services",
      description:
        "Comprehensive legal services - Corporate law, Civil litigation, Property law"
    },
    {
      name: "Contact",
      href: "/contact",
      description: "Get in touch with our legal experts"
    }
  ];

  // Check if current page is active
  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="initials"
        animate="animate"
        className="bg-[#152833] shadow-xl sticky top-0 z-50 overflow-hidden"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
            {/* Logo Section with enhanced SEO */}
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 relative z-10">
              <Link
                href="/"
                className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 group"
                aria-label="A.N.A & Associates - Home"
              >
                {/* Logo Image with enhanced styling and SEO */}
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

                {/* Company Name and Details with enhanced typography and SEO */}
                <motion.div
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  className="flex-col hidden lg:flex"
                >
                  <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white leading-tight tracking-wide drop-shadow-lg">
                    A.N.A & ASSOCIATES
                  </h1>
                  <motion.span
                    className="text-[10px] sm:text-xs lg:text-sm font-semibold text-[#b98e44] uppercase tracking-wider sm:tracking-widest drop-shadow-md leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <span className="hidden sm:inline">
                      LEGAL PRACTITIONERS & NOTARIES PUBLIC
                    </span>
                    <span className="sm:hidden">LEGAL PRACTITIONERS</span>
                  </motion.span>
                  <motion.span
                    className="text-[10px] sm:text-xs lg:text-sm font-medium text-[#898E88] drop-shadow-md leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  >
                    <span className="hidden md:inline">
                      Real Estate & Property Management
                    </span>
                    <span className="md:hidden">Real Estate Law</span>
                  </motion.span>
                </motion.div>
              </Link>
            </div>

            {/* Desktop Navigation with enhanced SEO */}
            <motion.nav
              variants={navVariants}
              initial="initial"
              animate="animate"
              className="hidden md:flex space-x-8 relative z-10"
              role="navigation"
              aria-label="Main navigation"
            >
              {navItems.map((navItem) => (
                <motion.div
                  key={navItem.name}
                  variants={navItemVariants}
                  whileHover="hover"
                >
                  <Link
                    href={navItem.href}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
                      isActiveLink(navItem.href)
                        ? "text-[#b98e44] bg-white/10 rounded-lg"
                        : "text-white/90 hover:text-[#b98e44]"
                    }`}
                    aria-current={
                      isActiveLink(navItem.href) ? "page" : undefined
                    }
                  >
                    <span className="relative z-10">{navItem.name}</span>
                    {!isActiveLink(navItem.href) && (
                      <div
                        className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
                        aria-hidden="true"
                      ></div>
                    )}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Mobile Menu Button with enhanced accessibility */}
            <button
              className="md:hidden p-2 text-white/90 hover:text-[#b98e44] relative z-10 rounded-lg hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-[#152833]"
              onClick={handleMenuToggle}
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <MdOutlineClose size={24} aria-hidden="true" />
              ) : (
                <CiMenuFries size={24} aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Navigation with enhanced SEO and accessibility */}
          <motion.nav
            variants={navVariants}
            initial="initial"
            animate="animate"
          >
            {isMenuOpen && (
              <motion.div
                variants={navItemVariants}
                initial="initial"
                animate="animate"
                className="md:hidden relative z-10"
                id="mobile-menu"
                role="navigation"
                aria-label="Mobile navigation"
              >
                <nav className="px-2 pt-2 pb-3 space-y-1 bg-[#152833]/95 backdrop-blur-md border-t border-white/10 rounded-b-lg">
                  {navItems.map((navItem) => (
                    <Link
                      key={navItem.name}
                      href={navItem.href}
                      className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                        isActiveLink(navItem.href)
                          ? "text-[#b98e44] bg-white/10"
                          : "text-white/90 hover:text-[#b98e44] hover:bg-white/5"
                      }`}
                      aria-current={
                        isActiveLink(navItem.href) ? "page" : undefined
                      }
                      title={navItem.description}
                    >
                      {navItem.name}
                    </Link>
                  ))}
                </nav>
              </motion.div>
            )}
          </motion.nav>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
