"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
  FaSeedling,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Technology", href: "#technology" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Seed Distribution",
  "Field Trials",
  "Agronomist Support",
  "Odoo ERP Integration",
  "Supply Chain",
];

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaWhatsapp, href: "https://wa.me/201287636986", label: "WhatsApp" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#1a3d2a] to-[#0d2418] text-white z-50">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8CCB8A] to-transparent opacity-60" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8CCB8A]/5 rounded-full blur-3xl -translate-y-1/2" />

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-10 right-0.5 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-[#1a3d2a] to-[#0d2418] rounded-sm flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer z-10 border border-white"
      >
        <FaArrowUp className="w-4 h-4 text-white" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">

          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-40 h-10 flex items-center justify-center">
                <Image
                  src="/images/logo-white.svg"
                  alt="Valley Seeds Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Egypt&apos;s premier importer of elite vegetable seeds. Bridging global agricultural innovation with Egyptian farmers since 2021.
            </p>

            {/* Social links */}
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#8CCB8A]/20 hover:border-[#8CCB8A]/30 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-3.5 h-3.5 text-white/70" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="text-sm font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-[#8CCB8A]" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#8CCB8A] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#8CCB8A] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="text-sm font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-[#8CCB8A]" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm text-white/60 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#8CCB8A]/40" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h4 className="text-sm font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-[#8CCB8A]" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@valley-seeds.com"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8CCB8A]/15 transition-colors">
                    <FaEnvelope className="w-3.5 h-3.5 text-[#8CCB8A]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wider mb-0.5">Email</div>
                    <div className="text-sm text-white/70 group-hover:text-[#8CCB8A] transition-colors">info@valley-seeds.com</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+201287636986"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8CCB8A]/15 transition-colors">
                    <FaPhone className="w-3.5 h-3.5 text-[#8CCB8A]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wider mb-0.5">Phone</div>
                    <div className="text-sm text-white/70 group-hover:text-[#8CCB8A] transition-colors">+20 128 763 6986</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="w-3.5 h-3.5 text-[#8CCB8A]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wider mb-0.5">Location</div>
                    <div className="text-sm text-white/70">Cairo, Egypt</div>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <p className="text-xs text-white/40 text-center sm:text-left">
            © {currentYear} Valley Seeds. All rights reserved. Built with care for Egyptian agriculture.
          </p>
          {/* <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
          </div> */}
        </motion.div>
      </div>
    </footer>
  );
}