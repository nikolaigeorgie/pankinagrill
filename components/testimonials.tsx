"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Star, Utensils, Clock } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  "Fresh Mediterranean and Middle Eastern cuisine daily",
  "Authentic flavors prepared by experienced chefs",
  "Fast, friendly service with attention to detail",
];

const testimonials = [
  {
    image: "/images/image1.png",
    name: "דוד ושרה כהן",
    text: "האוכל כאן פשוט נהדר! השווארמה הכי טעימה שאכלתי בעיר. השירות מהיר ואדיב.",
  },
  {
    image: "/images/image2.png",
    name: "Michael & Sarah",
    text: "Best Mediterranean food in town! The kebabs are perfectly grilled and the hummus is authentic. Highly recommend!",
  },
  {
    image: "/images/image3.png",
    name: "יוסי ומרים לוי",
    text: "המקום הזה הפך להיות הבית השני שלנו. הפלאפל פריך והטחינה הכי טעימה. בהחלט חוזרים!",
  },
  {
    image: "/images/image.png",
    name: "James Rodriguez",
    text: "Amazing Persian koobideh and perfectly seasoned chicken. The prices are fair and portions are generous!",
  },
  {
    image: "/images/logo.png",
    name: "רונית וגילי אברהם",
    text: "כל פעם שאנחנו מזמינים מכאן זה חגיגה בבית! הסביצ׳ המעולה והזעתר על הלאפה - פשוט מושלם!",
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
          <Utensils className="absolute w-96 h-96 text-[#D4AF37] left-20 top-20 rotate-12" />
          <Star className="absolute w-64 h-64 text-[#D4AF37] -right-10 bottom-40 -rotate-12" />
          <Clock className="absolute w-32 h-32 text-[#D4AF37] right-1/3 top-1/4 rotate-45" />
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
              What Our <span className="text-[#D4AF37]">Customers</span> Are
              Saying
            </h2>

            <p className="text-white/80 text-lg max-w-md">
              Discover why food lovers keep coming back to Pankina Grill for
              authentic Mediterranean and Middle Eastern flavors.
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
                    <Star className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                  <span className="text-white/80">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="tel:+‭18184574095‬"
                  className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-black hover:shadow-lg hover:shadow-[#D4AF37]/20 font-medium transition-all duration-300"
                >
                  Call Now
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href="#menu"
                  className="inline-flex items-center px-8 py-3 rounded-full bg-transparent border border-[#D4AF37] text-white hover:bg-[#D4AF37]/10 font-medium transition-all duration-300"
                >
                  View Menu
                  <Utensils className="h-5 w-5 ml-2" />
                </Link>
              </motion.div>
            </div>
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
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4AF37]/30 bg-[#D4AF37]/10 flex items-center justify-center">
            <Utensils className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <div>
            <h4 className="text-white font-medium">{testimonial.name}</h4>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-[#D4AF37]"
                  fill="currentColor"
                />
              ))}
            </div>
          </div>
        </div>

        <p className="text-white/80 text-sm leading-relaxed">
          &ldquo;{testimonial.text}&rdquo;
        </p>

        <div className="mt-3 flex justify-end">
          <Star className="w-5 h-5 text-[#D4AF37]/40" />
        </div>
      </div>
    </motion.div>
  );
};
