"use client";

import { useEffect } from "react";

export function ScrollLimiter() {
  useEffect(() => {
    let lastScrollTime = 0;
    const scrollDelay = 80; // milliseconds to delay between scrolls
    let isScrolling = false;
    let scrollRequest = 0;
    let scrollY = window.scrollY;

    const handleScroll = (e: WheelEvent) => {
      if (!isScrolling) {
        const now = Date.now();
        if (now - lastScrollTime < scrollDelay) {
          e.preventDefault();

          // Store the amount we wanted to scroll
          scrollRequest += e.deltaY;

          if (!isScrolling) {
            isScrolling = true;

            // Schedule the scroll
            setTimeout(() => {
              window.scrollTo({
                top: scrollY + scrollRequest,
                behavior: "auto",
              });

              scrollY = window.scrollY;
              scrollRequest = 0;
              isScrolling = false;
              lastScrollTime = Date.now();
            }, scrollDelay);
          }

          return false;
        }

        lastScrollTime = now;
      } else {
        e.preventDefault();
        scrollRequest += e.deltaY;
        return false;
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return null;
}
