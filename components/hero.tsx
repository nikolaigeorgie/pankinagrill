"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative w-full h-screen bg-[#191919] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-[#191919]/70 to-[#191919]/20 z-10"></div>
        <Image
          src="/images/image1.png"
          alt="Luxury Dog Experience"
          className="w-full h-full object-cover object-center opacity-70"
          fill
          priority
        />
      </div>

      {/* Content container */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          {/* Gold accent line */}
          <div className="w-24 h-[3px] bg-[#D4AF37] mb-8"></div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            <span className="text-[#D4AF37]">Panika Grill</span>
            <br />
            <span className="text-3xl md:text-4xl font-semibold text-white tracking-wide block mt-2">
              Taste the East
            </span>
          </h1>

          {/* Description text */}
          <p className="text-white/90 text-xl md:text-2xl font-light max-w-2xl mb-10 leading-relaxed">
            Authentic Middle Eastern cuisine in Tarzana.
            <br />
            Fresh kebabs, hummus, and Mediterranean favorites.
            <br />
            <span className="text-[#D4AF37] font-medium">
              Taste from the East.
            </span>
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              href="/login"
              className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C9A227] px-8 py-3 text-base font-medium text-black transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#D4AF37]/30 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2"
            >
              <span>Menu</span>
              <motion.svg
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
              </motion.svg>
            </Link>

            <Link
              href="/services"
              className="group relative inline-flex items-center justify-center rounded-full bg-transparent border-2 border-[#D4AF37] px-8 py-3 text-base font-medium text-white transition-all duration-300 ease-in-out hover:bg-[#D4AF37]/10 hover:shadow-lg hover:shadow-[#D4AF37]/20 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#191919]"
            >
              <span>Contact</span>
              <motion.svg
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
              </motion.svg>
            </Link>
          </div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10"
          >
            <div className="flex items-center space-x-3 text-white/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#D4AF37] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-base font-light tracking-wide">
                6118 Reseda Blvd, Tarzana, CA 91335
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-10 right-10 hidden md:block"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-[#F4CF47]/20 to-[#F4CF47]/40 border-2 border-[#F4CF47] rounded-full flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(244,207,71,0.6),transparent_70%)]"></div>
            <div className="absolute inset-0 animate-spin-slow [background:linear-gradient(45deg,transparent_40%,rgba(244,207,71,0.5)_45%,rgba(244,207,71,0.5)_55%,transparent_60%)] blur-sm"></div>
            <div className="relative z-10 p-3">
              <Image
                src="/images/rcc.png"
                alt="RCC Kashrut Certification"
                width={60}
                height={60}
                className="w-full h-auto object-contain filter drop-shadow-lg brightness-110"
                draggable={false}
              />
            </div>
          </div>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          className="text-white/70 text-sm tracking-widest mb-2"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          SCROLL
        </motion.div>
        <motion.div
          className="w-px h-8 bg-white/40 relative"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: 1.5,
            delay: 1.5,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="absolute w-3 h-3 bg-white/20 rounded-full -left-1 bottom-0"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 1.5,
              delay: 3,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
