"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Instagram } from "lucide-react";

interface NavbarProps {
  navItems: {
    name: string;
    link: string;
  }[];
  visible: boolean;
}

export const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Menu",
      link: "#menu",
    },
    {
      name: "Reviews",
      link: "#testimonials",
    },
    {
      name: "FAQ",
      link: "#faq",
    },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full fixed top-2 inset-x-0 z-50"
    >
      <DesktopNav visible={visible} navItems={navItems} />
      <MobileNav visible={visible} navItems={navItems} />
    </motion.div>
  );
};

const DesktopNav = ({ navItems, visible }: NavbarProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHoveredIndex(null)}
      animate={{
        width: visible ? "70%" : "90%",
        backgroundColor: visible
          ? "rgba(25, 25, 25, 0.95)"
          : "rgba(25, 25, 25, 0.5)",
        backdropFilter: visible ? "blur(10px)" : "blur(5px)",
        y: visible ? 4 : 0,
        boxShadow: visible
          ? "0 10px 30px -10px rgba(0,0,0,0.3)"
          : "0 0 0 transparent",
      }}
      initial={{
        width: "90%",
        scale: 0.95,
        opacity: 0,
      }}
      whileInView={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className={cn(
        "hidden lg:flex flex-row self-center items-center justify-between py-3 mx-auto px-8 rounded-full relative z-[100] border border-[#D4AF37]/20"
      )}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Pankina Grill Logo"
            className="h-12 w-auto"
            width={100}
            height={40}
          />
        </Link>
      </motion.div>

      <motion.div
        className="lg:flex flex-row flex-1 items-center justify-center space-x-4 text-sm"
        animate={{
          scale: 1,
          justifyContent: visible ? "flex-end" : "center",
        }}
      >
        {navItems.map((navItem, idx) => (
          <motion.div
            key={`nav-item-${idx}`}
            onHoverStart={() => setHoveredIndex(idx)}
            className="relative"
          >
            <Link
              className="text-white/80 hover:text-[#D4AF37] relative px-3 py-1.5 transition-colors"
              href={navItem.link}
            >
              <span className="relative z-10">{navItem.name}</span>
              {hoveredIndex === idx && (
                <motion.div
                  layoutId="menu-hover"
                  className="absolute inset-0 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    background:
                      "linear-gradient(145deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)",
                    boxShadow: "0 4px 15px rgba(212,175,55,0.1)",
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.05,
                  }}
                />
              )}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.2,
            },
          }}
          exit={{
            opacity: 0,
            x: 20,
            transition: {
              duration: 0.2,
            },
          }}
        >
          <div className="flex items-center gap-3">
            <a
              href="tel:+‭18184574095‬"
              className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C9A227] px-5 py-2 text-sm font-medium text-black transition-all duration-300 ease-in-out hover:shadow hover:shadow-[#D4AF37]/30 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:ring-offset-1"
            >
              <span>Order Now</span>
            </a>
            <Link
              href="https://www.instagram.com/pankinagrill?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-full bg-gradient-to-r from-[#E1306C] to-[#C13584] px-3 py-1.5 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#E1306C]/20 hover:translate-y-[-1px]"
            >
              <Instagram className="w-4 h-4 mr-1" />
              <span>@pankinagrill</span>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const MobileNav = ({ navItems, visible }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.div
        animate={{
          backdropFilter: "blur(16px)",
          background: visible
            ? "rgba(25, 25, 25, 0.95)"
            : "rgba(25, 25, 25, 0.7)",
          width: visible ? "85%" : "90%",
          y: visible ? 4 : 0,
          borderRadius: open ? "24px" : "full",
          padding: "12px 20px",
          boxShadow: visible
            ? "0 10px 30px -10px rgba(0,0,0,0.3)"
            : "0 0 0 transparent",
          border: "1px solid rgba(212,175,55,0.2)",
        }}
        initial={{
          width: "85%",
          scale: 0.95,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={cn(
          "flex relative flex-col lg:hidden w-full justify-between items-center max-w-[calc(100vw-2rem)] mx-auto z-50"
        )}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Pankina Grill Logo"
              className="h-10 w-auto"
              width={100}
              height={40}
            />
          </Link>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            {open ? (
              <IconX className="text-white/90" onClick={() => setOpen(!open)} />
            ) : (
              <IconMenu2
                className="text-white/90"
                onClick={() => setOpen(!open)}
              />
            )}
          </motion.div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                height: "auto",
                y: 0,
              }}
              exit={{
                opacity: 0,
                height: 0,
                y: -10,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              className="flex rounded-2xl absolute top-16 backdrop-blur-xl bg-background/95 inset-x-0 z-50 flex-col items-start justify-start gap-4 w-full px-6 py-6 shadow-lg border border-[#D4AF37]/20"
            >
              {navItems.map(
                (navItem: { link: string; name: string }, idx: number) => (
                  <motion.div
                    key={`link=${idx}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: idx * 0.05,
                      },
                    }}
                    whileHover={{ x: 5, color: "#D4AF37" }}
                  >
                    <Link
                      href={navItem.link}
                      onClick={() => setOpen(false)}
                      className="relative text-white/80 hover:text-[#D4AF37] transition-colors"
                    >
                      <motion.span className="block">
                        {navItem.name}
                      </motion.span>
                    </Link>
                  </motion.div>
                )
              )}

              <div className="w-full h-px bg-[#D4AF37]/20 my-2"></div>

              <div className="flex flex-col w-full gap-3 mt-2">
                <a
                  href="tel:+‭18184574095‬"
                  onClick={() => setOpen(false)}
                  className="w-full relative inline-flex items-center justify-center rounded-full bg-transparent border border-[#D4AF37] px-5 py-2 text-sm font-medium text-white transition-all duration-300 ease-in-out hover:bg-[#D4AF37]/10"
                >
                  <span>Call Now</span>
                </a>
                <a
                  href="tel:+‭18184574095‬"
                  onClick={() => setOpen(false)}
                  className="w-full relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C9A227] px-5 py-2 text-sm font-medium text-black transition-all duration-300 ease-in-out"
                >
                  <span>Order Now</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
