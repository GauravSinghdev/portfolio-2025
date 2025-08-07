"use client";
import { AnimatePresence } from "motion/react";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Designation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    "Software Engineer",
    "Software Developer",
    "Web Developer",
    "Gamer",
  ];

  // Effect to cycle through items
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [items.length]);

  // Animation variants for sliding effect
  const variants = {
    enter: {
      y: 10,
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -20,
      opacity: 0,
    },
  };
  return (
    <div className="h-[15%] italic px-4 py-0.8 sm:py-1 text-gray-500 dark:text-gray-400 overflow-hidden tracking-[2px] border-b baseBorder sm:tracking-[5px] animate-pulse">
      <AnimatePresence mode="wait">
        <motion.li
          key={currentIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="list-none"
        >
          {items[currentIndex]}
        </motion.li>
      </AnimatePresence>
    </div>
  );
}
