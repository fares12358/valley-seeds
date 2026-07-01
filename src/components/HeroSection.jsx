"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaArrowRight, FaPhone } from "react-icons/fa";

const stats = [
  { number: "560+", text: "Active clients across Egypt" },
  { number: "$700K+", text: "Annual distribution volume" },
  { number: "$1.7M+", text: "In trusted partner relationships" },
];

export default function HeroSection() {
  const router = useRouter();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero.jfif')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#2F6E49]/90 via-[#2F6E49]/70 to-[#8CCB8A]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-white max-w-4xl mx-auto">
            Powering Egypt's
            Agricultural Future
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/90 max-w-3xl mx-auto text-lg sm:text-xl"
          >
            Valley Seeds bridges world-class seed genetics with the Egyptian farmer — backed by rigorous field science, dedicated agronomists, and digital transparency since 2018.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => router.push("/contact")}
              className="group bg-white text-[#2F6E49] px-8 py-4 rounded-lg hover:bg-[#8CCB8A] hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Request a Quote
              <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => router.push("/contact")}
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#2F6E49] transition-all duration-300 flex items-center gap-2"
            >
              <FaPhone className="w-5 h-5" />
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Bar — Full Width, Split Number & Text, Improved UI */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 w-full bg-white/10 backdrop-blur-md border-t border-white/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.15, duration: 0.6 }}
                className="flex flex-col items-center justify-center py-8 sm:py-10 px-4 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-[#8CCB8A] rounded-full animate-pulse flex-shrink-0" />
                  <motion.span
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.15, type: "spring", stiffness: 200 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif tracking-tight"
                  >
                    {stat.number}
                  </motion.span>
                </div>
                <span className="text-white/80 text-sm sm:text-base text-center font-medium">
                  {stat.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute md:bottom-50 bottom-110 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}