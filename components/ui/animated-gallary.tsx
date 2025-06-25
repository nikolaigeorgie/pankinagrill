"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PawPrintIcon } from "lucide-react";

type GalleryItem = {
  title: string;
  description: string;
  src: string;
  alt?: string;
};

export const AnimatedGallary = ({
  items,
  autoplay = false,
}: {
  items: GalleryItem[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + items.length) % items.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="relative mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12 bg-[#191919] rounded-3xl">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 overflow-hidden rounded-3xl">
        <PawPrintIcon className="absolute w-80 h-80 text-[#D4AF37] right-10 top-0 rotate-12" />
        <PawPrintIcon className="absolute w-64 h-64 text-[#D4AF37] left-10 bottom-0 -rotate-15" />
        <PawPrintIcon className="absolute w-40 h-40 text-[#D4AF37] left-1/3 top-1/3 rotate-45" />
      </div>

      {/* Gold accent line */}
      <div className="w-16 h-[2px] bg-[#D4AF37] mb-8 mx-auto relative z-10"></div>

      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2 z-10">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {items.map((item, index) => (
                <motion.div
                  key={`${item.src}-${index}`}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 40 : items.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div className="relative h-full w-full rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-lg shadow-black/20">
                    <Image
                      src={item.src}
                      alt={item.alt || item.title}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full object-cover object-center"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-transparent to-transparent opacity-50"></div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-[#D4AF37]">
              {items[active].title}
            </h3>
            <motion.p className="mt-8 text-lg text-white/90">
              {items?.[active]?.description?.split?.(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(212,175,55,0.2)",
              }}
              onClick={handlePrev}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#252525] transition-all duration-300"
            >
              <IconArrowLeft className="h-5 w-5 text-[#D4AF37] transition-transform duration-300 group-hover/button:-translate-x-1" />
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(212,175,55,0.2)",
              }}
              onClick={handleNext}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#252525] transition-all duration-300"
            >
              <IconArrowRight className="h-5 w-5 text-[#D4AF37] transition-transform duration-300 group-hover/button:translate-x-1" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};
