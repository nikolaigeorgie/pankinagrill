"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { PawPrintIcon } from "lucide-react";

interface FeatureCard {
  percentage: string;
  description: string;
  icon: React.ReactNode;
}

export function Features() {
  const features: FeatureCard[] = [
    {
      percentage: "100%",
      description: "Satisfaction guarantee for all royal companions",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="m9 12 2 2 4-4" />
          <path d="M12 3c-4.8 0-9 3.86-9 9s4.2 9 9 9 9-3.86 9-9-4.2-9-9-9" />
        </svg>
      ),
    },
    {
      percentage: "24/7",
      description: "Personal concierge service for your pet's needs",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      percentage: "95%",
      description: "Of clients renew their premium membership annually",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
    {
      percentage: "15+",
      description: "Luxury amenities in our royal pet facility",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#191919] py-20 md:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-0 w-full h-full">
          <PawPrintIcon className="absolute w-96 h-96 text-[#D4AF37] left-10 top-0 rotate-12" />
          <PawPrintIcon className="absolute w-64 h-64 text-[#D4AF37] -right-10 bottom-20 -rotate-12" />
          <PawPrintIcon className="absolute w-32 h-32 text-[#D4AF37] right-1/3 top-1/3 rotate-45" />
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
            Royal <span className="text-[#D4AF37]">Standards</span> of
            Excellence
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            At Prince Paws, we maintain the highest standards of luxury care,
            ensuring your furry companion receives treatment fit for royalty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  feature,
  index,
}: {
  feature: FeatureCard;
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
      className={cn(
        "group relative p-8 rounded-2xl bg-gradient-to-b from-[#252525] to-[#1d1d1d]",
        "border border-[#D4AF37]/10 shadow-lg overflow-hidden"
      )}
    >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 10px 10px, #D4AF37 2px, transparent 0),
              radial-gradient(circle at 30px 30px, #D4AF37 1px, transparent 0)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Icon */}
      <div className="relative z-10 mb-6">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/20 text-[#D4AF37]">
          {feature.icon}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#D4AF37] to-[#F4CF47] bg-clip-text text-transparent">
          {feature.percentage}
        </h3>
        <p className="text-white/70 leading-relaxed">{feature.description}</p>
      </div>

      {/* Card hover highlight */}
      <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#D4AF37] group-hover:w-full transition-all duration-500 ease-out"></div>
    </motion.div>
  );
};
