"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import React, { useEffect, useState } from "react";

type TypeWriterProps = {
  text: string;
  duration?: number;
  className?: string;
};

export default function TypeWriter({ text, duration = 5, className = "" }: TypeWriterProps) {
  // const [isViewed,setViewed] = usestate()
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));
  const displayText = useTransform(rounded, (v) => text.slice(0, v));

  useEffect(() => {
    if (text) {
      const controls = animate(count, text.length, {
        duration,
        ease: "linear",
      });
  
      return () => controls.stop();
    }
  }, [text, count, duration]);

  return (
    <p className={className}>
      <motion.span className=" text-[10px] md:text-[20px] text-center">{displayText}</motion.span>
    </p>
  );
}
