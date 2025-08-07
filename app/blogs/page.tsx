"use client";
import React, { useEffect, useState } from "react";

export default function PracPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const arr = ["apple", "banana", "orange"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % arr.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [arr.length]);
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="rotate-45 animate-ping">{arr[currentIndex]}</div>
    </div>
  );
}
