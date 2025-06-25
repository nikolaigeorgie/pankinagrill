"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PawPrintIcon } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  "Premium care from certified pet professionals",
  "Personalized attention for your furry companion",
  "Daily updates and photos of your pet's activities",
];

const testimonials = [
  {
    image: "/images/royal_dog.png",
    name: "Bailey & Family",
    text: "Prince Paws has transformed our dog's life! The personalized care is unmatched.",
  },
  {
    image: "/images/kishore_gunnam.jpg",
    name: "Michael & Max",
    text: "The Royal Treatment package is worth every penny. My Max comes home happy every time!",
  },
  {
    image: "/images/person3.png",
    name: "Sarah & Luna",
    text: "The staff treats Luna like royalty. I couldn't ask for better care.",
  },
  {
    image: "/images/person4.png",
    name: "James & Bella",
    text: "Prince Paws has become Bella's second home. Their attention to detail is impressive.",
  },
  {
    image: "/images/person5.png",
    name: "Emily & Charlie",
    text: "The grooming services are exceptional. Charlie looks and feels like a million dollars!",
  },
];

export function Testimonials() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="w-full bg-[#191919] py-20 md:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-0 w-full h-full">
          <PawPrintIcon className="absolute w-96 h-96 text-[#D4AF37] left-20 top-20 rotate-12" />
          <PawPrintIcon className="absolute w-64 h-64 text-[#D4AF37] -right-10 bottom-40 -rotate-12" />
          <PawPrintIcon className="absolute w-32 h-32 text-[#D4AF37] right-1/3 top-1/4 rotate-45" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Gold accent line */}
            <div className="w-24 h-[3px] bg-[#D4AF37]"></div>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our <span className="text-[#D4AF37]">Clients</span> Share Their
              Experience
            </h2>

            <p className="text-white/80 text-lg max-w-md">
              Hear what pet parents have to say about the royal treatment their
              furry companions receive at Prince Paws.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index + 0.3, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mt-0.5">
                    <PawPrintIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                  <span className="text-white/80">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-black hover:shadow-lg hover:shadow-[#D4AF37]/20 font-medium transition-all duration-300"
              >
                Book a Royal Visit
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

          {/* Right Side - Testimonial Cards */}
          <div className="relative h-[600px]">
            {isClient &&
              testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: {
    image: string;
    name: string;
    text: string;
  };
  index: number;
}) => {
  // Calculate different positions for each card
  const positions = [
    { top: "5%", right: "0%", rotate: "2deg" },
    { top: "20%", right: "15%", rotate: "-3deg" },
    { top: "40%", right: "5%", rotate: "4deg" },
    { top: "60%", right: "18%", rotate: "-2deg" },
    { top: "75%", right: "2%", rotate: "3deg" },
  ];

  const position = positions[index % positions.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index + 0.2, duration: 0.5 }}
      whileHover={{ y: -8, rotate: 0, transition: { duration: 0.3 } }}
      className="absolute shadow-xl"
      style={{
        top: position.top,
        right: position.right,
        zIndex: 10 - index,
        rotate: position.rotate,
      }}
    >
      <div className="w-64 md:w-72 bg-gradient-to-b from-[#252525] to-[#1d1d1d] p-4 rounded-2xl border border-[#D4AF37]/20">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4AF37]/30">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-white font-medium">{testimonial.name}</h4>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-[#D4AF37]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        <p className="text-white/80 text-sm">
          &ldquo;{testimonial.text}&rdquo;
        </p>

        <div className="mt-3 flex justify-end">
          <PawPrintIcon className="w-5 h-5 text-[#D4AF37]/40" />
        </div>
      </div>
    </motion.div>
  );
};
