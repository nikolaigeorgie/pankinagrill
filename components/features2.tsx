"use client";

import React from "react";
import { motion } from "motion/react";
import { Utensils, Truck, Users, Clock, ChefHat, Phone } from "lucide-react";

export function Features2() {
  const features = [
    {
      icon: Utensils,
      title: "Dine-In Experience",
      description:
        "Enjoy our authentic Mediterranean and Middle Eastern cuisine in our warm, welcoming atmosphere. Fresh ingredients prepared daily by our experienced chefs.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Quick and reliable delivery service to bring our delicious food right to your door. Hot, fresh meals delivered within 30-45 minutes in our coverage area.",
    },
    {
      icon: Users,
      title: "Catering Services",
      description:
        "Perfect for parties, events, and gatherings! We offer full catering packages with authentic flavors that will impress your guests. Custom menu planning available.",
    },
    {
      icon: Clock,
      title: "Quick Takeout",
      description:
        "Call ahead or order online for fast pickup. Your food will be ready when you arrive - perfect for busy schedules and lunch breaks.",
    },
    {
      icon: ChefHat,
      title: "Fresh Daily Prep",
      description:
        "All our ingredients are fresh and prepared daily. From our homemade hummus to perfectly grilled kebabs, taste the difference quality makes.",
    },
    {
      icon: Phone,
      title: "Easy Ordering",
      description:
        "Simple phone ordering with friendly staff ready to help. We know our regular customers&apos; favorites and can recommend dishes based on your preferences.",
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
          <Utensils className="absolute w-96 h-96 text-[#D4AF37] -left-20 top-10 rotate-12" />
          <ChefHat className="absolute w-64 h-64 text-[#D4AF37] right-10 bottom-10 -rotate-12" />
          <Clock className="absolute w-32 h-32 text-[#D4AF37] right-1/3 top-1/3 rotate-45" />
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
            Our <span className="text-[#D4AF37]">Services</span> & What We Offer
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            From dine-in experiences to catering and delivery, we&apos;re here
            to serve you authentic Mediterranean and Middle Eastern cuisine
            however you prefer
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
