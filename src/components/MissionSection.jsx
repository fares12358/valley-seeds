"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLeaf, FaMicroscope, FaNetworkWired, FaArrowRight } from "react-icons/fa";

const pillars = [
  {
    Icon: FaLeaf,
    title: "Nature",
    subtitle: "Sustainable Agriculture",
    desc: "Harnessing natural ecosystems and regenerative practices to protect soil health while maximizing crop yields across Egypt's diverse landscapes.",
    color: "from-[#2F6E49] to-[#4A9E6A]",
    bgGlow: "bg-[#2F6E49]/10",
  },
  {
    Icon: FaMicroscope,
    title: "Science",
    subtitle: "Rigorous Field Trials",
    desc: "Every variety undergoes extensive testing across Egypt's climatic zones before commercial release — locally validated genetics for local success.",
    color: "from-[#3D8B5E] to-[#8CCB8A]",
    bgGlow: "bg-[#8CCB8A]/10",
  },
  {
    Icon: FaNetworkWired,
    title: "Technology",
    subtitle: "Digital Precision",
    desc: "Odoo ERP-powered operations delivering real-time transparency, seamless supply chain tracking, and data-driven decisions for every partner.",
    color: "from-[#2F6E49] to-[#6BBF8A]",
    bgGlow: "bg-[#2F6E49]/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="mission" className="py-24 lg:py-32 bg-linear-to-b from-white via-[#f8faf9] to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#8CCB8A]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2F6E49]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="text-center max-w-4xl mx-auto">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#2F6E49]/70 font-medium">
              <span className="w-6 h-px bg-[#8CCB8A]" />
              Vision & Mission
              <span className="w-6 h-px bg-[#8CCB8A]" />
            </span>
          </motion.div>
          
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-[0_4px_40px_rgba(47,110,73,0.08)] border border-[#8CCB8A]/20 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#2F6E49] via-[#8CCB8A] to-[#2F6E49]" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#8CCB8A]/10 rounded-full blur-2xl" />

              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#2F6E49]/10 text-[#2F6E49] rounded-full text-xs font-semibold tracking-wide mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2F6E49] animate-pulse" />
                Our Vision
              </div>

              <h2 className="text-[#2F6E49] mb-6 font-serif text-3xl sm:text-4xl">
                Where We&rsquo;re Going
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                To become the most trusted institution in Egypt&rsquo;s vegetable seed sector — the definitive gateway connecting global agricultural innovation with the Egyptian farmer, contributing to a sustainable agricultural renaissance and reinforcing national food security.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mb-20"
          >
            <div className="relative bg-gradient-to-br from-[#2F6E49] to-[#3D8B5E] rounded-3xl p-8 sm:p-12 shadow-[0_8px_40px_rgba(47,110,73,0.25)] overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8CCB8A]/10 rounded-full blur-2xl -translate-x-1/3 translate-y-1/3" />

              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 text-white rounded-full text-xs font-semibold tracking-wide mb-6 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8CCB8A] animate-pulse" />
                Our Mission
              </div>

              <h2 className="text-white mb-6 font-serif text-3xl sm:text-4xl">
                How We&rsquo;ll Get There
              </h2>

              <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                To empower Egyptian farmers with seeds of superior genetics, backed by rigorous scientific field trials and expert agronomist support. We forge long-term strategic partnerships with the world&rsquo;s leading seed companies, leveraging cutting-edge technology to guarantee accuracy, transparency, and maximum yield.
              </p>
            </div>
          </motion.div>

          {/* Three Pillars */}
         
          {/* Bottom decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 h-px bg-gradient-to-r from-transparent via-[#8CCB8A]/40 to-transparent max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}