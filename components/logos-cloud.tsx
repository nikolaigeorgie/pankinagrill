"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { MapPin, Star } from "lucide-react";

export function LogoCloud() {
  return (
    <section className="relative w-full py-16 bg-[#191919] overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="w-24 h-[3px] bg-[#D4AF37] mb-6 mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-[#D4AF37]">Kashrut</span> Certified
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Proudly operating under{" "}
            <span className="text-[#D4AF37] font-semibold">
              Mega Glatt Mart
            </span>{" "}
            with full RCC certification
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <a
              href="https://rcc.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
            >
              <div className="relative bg-gray-800 rounded-xl p-8 shadow-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 hover:scale-105">
                <Image
                  src="/images/rcc.png"
                  alt="Rabbinical Council of California Kashrut Certification"
                  width={120}
                  height={120}
                  className="w-28 h-28 object-contain filter brightness-0 invert"
                  draggable={false}
                />
                <div className="text-center mt-4">
                  <p className="text-white font-semibold">RCC Certified</p>
                  <p className="text-white/60 text-sm">
                    Rabbinical Council of California
                  </p>
                </div>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gray-800/50 rounded-xl p-6 border border-[#D4AF37]/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Mega Glatt Mart
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Pankina Grill operates as part of Mega Glatt Mart, ensuring
                    the highest standards of kashrut and quality in our
                    Mediterranean and Middle Eastern cuisine.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-[#D4AF37]/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Visit Us
                  </h3>
                  <a
                    href="https://www.google.com/maps/place/6114+Reseda+Blvd,+Reseda,+CA+91335/@34.1812046,-118.5383695,817m/data=!3m2!1e3!4b1!4m6!3m5!1s0x80c2997500d5ce7f:0x555c227a648edb34!8m2!3d34.1812046!4d-118.5357946!16s%2Fg%2F11bw41qg03?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-[#D4AF37] transition-colors"
                  >
                    6114 Reseda Blvd
                    <br />
                    Reseda, CA 91335
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
