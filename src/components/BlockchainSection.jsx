"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiPackage, FiGlobe, FiShield, FiMapPin, FiCheckCircle } from 'react-icons/fi';

const erpPoints = [
  {
    title: 'Unified Operations',
    text: 'Sales, inventory, and finance fully integrated — eliminating errors and enabling confident, real-time decisions.',
  },
  {
    title: 'Partner Transparency',
    text: 'Accurate data and live tracking give every domestic and international partner a clear, verifiable view of the operation.',
  },
  {
    title: 'Seamless Supply Chain',
    text: 'From global import to last-mile distribution, every movement is tracked and managed with precision.',
  },
];

const dashboardItems = [
  { icon: FiUsers, label: 'Active Clients', val: '560+' },
  { icon: FiPackage, label: 'Distribution Volume', val: '$700,000+' },
  { icon: FiGlobe, label: 'Global Partners', val: 'Active' },
  { icon: FiShield, label: 'Trust Built', val: '$1.7M+' },
  { icon: FiMapPin, label: 'Coverage', val: 'All Egypt' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ERP = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-[#1a3d2a] via-[#2F6E49] to-[#3D8B5E] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8CCB8A]/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8CCB8A]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase text-[#8CCB8A] mb-6">
              <span className="block w-8 h-px bg-[#8CCB8A]" />
              Digital Infrastructure
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-tight mb-6 text-white">
              Precision Through<br />
              <span className="text-[#8CCB8A]">Technology</span>
            </h2>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
              We don&apos;t just sell seeds — we run a precision agricultural business. Our entire operation is powered by Odoo ERP, giving every partner full visibility into the supply chain.
            </p>

            {/* ERP Points */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {erpPoints.map((pt, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="flex gap-4 items-start group cursor-default"
                >
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-6 h-6 rounded-lg bg-[#8CCB8A]/15 flex items-center justify-center group-hover:bg-[#8CCB8A]/25 transition-colors duration-300">
                      <FiCheckCircle className="w-3.5 h-3.5 text-[#8CCB8A]" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1 group-hover:text-[#8CCB8A] transition-colors duration-300">
                      {pt.title}
                    </div>
                    <div className="text-sm text-white/60 leading-relaxed">
                      {pt.text}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/15 shadow-[0_8px_40px_rgba(0,0,0,0.2)] overflow-hidden">
              {/* Card Header */}
              <div className="px-6 py-5 border-b border-white/10 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#8CCB8A] animate-pulse" />
                <span className="text-xs tracking-[0.15em] uppercase text-[#8CCB8A] font-medium">
                  Live Dashboard — Odoo ERP
                </span>
              </div>

              {/* Dashboard Items */}
              <div className="p-2">
                {dashboardItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.08, duration: 0.4 }}
                      whileHover={{ backgroundColor: 'rgba(140, 203, 138, 0.08)' }}
                      className="flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-200 group"
                    >
                      <span className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#8CCB8A]/10 flex items-center justify-center group-hover:bg-[#8CCB8A]/20 transition-colors duration-200">
                          <Icon className="w-5 h-5 text-[#8CCB8A]" />
                        </div>
                        <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-200">
                          {item.label}
                        </span>
                      </span>
                      <span className="text-base font-bold text-white font-serif tracking-tight">
                        {item.val}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 border-t border-white/10 bg-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-white/40 tracking-wider uppercase">Last updated</span>
                  <span className="text-[10px] text-[#8CCB8A] tracking-wider">Just now</span>
                </div>
              </div>
            </div>

            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-6 flex items-center justify-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-[#8CCB8A] animate-pulse" />
              <span className="text-xs text-white/50 tracking-wide">
                Real-time data synchronization active
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ERP;