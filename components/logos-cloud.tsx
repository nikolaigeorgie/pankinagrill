"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

export function LogoCloud() {
  return (
    <section className="relative w-full py-16 bg-[#191919] overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="w-24 h-[3px] bg-[#D4AF37] mb-6 mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-[#D4AF37]">Kashrut</span> Certified
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <a
            href="https://rcc.org"
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer"
          >
            <div className="relative bg-gray-800 rounded-xl p-6 shadow-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
              <Image
                src="/images/rcc.png"
                alt="Rabbinical Council of California Kashrut Certification"
                width={120}
                height={120}
                className="w-24 h-24 object-contain filter brightness-0 invert"
                draggable={false}
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
