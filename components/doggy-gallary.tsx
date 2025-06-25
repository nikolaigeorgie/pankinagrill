"use client";

import React from "react";
import { motion } from "motion/react";
import { AnimatedGallary } from "./ui/animated-gallary";
import { useEffect, useState } from "react";

export default function DoggyGallery() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const items = [
    {
      title: "Royal Grooming & Spa Experience",
      description:
        "Our premium grooming services include luxurious baths with organic shampoos, precision haircuts, nail care, and aromatherapy to keep your furry companions looking and feeling their best. Each session ends with our signature paw balm treatment.",
      src: "/images/royal_dog.png", // Using an existing image for now
      alt: "Dog enjoying a spa treatment at Prince Paws",
    },
    {
      title: "Personalized Training Programs",
      description:
        "Our certified trainers develop customized training plans tailored to your dog's personality, breed, and specific needs. Using positive reinforcement techniques, we help establish good behaviors while building the bond between you and your pet.",
      src: "/images/royal_dog.png", // Using an existing image for now
      alt: "Training session at Prince Paws",
    },
    {
      title: "Luxury Boarding Accommodations",
      description:
        "When you're away, your pet deserves the royal treatment. Our luxury suites feature plush bedding, ambient music, climate control, and 24/7 monitoring. Daily play sessions, walks, and personal attention ensure your dog feels at home.",
      src: "/images/royal_dog.png", // Using an existing image for now
      alt: "Luxury pet accommodation at Prince Paws",
    },
    {
      title: "Gourmet Dining Experience",
      description:
        "Our chef-prepared meals are made with human-grade ingredients tailored to your pet's nutritional needs and preferences. From grain-free options to specialized diets, we ensure your royal companion enjoys the finest dining during their stay.",
      src: "/images/royal_dog.png", // Using an existing image for now
      alt: "Gourmet pet food at Prince Paws",
    },
  ];

  return (
    <section className="w-full bg-[#191919] py-16 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        {/* Gold accent line */}
        <div className="w-24 h-[3px] bg-[#D4AF37] mb-8 mx-auto"></div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Our <span className="text-[#D4AF37]">Royal</span> Services
        </h2>

        <p className="text-white/80 max-w-2xl mx-auto text-lg mb-10">
          Experience the luxury pet care services that have made Prince Paws the
          premier choice for discerning pet parents.
        </p>
      </motion.div>

      {isClient && <AnimatedGallary items={items} autoplay={true} />}
    </section>
  );
}
