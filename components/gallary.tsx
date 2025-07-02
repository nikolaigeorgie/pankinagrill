"use client";

import React from "react";
import { motion } from "motion/react";
import { AnimatedGallary } from "./ui/animated-gallary";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Menu items based on the provided Mediterranean restaurant menu
  const items = [
    {
      title: "Merguez",
      description:
        "Spicy North African sausage, grilled to perfection. Available as pita, laffa, baguette, or plate. Served with fresh Mediterranean sides.",
      src: "/images/shuarma.jpeg",
      alt: "Grilled Merguez sausage with sides",
    },
    {
      title: "Chicken Shawarma",
      description:
        "Marinated chicken, slow-roasted on a vertical spit, thinly sliced and served with your choice of bread or as a plate. Comes with fresh vegetables and house sauces.",
      src: "/images/chicken.jpeg",
      alt: "Chicken Shawarma wrap with vegetables",
    },
    {
      title: "Persian Koobideh",
      description:
        "Juicy ground beef and lamb skewers, seasoned with Persian spices and grilled. Served with rice, salad, or wrapped in bread.",
      src: "/images/shuarma.jpeg",
      alt: "Persian Koobideh skewers with rice",
    },
    {
      title: "Falafel Plate",
      description:
        "Crispy chickpea falafel balls, served with hummus, tahini, Israeli salad, and warm pita. A vegetarian favorite!",
      src: "/images/chicken.jpeg",
      alt: "Falafel plate with hummus and salad",
    },
    {
      title: "Classic Hummus",
      description:
        "Creamy house-made hummus, topped with olive oil and paprika. Served with fresh pita or laffa bread.",
      src: "/images/shuarma.jpeg",
      alt: "Classic hummus with olive oil and pita",
    },
    {
      title: "Shakshuka",
      description:
        "Eggs poached in a rich tomato and pepper sauce, spiced with Mediterranean herbs. Served with warm bread.",
      src: "/images/chicken.jpeg",
      alt: "Shakshuka with poached eggs and bread",
    },
    {
      title: "Double Burger",
      description:
        "Juicy double beef patty burger with lettuce, tomato, onion, and house sauce. Served with fries.",
      src: "/images/shuarma.jpeg",
      alt: "Double burger with fries",
    },
    {
      title: "Appetizer Sampler",
      description:
        "A selection of our favorite appetizers: hummus, falafel, zaatar laffa, and more. Perfect for sharing.",
      src: "/images/chicken.jpeg",
      alt: "Appetizer sampler platter",
    },
    {
      title: "Cold Beverages",
      description:
        "Enjoy a variety of cold drinks including soft drinks, sparkling water, malt beer (non-alcoholic), and spring water.",
      src: "/images/shuarma.jpeg",
      alt: "Assorted cold beverages",
    },
    {
      title: "Extras & Sides",
      description:
        "Add extra shawarma, kebabs, pita, or falafel balls to your meal. Perfect for customizing your Mediterranean feast.",
      src: "/images/chicken.jpeg",
      alt: "Mediterranean extras and sides",
    },
  ];

  return (
    <section className="w-full bg-background py-16 relative overflow-hidden">
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
          Explore Our <span className="text-[#D4AF37]">Mediterranean</span> Menu
        </h2>

        <p className="text-white/80 max-w-2xl mx-auto text-lg mb-10">
          Discover the authentic flavors of the Mediterranean in Encino,
          California. From savory shawarma and kebabs to fresh hummus and
          falafel, our menu offers something for everyone.
        </p>
      </motion.div>

      {isClient && <AnimatedGallary items={items} autoplay={true} />}
    </section>
  );
}
