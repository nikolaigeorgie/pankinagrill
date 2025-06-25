"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { PawPrintIcon, Instagram } from "lucide-react";

export function Footer() {
  const services = [
    { title: "Premium Day Care", href: "#pup-care" },
    { title: "Luxury Spa & Grooming", href: "#pup-spa" },
    { title: "Training & Enrichment", href: "#pup-training" },
    { title: "Pup Parties", href: "#pup-parties" },
    { title: "Royal Rides", href: "#pup-rides" },
  ];

  const company = [
    { title: "About Us", href: "#about" },
    { title: "Our Royal Standards", href: "#standards" },
    { title: "Testimonials", href: "#testimonials" },
    { title: "Contact Us", href: "#contact" },
  ];

  const legal = [
    { title: "Privacy Policy", href: "#privacy" },
    { title: "Terms of Service", href: "#terms" },
    { title: "Pet Care Agreement", href: "#agreement" },
  ];

  return (
    <footer className="relative w-full bg-[#191919] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <PawPrintIcon className="absolute w-80 h-80 text-[#D4AF37] right-20 -bottom-20 rotate-12" />
        <PawPrintIcon className="absolute w-64 h-64 text-[#D4AF37] left-40 bottom-10 -rotate-15" />
        <PawPrintIcon className="absolute w-48 h-48 text-[#D4AF37] left-20 top-10 rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between gap-12 border-b border-[#D4AF37]/20 pb-12"
        >
          <div className="flex items-start flex-col">
            <div className="text-white font-bold text-3xl mb-2">
              Prince <span className="text-[#D4AF37]">Paws</span>
            </div>
            <div className="w-20 h-[2px] bg-[#D4AF37] mb-6"></div>
            <h2 className="text-xl font-medium mt-2 max-w-sm text-white/90">
              Luxury care for your royal companions. Where every pet is treated
              like royalty.
            </h2>
            <div className="mt-8">
              <Link
                href="https://www.instagram.com/princes.paw?igsh=MThia2FnODM0NjVmZg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors"
              >
                <Instagram size={24} />
                <span className="text-sm">@princes.paw</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h3 className="font-semibold text-[#D4AF37] text-lg">
                Royal Services
              </h3>
              <ul className="space-y-3">
                {services.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-[#D4AF37] transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="font-semibold text-[#D4AF37] text-lg">
                Our Kingdom
              </h3>
              <ul className="space-y-3">
                {company.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-[#D4AF37] transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="font-semibold text-[#D4AF37] text-lg">Legal</h3>
              <ul className="space-y-3">
                {legal.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-[#D4AF37] transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8"
        >
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Prince Paws. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0 flex items-center">
            <span className="text-white/60 text-sm">
              <PawPrintIcon className="inline-block w-4 h-4 mr-2 text-[#D4AF37]" />
              Where tails never stop wagging
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
