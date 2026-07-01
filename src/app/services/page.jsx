"use client";

import { motion } from "framer-motion";
import ServicesSection from "@/components/ServicesSection";

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-[#2F6E49] to-[#8CCB8A] text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 leading-tight">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
            Professional solutions for urban greenery, ecological projects, and
            sustainable biotechnology
          </p>
        </div>
      </motion.section>

      <ServicesSection />
    </div>
  );
}
