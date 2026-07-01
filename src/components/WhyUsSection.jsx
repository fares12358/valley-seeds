import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  {
    num: '01',
    title: 'Rigorous Field Trials',
    desc: 'All varieties are tested in our experimental fields before reaching the market — perfectly adapted to Egyptian conditions.',
  },
  {
    num: '02',
    title: 'Advanced Digital Management',
    desc: 'Odoo ERP ensures the highest transparency, precision, and financial accuracy for every partner relationship.',
  },
  {
    num: '03',
    title: 'Integrated Supply Chain',
    desc: 'Global sourcing via Valley Seeds + powerful domestic distribution via Apex Seeds — one seamless operation.',
  },
  {
    num: '04',
    title: 'Extensive Market Reach',
    desc: '560+ active clients guaranteeing strong presence and rapid penetration across all Egyptian governorates.',
  },
  {
    num: '05',
    title: 'Dedicated Technical Support',
    desc: 'Expert agronomists with you from seedling to harvest — ensuring maximum productivity on every crop.',
  },
];

const WhyUsSection = () => {
  return (
    <section id="why" className="py-22 px-12 bg-white">
      <div className="max-w-[1120px] mx-auto">
        <div className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.16em] uppercase text-[#4d862b] mb-3.5">
          <span className="block w-6 h-px bg-[#c9a84c]" />
          Why Us
        </div>

        <h2 className="font-serif text-4xl font-normal leading-snug mb-8">
          Five Reasons to<br />Choose Valley Seeds
        </h2>

        <div className="flex flex-col gap-2.5">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ borderColor: '#8cc63f', boxShadow: '0 4px 20px rgba(140,198,63,0.1)' }}
              className="grid grid-cols-1 md:grid-cols-[60px_1fr_280px] items-center gap-6 bg-white rounded-[14px] border border-[rgba(140,198,63,0.15)] px-6 py-4.5 transition-all duration-200"
            >
              <div className="font-serif text-[28px] text-[#d8edae]">{reason.num}</div>
              <div className="text-[15px] font-semibold text-[#1a2e0e]">{reason.title}</div>
              <div className="text-[13px] text-[#6a8050] leading-relaxed">{reason.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
