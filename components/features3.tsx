"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Utensils,
  MessageCircle,
  CreditCard,
  Calendar,
  Star,
  ChefHat,
} from "lucide-react";

// Message type definition
type Message = {
  role: "assistant" | "user";
  content: string;
};

// Card type definition
type Card = {
  id: number;
  name: string;
  designation: string;
  content: string;
  gradient: string;
};

// Reusable components
const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
    className="bg-gradient-to-b from-[#252525] to-[#1d1d1d] rounded-2xl p-5 border border-[#D4AF37]/10 shadow-lg overflow-hidden"
  >
    {children}
  </motion.div>
);

const ContentBox = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "space-y-4 rounded-xl p-4 bg-[#202020] h-[320px] border border-[#D4AF37]/20 overflow-hidden",
      className
    )}
  >
    {children}
  </div>
);

const SectionTitle = ({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: any;
}) => (
  <div className="mt-6 flex flex-col items-center">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/20 mb-3">
      <Icon className="w-6 h-6 text-[#D4AF37]" />
    </div>
    <motion.h3
      whileHover={{ scale: 1.02 }}
      className="text-xl font-semibold bg-gradient-to-r from-[#D4AF37] to-[#F4CF47] bg-clip-text text-transparent mb-2 text-center"
    >
      {title}
    </motion.h3>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-white/70 text-sm leading-relaxed text-center"
    >
      {description}
    </motion.p>
  </div>
);

// Customer Service Chat Section
const CustomerServiceSection = () => {
  const messages: Message[] = [
    {
      role: "assistant",
      content: "Hello! Welcome to Pankina Grill. How can I help you today?",
    },
    {
      role: "user",
      content: "I'd like to place a large catering order for this Friday",
    },
    {
      role: "assistant",
      content:
        "Perfect! Our catering includes fresh kebabs, shawarma, hummus platters, and more. How many people will you be serving?",
    },
  ];

  return (
    <SectionWrapper>
      <ContentBox>
        <div className="space-y-4 h-[240px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#D4AF37]/20 scrollbar-track-transparent">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 5px 15px -3px rgba(212,175,55,0.15)",
                }}
                transition={{ type: "spring", stiffness: 400 }}
                className={`max-w-[80%] text-sm p-3 ${
                  message.role === "user"
                    ? "rounded-[10px_0px_10px_10px] bg-gradient-to-br from-[#D4AF37] to-[#C9A227] text-black shadow-md"
                    : "rounded-[0px_10px_10px_10px] bg-[#252525] border border-[#D4AF37]/20 text-white/90 shadow-md"
                }`}
              >
                {message.content}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="border border-[#D4AF37]/30 rounded-full p-3 flex items-center gap-3 bg-[#1d1d1d]"
        >
          <input
            type="text"
            placeholder="Ask about our menu or catering..."
            className="flex-1 outline-none text-sm bg-transparent text-white/90 placeholder-white/50"
          />
          <div className="flex items-center gap-3 text-[#D4AF37]">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="hover:text-[#F4CF47] transition-colors"
            >
              <Utensils size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, x: 2 }}
              className="hover:text-[#F4CF47] transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </ContentBox>

      <SectionTitle
        title="Customer Support"
        description="Our friendly staff is always ready to help with orders, reservations, catering, and any questions about our Mediterranean cuisine."
        icon={MessageCircle}
      />
    </SectionWrapper>
  );
};

