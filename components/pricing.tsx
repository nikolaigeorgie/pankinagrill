"use client";
import React from "react";
import { motion } from "motion/react";
import { PawPrintIcon, Crown, Shield, StarIcon } from "lucide-react";
import Link from "next/link";

const PricingCard = ({
  tier,
  price,
  isHighlighted = false,
  features,
  icon: Icon,
  index,
  cta,
}: {
  tier: string;
  price: number;
  isHighlighted?: boolean;
  features: string[];
  icon: React.ElementType;
  index: number;
  cta: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={`relative rounded-2xl overflow-hidden ${
        isHighlighted
          ? "border-2 border-[#D4AF37]"
          : "border border-[#D4AF37]/20"
      }`}
    >
      {isHighlighted && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-center py-2 text-sm font-semibold text-black">
          Most Popular
        </div>
      )}

      <div
        className={`p-8 ${
          isHighlighted ? "pt-14" : "pt-8"
        } bg-gradient-to-b from-[#252525] to-[#1d1d1d]`}
      >
        {/* Card Header */}
        <div className="flex flex-col items-center mb-6">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
              isHighlighted
                ? "bg-gradient-to-br from-[#D4AF37] to-[#C9A227] text-black"
                : "bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 text-[#D4AF37] border border-[#D4AF37]/20"
            }`}
          >
            {/* @ts-expect-error - Icon component may have incompatible props but works in practice */}
            <Icon className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-1">{tier}</h3>

          <div className="flex items-baseline">
            <span className="text-[#D4AF37] text-2xl font-semibold">$</span>
            <span className="text-4xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F4CF47] bg-clip-text text-transparent">
              {price}
            </span>
            <span className="ml-1 text-white/60">/month</span>
          </div>
        </div>

        {/* Feature List */}
        <ul className="space-y-4 mb-8">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i + 0.2 * index }}
              className="flex items-start"
            >
              <PawPrintIcon
                className={`w-5 h-5 mr-3 mt-0.5 ${
                  isHighlighted ? "text-[#D4AF37]" : "text-[#D4AF37]/70"
                }`}
              />
              <span className="text-white/80">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            href="/login"
            className={`block w-full py-3 px-6 rounded-full text-center font-medium transition-all duration-300 ${
              isHighlighted
                ? "bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-black hover:shadow-lg hover:shadow-[#D4AF37]/20"
                : "bg-transparent border border-[#D4AF37] text-white hover:bg-[#D4AF37]/10"
            }`}
          >
            {cta}
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export function Pricing() {
  const basicFeatures = [
    "Weekly grooming session",
    "Basic health check-ups",
    "2 walks per day (30 min each)",
    "Standard food and treats",
    "Photo updates twice weekly",
  ];

  const royalFeatures = [
    "Twice-weekly premium grooming",
    "Regular veterinary check-ups",
    "3 private walks per day (45 min each)",
    "Custom nutrition meal plan",
    "Daily photo and video updates",
    "Priority booking for special events",
    "Complimentary spa treatment monthly",
  ];

  const imperialFeatures = [
    "Unlimited grooming services",
    "24/7 on-call veterinary care",
    "4 private walks daily (45 min each)",
    "Gourmet meal preparation",
    "Live video check-ins anytime",
    "Monthly birthday celebrations",
    "Weekend staycation package included",
  ];

  return (
    <div
      id="pricing"
      className="w-full bg-[#191919] py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-0 w-full h-full">
          <PawPrintIcon className="absolute w-96 h-96 text-[#D4AF37] right-20 top-20 -rotate-12" />
          <PawPrintIcon className="absolute w-64 h-64 text-[#D4AF37] left-10 bottom-40 rotate-12" />
          <PawPrintIcon className="absolute w-32 h-32 text-[#D4AF37] left-1/3 top-1/4 -rotate-45" />
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
            Royal <span className="text-[#D4AF37]">Treatment</span> Plans
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Choose the perfect care plan for your furry companion, each designed
            to provide an exceptional luxury experience tailored to your
            pet&apos;s needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <PricingCard
            tier="Noble Care"
            price={199}
            features={basicFeatures}
            icon={Shield}
            index={0}
            cta="Get Started"
          />

          <PricingCard
            tier="Royal Care"
            price={349}
            features={royalFeatures}
            isHighlighted
            icon={Crown}
            index={1}
            cta="Experience Royalty"
          />

          <PricingCard
            tier="Imperial Care"
            price={499}
            features={imperialFeatures}
            icon={StarIcon}
            index={2}
            cta="Join Elite Membership"
          />
        </div>

        {/* Custom Care Option */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center bg-gradient-to-b from-[#252525] to-[#1d1d1d] rounded-2xl p-8 border border-[#D4AF37]/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Need a Custom Care Plan?
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            Our pet concierge is ready to create a bespoke care package
            perfectly tailored to your companion&apos;s unique preferences and
            needs.
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="inline-block"
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 rounded-full bg-transparent border border-[#D4AF37] text-white hover:bg-[#D4AF37]/10 transition-all duration-300"
            >
              <span>Contact Our Concierge</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
