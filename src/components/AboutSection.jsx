import React from 'react';
import { motion } from 'framer-motion';

const timelineItems = [
  {
    year: '2018',
    heading: 'Apex Seeds Founded',
    body: "Launched to elevate Egypt's agricultural sector through elite vegetable seed distribution and on- ground technical support.",
  },
  {
    year: '2021',
    heading: 'Valley Seeds Established',
    body: "Created as the group's importing arm — directly connecting the global seed market with Egyptian farmers.",
  },
  {
    year: '2025',
    heading: '560+ Clients, $700K+ Volume',
    body: 'Sustained annual growth driven by superior genetics, Odoo-powered transparency, and a partnership-first mindset.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-22 px-12 bg-[#f5f2eb]">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-18 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.16em] uppercase text-[#4d862b] mb-3.5">
              <span className="block w-6 h-px bg-[#c9a84c]" />
              Who we are
            </div>

            <h2 className="font-serif text-4xl font-normal leading-snug mb-8">
              Rooted in Egypt.<br />Connected to the World.
            </h2>

            <p className="text-[15px] text-[#3d5228] leading-relaxed mb-4">
              In 2021, Valley Seeds was established with a strategic vision for direct access to the finest international seed genetics, serving as the direct bridge between global innovation and Egyptian agriculture.            </p>




          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[460px] hidden lg:block"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 right-14 bottom-14 rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(26,46,14,0.18)]"
            >
              <img
                src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=900&q=82"
                alt="Agronomist inspecting seedlings"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-0 right-0 w-[52%] h-[52%] rounded-[14px] overflow-hidden border-[5px] border-[#f5f2eb] shadow-[0_12px_32px_rgba(26,46,14,0.2)]"
            >
              <img
                src="https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=500&q=80"
                alt="Hybrid seeds"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