// Loyalty Program Section
const LoyaltySection = () => {
  const [cards, setCards] = useState<Card[]>([
    {
      id: 1,
      name: "Gold Member",
      designation: "VIP",
      content: "20% Off All Orders",
      gradient: "from-[#D4AF37] to-[#C9A227]",
    },
    {
      id: 2,
      name: "Silver Foodie",
      designation: "Premium",
      content: "15% Off + Free Delivery",
      gradient: "from-[#C0C0C0] to-[#A3A3A3]",
    },
    {
      id: 3,
      name: "Bronze Taste",
      designation: "Member",
      content: "10% Off + Loyalty Points",
      gradient: "from-[#CD7F32] to-[#B57032]",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper>
      <ContentBox>
        <div className="mb-8 text-center">
          <h2 className="text-[32px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#F4CF47]">
            Loyalty Program
          </h2>
          <p className="text-white/70 text-sm">Rewards for Our Food Lovers</p>
        </div>

        <div className="relative h-48">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className={`absolute w-full h-[180px] rounded-[20px] p-6 text-white bg-gradient-to-br ${card.gradient}`}
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: index * -10,
                scale: 1 - index * 0.06,
                zIndex: cards.length - index,
              }}
            >
              <div className="flex justify-between items-center relative z-10">
                <div className="w-12 h-8 bg-white/10 backdrop-blur-sm rounded-md flex items-center justify-center">
                  <ChefHat size={16} className="text-white" />
                </div>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">PG</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 relative z-10">
                <p className="tracking-wider text-lg font-medium">
                  {card.content}
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <p className="text-sm opacity-90">{card.name}</p>
                  <span className="text-sm opacity-75">•</span>
                  <p className="text-sm opacity-90">{card.designation}</p>
                </div>
              </div>

              {/* Background shine effect */}
              <div className="absolute inset-0 overflow-hidden rounded-[20px]">
                <div className="absolute -inset-[200%] animate-[spin_7s_linear_infinite] opacity-30 [background:conic-gradient(from_0deg,transparent_0_340deg,white_360deg)]"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </ContentBox>

      <SectionTitle
        title="Reward Program"
        description="Join our loyalty program and earn points with every order. Enjoy exclusive discounts, free delivery, and special member-only offers."
        icon={CreditCard}
      />
    </SectionWrapper>
  );
};

// Reservation System Section
const ReservationSection = () => {
  return (
    <SectionWrapper>
      <ContentBox>
        <div className="flex items-center justify-between mb-6">
          <button className="text-[#D4AF37] hover:text-[#F4CF47] transition-colors font-medium text-sm">
            + New Reservation
          </button>
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-[#353535] border-2 border-[#1d1d1d] ring-1 ring-[#D4AF37]/20 flex items-center justify-center text-[10px] font-medium text-white/80"
              >
                {i === 1 ? "6pm" : i === 2 ? "7pm" : "8pm"}
              </div>
            ))}
            <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border-2 border-[#1d1d1d] ring-1 ring-[#D4AF37]/30 flex items-center justify-center text-[10px] font-medium text-[#D4AF37]">
              +5
            </div>
          </div>
        </div>
        <div className="h-52 relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-[10px] absolute inset-0 border border-dashed border-[#D4AF37]/30 bg-[#D4AF37]/5 p-5"
          />
          <motion.div
            whileHover={{ rotate: 2, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-[16px] absolute inset-0 border-[0.7px] border-[#D4AF37]/20 bg-[#202020] shadow-lg p-5"
          >
            <div>
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-black px-3 py-1 rounded text-xs font-medium">
                Confirmed
              </span>
              <h4 className="text-white text-sm font-semibold mt-3 mb-1">
                Family Dinner Reservation
              </h4>
              <p className="text-white/70 text-xs">
                Table for 6 people. Special request: Window seating with view.
                Anniversary celebration.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                  <span className="text-[10px] font-medium text-[#D4AF37]">
                    7pm
                  </span>
                </div>
                <div className="text-white/80 text-xs">Saturday, Nov 18</div>
              </div>
              <div className="flex items-center gap-4 text-white/50 text-sm mt-2">
                <span className="flex items-center gap-1.5 text-xs">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  Notes
                </span>
                <span className="flex items-center gap-1.5 text-xs">
                  <Utensils size={14} />
                  Table 8
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </ContentBox>

      <SectionTitle
        title="Easy Reservations"
        description="Book your table in advance for dine-in, special events, or large group gatherings. We'll ensure everything is ready for your arrival."
        icon={Calendar}
      />
    </SectionWrapper>
  );
};

// Main Features3 component
export default function Features3() {
  return (
    <section className="w-full bg-[#191919] py-20 md:py-28 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-0 w-full h-full">
          <Utensils className="absolute w-96 h-96 text-[#D4AF37] -right-20 top-10 -rotate-12" />
          <Star className="absolute w-64 h-64 text-[#D4AF37] left-10 bottom-10 rotate-12" />
          <ChefHat className="absolute w-32 h-32 text-[#D4AF37] left-1/3 top-1/3 -rotate-45" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            The <span className="text-[#D4AF37]">Complete</span> Experience
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            At Pankina Grill, we go beyond great food. Discover our premium
            services designed to make every dining experience exceptional and
            convenient.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CustomerServiceSection />
          <LoyaltySection />
          <ReservationSection />
        </div>
      </div>
    </section>
  );
}
