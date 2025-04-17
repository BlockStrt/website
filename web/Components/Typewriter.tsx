"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import React, {useEffect, useState} from 'react'

type AnimatedTextProps = {
  texts: string[];        // array of strings to animate one by one
  duration?: number;      // animation duration per text
  loop?: boolean;         // whether to loop the text list
  className?: string;
  };

export default function TypeWriter({texts, duration = 5, loop = true, className=" "} : AnimatedTextProps) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [animationCompleted, setAnimationCompleted] = useState(false);
    const [index, setIndex] = useState(0);
    const currentText = texts[index];
    const displayText = useTransform(rounded, (latest) => currentText.slice(0, latest));

    useEffect(() => {
      const controls = animate(count, texts.length, {
        type: "tween",
        duration,
        ease: "linear",
        onUpdate: (latest) => {
          if (latest === texts.length) {
            setAnimationCompleted(true);
          }
        },
      });
      return controls.stop;
    }, [index]);
      

  return (
    <p className={`${animationCompleted ? "animation-completed" : ""} ${className}`}>
    <motion.span>{displayText}</motion.span>
  </p>
  )
}

