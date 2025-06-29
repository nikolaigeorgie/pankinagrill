"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Utensils, Instagram, Facebook, Star, ChefHat } from "lucide-react";

export function Footer() {
  const services = [
    { title: "Our Services", href: "#services" },
    { title: "About Us", href: "#about" },
    { title: "Photo Gallery", href: "#gallery" },
    { title: "Our Partners", href: "#partners" },
    { title: "Contact Info", href: "#contact" },
  ];

  const menu = [
    { title: "Our Menu", href: "#menu" },
    { title: "Shawarma & Kebabs", href: "#menu" },
    { title: "Mediterranean Platters", href: "#menu" },
    { title: "Fresh Appetizers", href: "#menu" },
    { title: "Signature Burgers", href: "#menu" },
  ];

  const company = [
    { title: "Home", href: "#home" },
    { title: "Customer Reviews", href: "#testimonials" },
    { title: "Frequently Asked Questions", href: "#faq" },
    { title: "About Our Story", href: "#about" },
  ];

  return (
    <footer className="relative w-full bg-[#191919] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Utensils className="absolute w-80 h-80 text-[#D4AF37] right-20 -bottom-20 rotate-12" />
        <Star className="absolute w-64 h-64 text-[#D4AF37] left-40 bottom-10 -rotate-15" />
        <ChefHat className="absolute w-48 h-48 text-[#D4AF37] left-20 top-10 rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-between gap-12 border-b border-[#D4AF37]/20 pb-12"
        >
          <div className="flex items-start flex-col lg:max-w-md">
            <div className="text-white font-bold text-3xl mb-2">
              Pankina <span className="text-[#D4AF37]">Grill</span>
            </div>
            <div className="w-20 h-[2px] bg-[#D4AF37] mb-6"></div>
            <h2 className="text-xl font-medium mt-2 max-w-sm text-white/90">
              Authentic Mediterranean and Middle Eastern cuisine. Fresh
              ingredients, traditional flavors, exceptional service.
            </h2>
            <div className="mt-6 space-y-3">
              <div className="text-white/80">
                <p className="text-sm font-medium text-[#D4AF37]">
                  Located at Mega Glatt Mart
                </p>
                <a
                  href="https://www.google.com/maps/place/6114+Reseda+Blvd,+Reseda,+CA+91335/@34.1812046,-118.5383695,817m/data=!3m2!1e3!4b1!4m6!3m5!1s0x80c2997500d5ce7f:0x555c227a648edb34!8m2!3d34.1812046!4d-118.5357946!16s%2Fg%2F11bw41qg03?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  6114 Reseda Blvd
                  <br />
                  Reseda, CA 91335
                </a>
              </div>
              <div className="text-white/80 text-sm">
                <p className="text-[#D4AF37] font-medium">
                  RCC Kosher Certified
                </p>
                <p className="text-white/60">
                  Under Rabbinical Council of California
                </p>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <Link
                href="https://www.instagram.com/pankinagrill?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors"
              >
                <Instagram size={24} />
                <span className="text-sm">@pankinagrill</span>
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61576330156583&mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors"
              >
                <Facebook size={24} />
                <span className="text-sm">Pankina Grill</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h3 className="font-semibold text-[#D4AF37] text-lg">Explore</h3>
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
              <h3 className="font-semibold text-[#D4AF37] text-lg">Menu</h3>
              <ul className="space-y-3">
                {menu.map((item, idx) => (
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
              <h3 className="font-semibold text-[#D4AF37] text-lg">Navigate</h3>
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
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-12 border-b border-[#D4AF37]/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Visit <span className="text-[#D4AF37]">Our Location</span>
            </h3>
            <p className="text-white/70">
              Find us at Mega Glatt Mart in Reseda
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.892634167891!2d-118.5383695!3d34.1812046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2997500d5ce7f%3A0x555c227a648edb34!2s6114%20Reseda%20Blvd%2C%20Reseda%2C%20CA%2091335!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[300px] md:h-[400px] grayscale-[0.3] contrast-[1.1] brightness-[0.9]"
            ></iframe>

            {/* Map Overlay */}
            <div className="absolute top-4 left-4 bg-[#191919]/90 backdrop-blur-sm rounded-lg px-4 py-3 border border-[#D4AF37]/30">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#D4AF37] rounded-full animate-pulse"></div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    Pankina Grill
                  </p>
                  <p className="text-white/70 text-xs">at Mega Glatt Mart</p>
                </div>
              </div>
            </div>
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
            © {new Date().getFullYear()} Pankina Grill. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0 flex items-center">
            <span className="text-white/60 text-sm">
              <Utensils className="inline-block w-4 h-4 mr-2 text-[#D4AF37]" />
              Where flavor meets tradition
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
