"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "Home", path: "/", sectionId: null },
  { label: "About", path: "/", sectionId: "about" },
  { label: "Services", path: "/", sectionId: "services" },
  { label: "Technology", path: "/", sectionId: "technology" },
  { label: "Contact", path: "/", sectionId: "contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        !isHome || isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo with SVG */}
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="relative w-40 h-10 flex items-center justify-center ">
                <Image
                  src={`${!isHome || isScrolled ? '/images/logo.svg':'/images/logo-white.svg'}`}
                  alt="Valley Seeds Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
             
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`relative transition-colors hover:text-[#2F6E49] font-medium cursor-pointer bg-transparent border-none text-sm ${
                    pathname === item.path && !item.sectionId
                      ? "text-[#2F6E49]"
                      : isScrolled || !isHome
                        ? "text-gray-700"
                        : "text-white"
                  }`}
                >
                  {item.label}
                  {/* Active indicator */}
                  {(pathname === item.path && !item.sectionId) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2F6E49] rounded-full"
                    />
                  )}
                </button>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button — Desktop */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => scrollToSection("contact")}
            className={`hidden lg:flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
              isScrolled || !isHome
                ? "bg-gradient-to-r from-[#2F6E49] to-[#3D8B5E] text-white hover:shadow-lg hover:shadow-[#2F6E49]/20"
                : "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
            }`}
          >
            Get in Touch
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled || !isHome
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 overflow-hidden shadow-lg"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col space-y-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`text-left transition-colors py-3 px-3 rounded-lg font-medium cursor-pointer bg-transparent border-none ${
                    pathname === item.path && !item.sectionId
                      ? "text-[#2F6E49] bg-[#2F6E49]/5"
                      : "text-gray-700 hover:text-[#2F6E49] hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                onClick={() => scrollToSection("contact")}
                className="mt-3 w-full py-3 rounded-lg bg-gradient-to-r from-[#2F6E49] to-[#3D8B5E] text-white font-semibold text-sm"
              >
                Get in Touch
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}