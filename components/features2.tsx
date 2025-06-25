"use client";

import React from "react";
import { motion } from "motion/react";
import {
  PawPrintIcon as Paw,
  Heart,
  Gift,
  Sparkles,
  Car,
  Stethoscope,
  GraduationCap,
} from "lucide-react";

export function Features2() {
  const features = [
    {
      icon: Heart,
      title: "Pup Care",
      description:
        "Playtime, Dance Parties, Doga (yoga), Naptime, Movies, Outdoor water park and more! Your pup will have the time of their life with our engaging activities.",
    },
    {
      icon: Gift,
      title: "Pup Parties",
      description:
        "Birthdays, Photoshoots, and more. Come celebrate with us! We'll make your pup's special day unforgettable with custom themes and decorations.",
    },
    {
      icon: Sparkles,
      title: "Pup Spa",
      description:
        "Let us pamper your pup! From luxurious baths to pawdicures, we offer a range of spa services to keep your furry friend looking and feeling their best.",
    },
    {
      icon: Car,
      title: "Pup Rides",
      description:
        "We offer pickup and dropoff services for your pup within the covered area. Safe, reliable transportation when you need it most.",
    },
    {
      icon: Stethoscope,
      title: "On-call Vet",
      description:
        "Check ups and yearly vaccines offered through our partnered vets. Keeping your pup healthy is our top priority.",
    },
    {
      icon: GraduationCap,
      title: "Pup Training",
      description:
        "Custom training services tailored to your needs. Get a free 30 min consultation with our expert trainers to develop the perfect plan for your pup.",
    },
  ];

  return (
    <div
      id="services"
      className="w-full bg-[#191919] py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-0 w-full h-full">
          <Paw className="absolute w-96 h-96 text-[#D4AF37] -left-20 top-10 rotate-12" />
          <Paw className="absolute w-64 h-64 text-[#D4AF37] right-10 bottom-10 -rotate-12" />
          <Paw className="absolute w-32 h-32 text-[#D4AF37] right-1/3 top-1/3 rotate-45" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Gold accent line */}
          <div className="w-24 h-[3px] bg-[#D4AF37] mb-8 mx-auto"></div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Premium <span className="text-[#D4AF37]">Services</span> for Your
            Royal Companion
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            From playtime to pampering, we offer comprehensive care services to
            keep your furry friend happy, healthy and entertained
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: any;
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{
        y: -5,
        boxShadow:
          "0 20px 25px -5px rgba(212, 175, 55, 0.1), 0 10px 10px -5px rgba(212, 175, 55, 0.04)",
      }}
      className="group relative rounded-2xl bg-gradient-to-b from-[#252525] to-[#1d1d1d] p-6 border border-[#D4AF37]/10 shadow-lg overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Icon container with animated background */}
      <div className="relative z-10 mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-[#D4AF37]/10 blur-xl rounded-full transform -translate-y-1/2 scale-[0.8] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/20">
            <Icon className="w-8 h-8 text-[#D4AF37]" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-3">
        <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#D4AF37] to-[#F4CF47] bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-white/70 leading-relaxed">{description}</p>
      </div>

      {/* Card hover highlight */}
      <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#D4AF37] group-hover:w-full transition-all duration-500 ease-out"></div>
    </motion.div>
  );
};
