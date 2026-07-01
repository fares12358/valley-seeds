import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiPackage, FiGlobe, FiShield, FiMapPin } from 'react-icons/fi';

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

const ERP = () => {
  return (
    <section className="py-22 px-12 bg-linear-to-br from-[#243d14] to-[#1a2e0e]">
      <div className="max-w-280 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.16em] uppercase text-[#8cc63f] mb-3.5">
            <span className="block w-6 h-px bg-[#c9a84c]" />
            Digital Infrastructure
          </div>

          <h2 className="font-serif text-4xl font-normal leading-snug mb-5 text-white">
            Precision Through<br />Technology
          </h2>

          <p className="text-sm text-[#96a882] leading-relaxed mb-7">
            We don't just sell seeds — we run a precision agricultural business. Our entire operation is powered by Odoo ERP, giving every partner full visibility into the supply chain.
          </p>

          <div className="flex flex-col gap-4.5">
            {erpPoints.map((pt, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex gap-3.5 items-start"
              >
                <div className="mt-1.5 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#8cc63f]" />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-white mb-0.5">{pt.title}</div>
                  <div className="text-xs text-[#96a882] leading-relaxed">{pt.text}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[rgba(13,26,7,0.7)] rounded-2xl border border-[rgba(140,198,63,0.2)] p-6 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 text-[9px] tracking-[0.14em] uppercase text-[#96a882] mb-4 pb-3 border-b border-[rgba(140,198,63,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8cc63f] inline-block" />
            Live Dashboard — Odoo ERP
          </div>

          {dashboardItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="flex items-center justify-between py-3 border-b border-[rgba(140,198,63,0.08)] last:border-b-0"
              >
                <span className="flex items-center gap-2 text-xs text-[#96a882]">
                  <Icon className="text-sm text-[#6aa635]" />
                  {item.label}
                </span>
                <span className="text-sm font-semibold text-[#8cc63f] font-serif">{item.val}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ERP;
