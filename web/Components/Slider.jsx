import React ,{useEffect, useState} from 'react';
import Image from "next/image";
import Link from 'next/link';
import { useKeenSlider } from "keen-slider/react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import KeenSlider from 'keen-slider';
import TypeWriter from './Typewriter';



function AutoplayPlugin(slider) {
  let timeout;

  function next() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (!slider.track?.details) return; // This makes sure slider.next() is only called when the slider is fully built
      slider.next();
    }, 5000); // 2 seconds
  }

  slider.on("created", () => {
    next();
  });
  slider.on("dragStarted", () => {
    clearTimeout(timeout);
  });
  slider.on("animationEnded", () => {
    next();
  });
  slider.on("updated", () => {
    next();
  });
}



export default function SliderPost() {

    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        loop: true,
        slides: {
          origin: 0,
          perView: 1,
          spacing: 15,
        },
      },[AutoplayPlugin])
    
      


  return (
    <div ref={sliderRef} className="keen-slider flex  md:h-[50vh]   text-center">
    <div className="keen-slider__slide number-slide1 grid md:flex ">
       {/* <Video src={hopeVideo} autoplay/> */}
       <Link href="https://www.hammerandhope.org">
       <Image 
       src="/hammer.jpg" 
       alt="example"
       width={800} 
       height={400} 
       priority
       className='object-cover w-full max-w-[90vw] md:max-w-[800px] h-auto rounded-xl shadow'
       sizes="(max-width: 768px) 90vw, 800px"
        />
         </Link>
        <div className=' bottom-0 roboto text-black p-4 w-[500px] text-center'>
      <TypeWriter className='' text="Collaborated closely with the team to design and enhance the user interface, focusing on both functionality and visual consistency. Integrated dynamic HomePageData from our CMS, allowing the UI to update automatically through effective state management. Improved responsiveness by implementing SASS modules and global styles, avoiding arbitrary percentage values to maintain a consistent layout across devices." duration={5} />
       
        </div>
       
    </div>
    

    <div ref={sliderRef} className="keen-slider__slide number-slide2 flex">
    <div className="grid md:flex "> 
      <Link href="https://store.jugrnaut.com/">
    <Image 
       src="/jug.jpeg" 
       alt="example"
       width={800} 
       height={400} 
       priority
       className='object-cover w-full max-w-[90vw] md:max-w-[800px] h-auto rounded-xl shadow'
       sizes="(max-width: 768px) 90vw, 800px"
        />
        </Link>
        <div className='bottom-0 roboto text-black p-4 w-[500px] text-center'>
        <TypeWriter text="Chicago-based clothing brand — Scaled organic web traffic to over 10K+ monthly visits through SEO-focused content and streamlined performance. Improved site UI/UX by implementing WordPress webhooks, enabling near real-time server-to-client data updates while reducing unnecessary API calls. Minimal use of PHP for maintainability and speed." duration={5} />
        </div>
        </div>
        </div>




    <div ref={sliderRef} className="keen-slider__slide number-slide2 flex">
    <div className="grid md:flex ">
      <Link href="https://bucolic-longma-4d65a0.netlify.app/">
    <Image 
       src="/movie.jpeg" 
       alt="example"
       width={800} 
       height={400} 
       priority
       className='object-cover w-full max-w-[90vw] md:max-w-[800px] h-auto rounded-xl shadow'
       sizes="(max-width: 768px) 90vw, 800px"
        />
        </Link>
        <div className='bottom-0 roboto text-black p-4 w-full md:w-[500px] text-center'>
        <TypeWriter text="A responsive, front-end movie search application using the OMDb API to fetch and display real-time movie data." duration={5} />
        </div>
        </div>
        </div>
    

  </div>
  )
}




