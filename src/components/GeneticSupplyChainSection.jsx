import React from 'react';
import { motion } from 'framer-motion';
import { FaFlask, FaSun } from 'react-icons/fa';

const techCards = [
  {
    icon: FaFlask,
    name: 'R&D & Variety Trials',
    desc: "A dedicated research team tests every new variety across Egypt's distinct climatic zones before any commercial release. Our products aren't just globally proven — they're locally validated for Egyptian soil and season.",
    img: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80',
  },
  {
    icon: FaSun,
    name: 'On-Ground Technical Support',
    desc: "Our agronomists don't disappear after the sale. They accompany farmers from seedling to harvest — monitoring, advising, and solving in real time. When you plant with Valley Seeds, you never farm alone.",
    img: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0a7b8a?w=800&q=80',
  },
];

const Technology = () => {
  return (
    <section id="technology" className="py-22 px-12 bg-[#ede8db]">
      <div className="max-w-280 mx-auto">
        <div className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.16em] uppercase text-[#4d862b] mb-3.5">
          <span className="block w-6 h-px bg-[#c9a84c]" />
          Technical Excellence
        </div>

        <h2 className="font-serif text-4xl font-normal leading-snug mb-8">
          Science Before<br />the Market
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5">
          {techCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white rounded-2xl border border-[rgba(140,198,63,0.18)] overflow-hidden shadow-[0_4px_24px_rgba(26,46,14,0.06)]"
              >
                <div className="h-[220px] overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                    src={card.img}
                    alt={card.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3.5">
                    <div className="w-10 h-10 rounded-[10px] bg-[#f0f7e0] flex items-center justify-center flex-shrink-0">
                      <Icon className="text-xl text-[#3d6b22]" />
                    </div>
                    <div className="text-[15px] font-semibold text-[#1a2e0e]">{card.name}</div>
                  </div>
                  <p className="text-[13px] text-[#6a8050] leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technology;
