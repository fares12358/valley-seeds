import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCpu, FiUsers, FiTrendingUp } from 'react-icons/fi';

const valuesData = [
  {
    icon: FiAward,
    name: 'Uncompromising Quality',
    desc: 'Every seed is a promise of a successful harvest. All varieties undergo rigorous field trials before they ever reach the farmer.',
    img: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=500&q=75',
  },
  {
    icon: FiCpu,
    name: 'Digital Innovation',
    desc: 'Odoo ERP integration — a core commitment to financial precision, operational clarity, and full transparency.',
    img: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&q=75',
  },
  {
    icon: FiUsers,
    name: 'Technical Accountability',
    desc: 'We are partners in the field — accompanying every farmer from planting to harvest, long after the point of sale.',
    img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&q=75',
  },
  {
    icon: FiTrendingUp,
    name: 'Shared Growth',
    desc: 'Partnership Excellence over transactional thinking — a mindset that has built over $1.7M in lasting mutual trust.',
    img: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=500&q=75',
  },
];

const Values = () => {
  return (
    <section id="services" className="py-22 px-12 bg-gradient-to-br from-[#0d1a07] via-[#1a2e0e] to-[#243d14]">
      <div className="max-w-[1120px] mx-auto">
        <div className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.16em] uppercase text-[#8cc63f] mb-3.5">
          <span className="block w-6 h-px bg-[#c9a84c]" />
          Core Values
        </div>

        <h2 className="font-serif text-4xl font-normal leading-snug mb-8 text-white">
          The Principles That<br />Guide Every Decision
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {valuesData.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, borderColor: '#8cc63f' }}
                className="border border-[rgba(140,198,63,0.15)] rounded-2xl overflow-hidden transition-all duration-250 bg-[rgba(255,255,255,0.03)]"
              >
                <div className="h-[150px] overflow-hidden relative">
                  <motion.img
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                    src={value.img}
                    alt={value.name}
                    className="w-full h-full object-cover brightness-[0.65] saturate-90 hover:brightness-[0.8] hover:saturate-100 transition-all duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-[rgba(26,46,14,0.7)]" />
                </div>
                <div className="p-5 px-4.5">
                  <Icon className="text-xl text-[#8cc63f] mb-2.5" />
                  <div className="text-[13px] font-semibold text-white mb-2">{value.name}</div>
                  <div className="text-xs text-[rgba(150,168,130,0.85)] leading-relaxed">{value.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
