"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { InstagramEmbed } from "react-social-media-embed";
import Link from "next/link";
import { PawPrintIcon, Instagram, Loader2 } from "lucide-react";

const instagramPosts = [
  "https://www.instagram.com/p/CTmyyblLleM/",
  "https://www.instagram.com/p/CJaPb1DpS2x/",
  "https://www.instagram.com/p/CICgkiapuB0/",
  "https://www.instagram.com/p/CIKaF-_JBiK/",
];

// Instagram post placeholder component
const InstagramPlaceholder = ({
  isLoading = true,
}: {
  isLoading?: boolean;
}) => (
  <div className="w-[280px] h-[350px] bg-[#2A2A2A] rounded-lg overflow-hidden border border-[#3A3A3A] flex flex-col items-center justify-center">
    {isLoading ? (
      <div className="flex flex-col items-center">
        <Loader2 className="w-10 h-10 text-[#D4AF37] animate-spin mb-4" />
        <p className="text-white/70 text-sm">Loading post...</p>
      </div>
    ) : (
      <div className="flex flex-col items-center px-4 text-center">
        <PawPrintIcon className="w-10 h-10 text-[#D4AF37] mb-4" />
        <p className="text-white/70 text-sm mb-2">
          Unable to load Instagram post.
        </p>
        <Link
          href="https://www.instagram.com/princes.paw/?igsh=MThia2FnODM0NjVmZg%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E1306C] hover:underline text-sm"
        >
          View on Instagram
        </Link>
      </div>
    )}
  </div>
);

export default function InstagramFeed() {
  // Since the Instagram embed doesn't expose load/error handlers,
  // we'll use a simulated loading state with a timeout
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds should be enough for most embeds to load

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full bg-[#191919] py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <PawPrintIcon className="absolute w-96 h-96 text-[#D4AF37] right-20 top-10 rotate-12" />
        <PawPrintIcon className="absolute w-64 h-64 text-[#D4AF37] left-40 bottom-10 -rotate-15" />
        <PawPrintIcon className="absolute w-48 h-48 text-[#D4AF37] left-20 top-1/3 rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center mb-12">
          {/* Gold accent line */}
          <div className="w-24 h-[3px] bg-[#D4AF37] mb-8"></div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">
            Follow Our <span className="text-[#D4AF37]">Royal</span> Adventures
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto text-lg mb-8 text-center">
            Stay updated with the latest moments, events, and adorable snapshots
            from our Prince Paws family.
          </p>

          <Link
            href="https://www.instagram.com/princes.paw/?igsh=MThia2FnODM0NjVmZg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#E1306C] to-[#C13584] px-8 py-3 text-base font-medium text-white transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#E1306C]/30 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-[#E1306C] focus:ring-offset-2"
          >
            <Instagram className="w-5 h-5 mr-2" />
            <span>Follow @princes.paw</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform group-hover:translate-x-1"
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
            </motion.svg>
          </Link>
        </div>

        {/* Instagram Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="w-full flex justify-center"
            >
              <div className="relative">
                {isLoading && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <InstagramPlaceholder />
                  </div>
                )}
                <div
                  className={
                    isLoading
                      ? "opacity-0"
                      : "opacity-100 transition-opacity duration-500"
                  }
                >
                  <InstagramEmbed
                    url={post}
                    width={280}
                    captioned={false}
                    placeholderDisabled={true} // Disable the default placeholder since we're using our own
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
