"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const menuData = {
  menu: [
    {
      name: "Merguez",
      prices: {
        pita: 18.99,
        laffa: 19.99,
        baguette: 19.99,
        plate: 21.99,
      },
    },
    {
      name: "Chicken Shawarma",
      prices: {
        pita: 16.99,
        laffa: 17.99,
        baguette: 19.99,
        plate: 21.99,
      },
    },
    {
      name: "Persian Koobideh",
      prices: {
        pita: 16.99,
        laffa: 17.99,
        baguette: 17.99,
        plate: 21.99,
      },
    },
    {
      name: "Chicken Thigh Skewer",
      prices: {
        pita: 16.99,
        laffa: 17.99,
        baguette: 17.99,
        plate: 21.99,
      },
    },
    {
      name: "Persian Chicken Kebab",
      prices: {
        pita: 16.99,
        laffa: 17.99,
        baguette: 17.99,
        plate: 21.99,
      },
    },
    {
      name: "House Kebab Skewer",
      prices: {
        pita: 16.99,
        laffa: 17.99,
        baguette: 17.99,
        plate: 21.99,
      },
    },
    {
      name: "Schnitzel",
      prices: {
        pita: 16.99,
        laffa: 17.99,
        baguette: 17.99,
        plate: 21.99,
      },
    },
    {
      name: "Grilled Chicken Breast",
      prices: {
        pita: 16.99,
        laffa: 17.99,
        baguette: 17.99,
        plate: 21.99,
      },
    },
    {
      name: "Shakshuka",
      prices: {
        pita: 14.99,
        laffa: 16.99,
        baguette: 16.99,
        plate: 18.99,
      },
    },
    {
      name: "Green Omelette",
      prices: {
        pita: 14.99,
        laffa: 16.99,
        baguette: 16.99,
        plate: 18.99,
      },
    },
    {
      name: "Falafel",
      prices: {
        pita: 13.95,
        laffa: 15.99,
        baguette: 15.99,
        plate: 18.99,
      },
    },
    {
      name: "Sabich",
      prices: {
        pita: 13.99,
        laffa: 15.99,
        baguette: 15.99,
        plate: 17.99,
      },
    },
    {
      name: "Veggie",
      prices: {
        pita: 8.99,
        laffa: 12.99,
        baguette: 12.99,
        plate: 15.99,
      },
    },
  ],

  burgers: [
    {
      name: "Double Burger",
      price: 18.99,
    },
    {
      name: "Hamburger",
      price: 14.99,
    },
    {
      name: "Schnitzel Burger",
      price: 14.99,
    },
    {
      name: "Falafel Burger",
      price: 13.99,
    },
  ],
  cold_beverages: [
    {
      name: "Soft Drinks",
      price: 2.5,
    },
    {
      name: "Water Bottled",
      price: 2.5,
    },
    {
      name: "Sparkling Water",
      price: 2.5,
    },
    {
      name: "Malt Beer (Non-Alcoholic)",
      price: 4,
    },
    {
      name: "Spring",
      price: 3.5,
    },
  ],
  extras: [
    {
      name: "Shawarma Per LB",
      price: 17.99,
    },
    {
      name: "Chicken Thigh Skewer",
      price: 9.99,
    },
    {
      name: "Persian Chicken Kebab",
      price: 12.99,
    },
    {
      name: "House Kebab Skewer",
      price: 9.99,
    },
    {
      name: "Persian Koobideh",
      price: 7.99,
    },
    {
      name: "Schnitzel",
      price: 9.99,
    },
    {
      name: "Grilled Chicken Breast",
      price: 8.99,
    },
    {
      name: "Merguez",
      price: 3.99,
    },
    {
      name: "Falafel Balls (6 pcs)",
      price: 6.99,
    },
    {
      name: "Pita",
      price: 1.25,
    },
  ],
  appetizers: [
    {
      name: "Hummus Shawarma",
      price: 16.99,
    },
    {
      name: "Hummus Falafel",
      price: 15.99,
    },
    {
      name: "Classic Hummus",
      price: 9.99,
    },
    {
      name: "Zaatar Laffa",
      price: 5.99,
    },
    {
      name: "Zaatar Pita",
      price: 3.5,
    },
  ],
  salads: [
    {
      name: "Hummus",
      price: 8.99,
    },
    {
      name: "Israeli Salad",
      price: 6.99,
    },
    {
      name: "Fried Eggplant",
      price: 5.99,
    },
    {
      name: "White Cabbage",
      price: 5.99,
    },
    {
      name: "Red Cabbage",
      price: 6.99,
    },
    {
      name: "White Rice",
      price: 4.99,
    },
    {
      name: "Pico de Gallo",
      price: 7.99,
    },
  ],
  soups: [
    {
      name: "Yemeni Chicken Soup",
      price: 15.99,
    },
  ],
};

