"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFlask, FaSun } from "react-icons/fa";
import { useTranslation } from "@/context/LangContext";

const ICONS = [FaFlask, FaSun];
const IMAGES = [
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1592982537447-6f2a6a0a7b8a?w=800&q=80",
];

const Technology = () => {
  const { t } = useTranslation();
  const tech = t.technology;

  return (
    <section id="technology" className="py-22 px-12 bg-[#ede8db]">
      <div className="max-w-280 mx-auto">
        <div className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.16em] uppercase text-[#037338] mb-3.5">
          <span className="block w-6 h-px bg-[#c9a84c]" />
          {tech.eyebrow}
        </div>

        <h2 className="font-serif text-4xl font-normal leading-snug mb-8">
          {tech.heading_line1}<br />{tech.heading_line2}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5">
          {tech.cards.map((card, index) => {
            const Icon = ICONS[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white rounded-2xl border border-[rgba(150,196,34,0.18)] overflow-hidden shadow-[0_4px_24px_rgba(3,115,56,0.06)]"
              >
                <div className="h-[220px] overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                    src={IMAGES[index]}
                    alt={card.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3.5">
                    <div className="w-10 h-10 rounded-[10px] bg-[#f0f8dc] flex items-center justify-center flex-shrink-0">
                      <Icon className="text-xl text-[#037338]" />
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
