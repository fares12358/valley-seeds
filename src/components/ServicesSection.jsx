"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCpu, FiUsers, FiTrendingUp } from 'react-icons/fi';

const valuesData = [
  {
    icon: FiAward,
    name: 'Uncompromising Quality',
    desc: 'Every seed is a promise of a successful harvest. All varieties undergo rigorous field trials before they ever reach the farmer.',
    img: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=500&q=75',
    color: 'from-[#2F6E49] to-[#4A9E6A]',
  },
  {
    icon: FiCpu,
    name: 'Digital Innovation',
    desc: 'Odoo ERP integration — a core commitment to financial precision, operational clarity, and full transparency.',
    img: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&q=75',
    color: 'from-[#3D8B5E] to-[#6BBF8A]',
  },
  {
    icon: FiUsers,
    name: 'Technical Accountability',
    desc: 'We are partners in the field — accompanying every farmer from planting to harvest, long after the point of sale.',
    img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&q=75',
    color: 'from-[#2F6E49] to-[#8CCB8A]',
  },
  {
    icon: FiTrendingUp,
    name: 'Shared Growth',
    desc: 'Partnership Excellence over transactional thinking — a mindset that has built over $1.7M in lasting mutual trust.',
    img: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=500&q=75',
    color: 'from-[#6BBF8A] to-[#8CCB8A]',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Values = () => {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-gradient-to-br from-[#1a3d2a] via-[#2F6E49] to-[#3D8B5E] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#8CCB8A]/5 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8CCB8A]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase text-[#8CCB8A] mb-5">
            <span className="block w-8 h-px bg-[#8CCB8A]" />
            Core Values
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white">
            The Principles That<br />
            <span className="text-[#8CCB8A]">Guide Every Decision</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {valuesData.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#8CCB8A]/30 hover:bg-white/8 hover:shadow-[0_8px_40px_rgba(47,110,73,0.2)] transition-all duration-500"
              >
                {/* Top accent gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Image */}
                <div className="h-44 overflow-hidden relative">
                  <motion.img
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5 }}
                    src={value.img}
                    alt={value.name}
                    className="w-full h-full object-cover brightness-[0.6] saturate-90 group-hover:brightness-[0.75] group-hover:saturate-100 transition-all duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-b from-transparent via-[#1a3d2a]/60 to-[#1a3d2a]/90" />

                  {/* Floating icon badge */}
                  <motion.div
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute bottom-4 left-4 w-11 h-11 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-5 pt-6">
                  <h3 className="text-[15px] font-bold text-white mb-2 group-hover:text-[#8CCB8A] transition-colors duration-300">
                    {value.name}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {value.desc}
                  </p>
                </div>

                {/* Bottom hover indicator */}
                <div className="px-5 pb-5">
                  <div className="h-px bg-gradient-to-r from-[#8CCB8A]/0 via-[#8CCB8A]/30 to-[#8CCB8A]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 flex items-center justify-center gap-3"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#8CCB8A]/30" />
          <div className="w-2 h-2 rounded-full bg-[#8CCB8A]/40" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#8CCB8A]/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default Values;