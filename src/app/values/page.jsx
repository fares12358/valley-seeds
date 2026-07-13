"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ValueCard } from "@/components/ServicesSection";
import { useTranslation } from "@/context/LangContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

export default function ValuesPage() {
  const { t } = useTranslation();
  const s = t.services;
  const values = s?.values || [];
  const images = s?._images || [];

  return (
    <>
      <Header />

      {/* Full-page section — same dark green bg as ServicesSection */}
      <div className="min-h-screen bg-gradient-to-br from-[#012a14] via-[#037338] to-[#05964a] relative overflow-hidden">
        {/* Background blobs — same as ServicesSection */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#96C422]/5 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#96C422]/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-white/50 hover:text-[#96C422] text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to home
            </Link>
          </motion.div>

          {/* Page header — exact same style as ServicesSection header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14 lg:mb-16"
          >
            <div className="inline-flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase text-[#96C422] mb-5">
              <span className="block w-8 h-px bg-[#96C422]" />
              {s.eyebrow}
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white">
              {s.heading}<br />
              <span className="text-[#96C422]">{s.heading_accent}</span>
            </h1>
            <p className="mt-4 text-white/50 text-sm">
              {values.length} {values.length === 1 ? "value" : "values"}
            </p>
          </motion.div>

          {/* ALL cards — responsive grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`grid grid-cols-1 sm:grid-cols-2 gap-5 ${
              values.length >= 3 ? "lg:grid-cols-3" : ""
            } ${values.length >= 4 ? "lg:grid-cols-4" : ""}`}
          >
            {values.map((value, index) => (
              <ValueCard key={index} value={value} index={index} images={images} />
            ))}
          </motion.div>

          {/* Bottom decorative divider */}
          <div className="mt-20 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#96C422]/30" />
            <div className="w-2 h-2 rounded-full bg-[#96C422]/40" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#96C422]/30" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