const MenuSection = ({
  title,
  items,
  showPrices = false,
}: {
  title: string;
  items: any[];
  showPrices?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-8"
      id={title.toLowerCase().replace(" ", "-")}
    >
      <h3 className="text-2xl font-bold text-[#D4AF37] mb-6 text-center uppercase tracking-wide">
        {title}
      </h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-gradient-to-r from-[#252525]/80 to-[#1d1d1d]/80 rounded-lg p-4 border border-[#D4AF37]/20"
          >
            <div className="flex justify-between items-start">
              <h4 className="text-white font-semibold text-lg mb-2">
                {item.name}
              </h4>
              {showPrices && item.price && (
                <span className="text-[#D4AF37] font-bold text-lg">
                  ${item.price.toFixed(2)}
                </span>
              )}
            </div>

            {item.prices && (
              <div className="grid grid-cols-2 gap-3 mt-3">
                {Object.entries(item.prices).map(([type, price]) => (
                  <div
                    key={type}
                    className="flex justify-between items-center bg-[#1d1d1d]/50 rounded px-3 py-2"
                  >
                    <span className="text-white/80 capitalize text-sm">
                      {type}
                    </span>
                    <span className="text-[#D4AF37] font-semibold">
                      ${(price as number).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("main-menu");

  const categories = [
    { id: "main-menu", title: "Main Menu" },
    { id: "burgers", title: "Burgers" },
    { id: "appetizers", title: "Appetizers" },
    { id: "cold-beverages", title: "Cold Beverages" },
    { id: "salads", title: "Salads" },
    { id: "soups", title: "Soups" },
    { id: "extras", title: "Extras" },
  ];

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [activeTab, setActiveTab] = useState<"desktop" | "mobile">("mobile");

  return (
    <div
      id="menu"
      className="w-full relative bg-background py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-0 w-full h-full">
          <div className="absolute w-96 h-96 right-20 top-20 bg-[#D4AF37] rounded-full blur-3xl" />
          <div className="absolute w-64 h-64 left-10 bottom-40 bg-[#D4AF37] rounded-full blur-3xl" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Gold accent line */}
          <div className="w-24 h-[3px] bg-[#D4AF37] mb-8 mx-auto"></div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Our <span className="text-[#D4AF37]">Menu</span>
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Discover our authentic Mediterranean and Middle Eastern cuisine,
            prepared fresh daily with the finest ingredients.
          </p>
        </motion.div>

        {/* Tab Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-[#252525] rounded-full p-1 border border-[#D4AF37]/30">
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveTab("desktop")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "desktop"
                    ? "bg-[#D4AF37] text-black shadow-lg"
                    : "text-white/70 hover:text-white hover:bg-[#D4AF37]/10"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Menu Image</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab("mobile")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "mobile"
                    ? "bg-[#D4AF37] text-black shadow-lg"
                    : "text-white/70 hover:text-white hover:bg-[#D4AF37]/10"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Menu List</span>
                </div>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Desktop: Show Menu Image */}
        {activeTab === "desktop" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div className="relative max-w-4xl w-full space-y-4">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-[#C9A227]/20 rounded-2xl blur-xl transform scale-105"></div>
              <div className="relative bg-gradient-to-b from-[#252525] to-[#1d1d1d] rounded-2xl p-8 border border-[#D4AF37]/30">
                <Image
                  src="/images/menu.jpeg"
                  alt="Pankina Grill Menu"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-t-lg shadow-2xl"
                  priority
                />
                <Image
                  src="/images/menu-1.jpeg"
                  alt="Pankina Grill Menu Continued"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-b-lg shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Mobile: Show Custom UI Breakdown */}
        {activeTab === "mobile" && (
          <>
            <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-[#D4AF37]/20 mb-8">
              <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex overflow-x-auto scrollbar-hide py-4 space-x-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => scrollToCategory(category.id)}
                      className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex-shrink-0 ${
                        activeCategory === category.id
                          ? "bg-[#D4AF37] text-black shadow-lg"
                          : "bg-[#252525] text-white/70 hover:text-white hover:bg-[#D4AF37]/10 border border-[#D4AF37]/30"
                      }`}
                    >
                      {category.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <MenuSection title="Main Menu" items={menuData.menu} />
              <MenuSection
                title="Burgers"
                items={menuData.burgers}
                showPrices
              />
              <MenuSection
                title="Appetizers"
                items={menuData.appetizers}
                showPrices
              />
              <MenuSection
                title="Cold Beverages"
                items={menuData.cold_beverages}
                showPrices
              />
              <MenuSection title="Salads" items={menuData.salads} showPrices />
              <MenuSection title="Soups" items={menuData.soups} showPrices />
              <MenuSection title="Extras" items={menuData.extras} showPrices />
            </div>
          </>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="inline-block"
          >
            <a
              href="tel:+‭18184574095‬"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-black font-semibold text-lg hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300"
            >
              <span>Order Now</span>
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
        </motion.div>
      </div>
    </div>
  );
}
