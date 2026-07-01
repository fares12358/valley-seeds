"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLink,
  FaCheckCircle,
  FaWhatsapp,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "info@valley-seeds.com",
    link: "mailto:info@valley-seeds.com",
    color: "from-[#2F6E49] to-[#4A9E6A]",
    bgHover: "hover:bg-[#2F6E49]/5",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+02 012 876 369 86",
    link: "tel:+0201287636986",
    color: "from-[#3D8B5E] to-[#6BBF8A]",
    bgHover: "hover:bg-[#3D8B5E]/5",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+20 128 763 6986",
    link: "https://wa.me/201287636986",
    color: "from-[#25D366] to-[#128C7E]",
    bgHover: "hover:bg-[#25D366]/5",
  },
  {
    icon: FaLink,
    label: "Website",
    value: "www.valley-seeds.com",
    link: "https://www.valley-seeds.com",
    color: "from-[#6BBF8A] to-[#8CCB8A]",
    bgHover: "hover:bg-[#6BBF8A]/5",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const inputClasses = (fieldName) =>
    `w-full px-5 py-4 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
      focusedField === fieldName
        ? "border-[#2F6E49] bg-white shadow-[0_0_0_4px_rgba(47,110,73,0.08)]"
        : "border-gray-200 hover:border-gray-300"
    }`;

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8CCB8A]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2F6E49]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#2F6E49]/70 font-medium mb-6">
            <span className="w-8 h-px bg-[#8CCB8A]" />
            Get In Touch
            <span className="w-8 h-px bg-[#8CCB8A]" />
          </span>

          <h2 className="text-[#2F6E49] mb-6 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Ready to Grow<br className="hidden sm:block" /> With Us?
          </h2>

          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re a farmer, distributor, or global seed company — let&apos;s build something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Form — takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_4px_40px_rgba(47,110,73,0.06)] border border-gray-100 relative overflow-hidden">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2F6E49] via-[#8CCB8A] to-[#2F6E49]" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 bg-gradient-to-br from-[#2F6E49] to-[#8CCB8A] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <FaCheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-[#2F6E49] mb-3 text-2xl font-serif">Message Sent!</h3>
                  <p className="text-gray-500 max-w-md mx-auto mb-8">
                    Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 text-sm text-[#2F6E49] font-medium hover:gap-3 transition-all"
                  >
                    Send another message <FaArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2F6E49] to-[#8CCB8A] flex items-center justify-center">
                      <FaPaperPlane className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#2F6E49]">Send a Message</h3>
                      <p className="text-xs text-gray-400">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                      {error}
                    </motion.div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses("name")}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses("email")}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses("phone")}
                        placeholder="+20 1XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-600 mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("subject")}
                        onBlur={() => setFocusedField(null)}
                        className={`${inputClasses("subject")} appearance-none cursor-pointer`}
                      >
                        <option value="">Select a topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="partnership">Partnership</option>
                        <option value="distribution">Distribution</option>
                        <option value="support">Technical Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2">
                      Your Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      rows={5}
                      className={`${inputClasses("message")} resize-none`}
                      placeholder="Tell us about your project, needs, or questions..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#2F6E49] to-[#3D8B5E] text-white px-8 py-4 rounded-xl hover:shadow-[0_8px_30px_rgba(47,110,73,0.25)] transition-all duration-300 flex items-center justify-center gap-3 group text-sm font-semibold tracking-wide"
                  >
                    <span>Send Message</span>
                    <FaPaperPlane className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info — takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : undefined}
                  rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-5 p-5 bg-white rounded-2xl shadow-[0_2px_16px_rgba(47,110,73,0.04)] border border-gray-100 hover:border-[#8CCB8A]/30 hover:shadow-[0_8px_30px_rgba(47,110,73,0.08)] transition-all duration-300 group ${info.bgHover}`}
                >
                  <div
                    className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs tracking-wider uppercase text-gray-400 font-medium mb-0.5">
                      {info.label}
                    </div>
                    <div className="text-gray-700 font-medium text-sm truncate group-hover:text-[#2F6E49] transition-colors">
                      {info.value}
                    </div>
                  </div>
                  <FaArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#2F6E49] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                </motion.a>
              ))}
            </motion.div>

            {/* Business Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="bg-gradient-to-br from-[#2F6E49] to-[#3D8B5E] rounded-2xl p-6 text-white shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <FaClock className="w-5 h-5 text-[#8CCB8A]" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Business Hours</h4>
                  <p className="text-white/60 text-xs">We&apos;re here to help</p>
                </div>
              </div>
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Sunday — Thursday</span>
                  <span className="font-medium">9:00 AM — 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Friday — Saturday</span>
                  <span className="font-medium text-[#8CCB8A]">Closed</span>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-[0_2px_16px_rgba(47,110,73,0.04)] border border-gray-100 overflow-hidden"
            >
              <div className="relative h-56 bg-gradient-to-br from-[#2F6E49]/10 to-[#8CCB8A]/10">
                {/* Decorative map pattern */}
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2F6E49" strokeWidth="0.5" opacity="0.3" />
                    </pattern>
                    <rect width="400" height="200" fill="url(#grid)" />
                    <circle cx="200" cy="100" r="60" fill="#2F6E49" opacity="0.08" />
                    <circle cx="200" cy="100" r="40" fill="#2F6E49" opacity="0.05" />
                  </svg>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-[#2F6E49] to-[#8CCB8A] rounded-full flex items-center justify-center shadow-lg">
                      <FaMapMarkerAlt className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#2F6E49] rotate-45 -z-10" />
                  </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="w-4 h-4 text-[#2F6E49] flex-shrink-0" />
                    <p className="text-gray-700 text-sm font-medium">Cairo, Egypt</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}