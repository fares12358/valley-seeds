"use client";

import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import WarrantySection from "@/components/WarrantySection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import { motion } from "framer-motion";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import GeneticSupplyChainSection from "@/components/GeneticSupplyChainSection";
import BlockchainSection from "@/components/BlockchainSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyUsSection/>
      <MissionSection />
      <ServicesSection />
      <GeneticSupplyChainSection />
      <BlockchainSection />
      <ContactSection />
    </>
  );
}
