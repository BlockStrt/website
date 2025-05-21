"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type TypeWriterProps = {
  text: string;
  duration?: number;
  className?: string;
};


export default function TypeWriter({ text, duration = 10, className = "" }: TypeWriterProps) {
  // const [isViewed,setViewed] = usestate()
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));
  const displayText = useTransform(rounded, (v) => text.slice(0, v));
  const { ref, inView } = useInView({
    threshold: 0,
  });


  useEffect(() => {
    let controls: ReturnType<typeof animate> | null = null; //  TypeScript trick when using third-party libraries with complex types

    if ( inView) {
      controls = animate(count, text.length, {
        duration,
        ease: "linear",
      });
  
      return () => {
        if (controls) controls.stop();
      }
    }
  }, [inView, count,text.length, duration]);

  return (
    <p className={className} ref={ref}>
      <motion.span className=" text-[15px] md:text-[20px] text-center">{displayText}</motion.span>
    </p>
  );
}
