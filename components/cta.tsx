"use client";
import React from "react";
import { motion } from "motion/react";
import { PawPrintIcon } from "lucide-react";
import Link from "next/link";

// Luxury pet-themed icons
const TreatIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <path d="M480 96c0 35.3-28.7 64-64 64c-24.6 0-46.1-13.9-56.9-34.3C367.5 137.8 384 152 384 169c0 21.1-17.1 38.3-38.3 38.3c-14.5 0-27.8-8.2-34.4-21.2c-7.3 14.8-22.5 25-40.1 25c-14.3 0-27.1-6.7-35.4-17.2c-8.3 10.5-21.1 17.2-35.4 17.2c-17.6 0-32.8-10.2-40.1-25c-6.6 13-19.9 21.2-34.4 21.2C104.1 207.3 87 190.1 87 169c0-17 16.5-31.2 24.9-43.3C101.1 146.1 79.6 160 55 160c-35.3 0-64-28.7-64-64s28.7-64 64-64c24.6 0 46.1 13.9 56.9 34.3C104.5 54.2 88 40 88 23c0-21.1 17.1-38.3 38.3-38.3c14.5 0 27.8 8.2 34.4 21.2c7.3-14.8 22.5-25 40.1-25c14.3 0 27.1 6.7 35.4 17.2c8.3-10.5 21.1-17.2 35.4-17.2c17.6 0 32.8 10.2 40.1 25c6.6-13 19.9-21.2 34.4-21.2C368.1-15.3 385 1.9 385 23c0 17-16.5 31.2-24.9 43.3C370.9 45.9 392.4 32 417 32c35.3 0 64 28.7 64 64z" />
  </svg>
);

const GroomingIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <path d="M112 24c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H136c-13.3 0-24-10.7-24-24zm96 56v48H160c0-26.5-21.5-48-48-48H64C28.7 80 0 108.7 0 144v96c0 35.3 28.7 64 64 64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V304c35.3 0 64-28.7 64-64V144c0-35.3-28.7-64-64-64H400c-26.5 0-48 21.5-48 48H304V80c0-26.5-21.5-48-48-48H160c0-26.5-21.5-48-48-48H64C28.7-16 0 12.7 0 48v32c0 35.3 28.7 64 64 64h48c26.5 0 48-21.5 48-48h48z" />
  </svg>
);

const VetIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    fill="currentColor"
  >
    <path d="M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1V192c0 53 43 96 96 96s96-43 96-96V71.1l-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334.4 19.1 352 43.5 352 71.1V192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.2 448 336 448c61.9 0 112-50.1 112-112V265.3c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V336c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192V71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2z" />
  </svg>
);

const CrownIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    fill="currentColor"
  >
    <path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40l180.2 192.2c7.2 7.7 12.3 17.2 14.9 27.8H64c-17.7 0-32 14.3-32 32s14.3 32 32 32H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H340.8c2.6-10.6 7.7-20.1 14.9-27.8L536 176c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z" />
  </svg>
);

export default function CTA() {
  const features = [
    {
      icon: <PawPrintIcon className="w-8 h-8" />,
      title: "Premium Day Care",
      description:
        "Luxury accommodations and personalized attention for your royal companion.",
    },
    {
      icon: <GroomingIcon className="w-8 h-8" />,
      title: "Spa & Grooming",
      description: "Pamper your pet with premium grooming and spa treatments.",
    },
    {
      icon: <VetIcon className="w-8 h-8" />,
      title: "Health & Wellness",
      description:
        "On-call veterinary services to ensure your pet's optimal health.",
    },
    {
      icon: <TreatIcon className="w-8 h-8" />,
      title: "Special Occasions",
      description:
        "Birthday parties and special celebrations for your furry friend.",
    },
    {
      icon: <CrownIcon className="w-8 h-8" />,
      title: "Royal Treatment",
      description:
        "VIP services that treat your pet like the royalty they truly are.",
    },
  ];

  return (
    <section className="relative w-full bg-[#191919] py-24 overflow-hidden">
      {/* Background Paw Prints */}
      <div className="absolute inset-0 opacity-5">
        <PawPrintIcon className="absolute w-96 h-96 text-[#D4AF37] right-10 top-20 rotate-12" />
        <PawPrintIcon className="absolute w-80 h-80 text-[#D4AF37] left-0 bottom-0 -rotate-12" />
        <PawPrintIcon className="absolute w-64 h-64 text-[#D4AF37] right-1/4 bottom-1/4 rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Gold accent line */}
          <div className="w-24 h-[3px] bg-[#D4AF37] mb-8 mx-auto"></div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Experience the <span className="text-[#D4AF37]">Royal</span>{" "}
            Difference
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto text-lg mb-12">
            Prince Paws offers premium care services designed to pamper your
            furry companions with the luxury they deserve.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gradient-to-b from-[#252525] to-[#1d1d1d] border border-[#D4AF37]/10 rounded-xl p-6 flex flex-col items-center text-center group hover:bg-[#D4AF37]/5 transition-all duration-300"
              >
                <div className="bg-[#D4AF37]/10 p-4 rounded-full w-16 h-16 mb-4 flex items-center justify-center text-[#D4AF37]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/70">{feature.description}</p>
                <div className="w-0 group-hover:w-full h-[2px] bg-[#D4AF37] transition-all duration-500 mt-4"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#252525] to-[#1e1e1e] rounded-2xl border border-[#D4AF37]/20 p-8 md:p-12 max-w-4xl mx-auto shadow-xl shadow-black/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to Treat Your Pet?
              </h3>
              <p className="text-white/70 mb-0 max-w-md">
                Book a royal experience for your furry companion today. Limited
                spots available.
              </p>
            </div>

            <Link
              href="/book-now"
              className="group relative flex-shrink-0 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C9A227] px-8 py-3 text-base font-medium text-black transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#D4AF37]/30 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#191919]"
            >
              <span>Book an Appointment</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform group-hover:translate-x-1"
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
          </div>
        </motion.div>

        {/* Additional note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center text-white/50 text-sm"
        >
          <PawPrintIcon className="inline-block w-4 h-4 mr-1 text-[#D4AF37]" />
          Join our pack of satisfied pet owners and give your companion the
          royal treatment they deserve
        </motion.p>
      </div>
    </section>
  );
}
