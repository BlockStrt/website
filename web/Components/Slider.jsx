import React ,{useEffect, useState} from 'react';
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import KeenSlider from 'keen-slider';
import TypeWriter from './Typewriter';





export default function SliderPost() {

    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
          origin: "auto",
          perView: 1,
          spacing: 15,
        },
      })
    
      


  return (
    <div ref={sliderRef} className="keen-slider w-full flex md:h-[50vh] sm:h-[40vh] text-6xl text-center">
    <div className="keen-slider__slide number-slide1 flex">
       {/* <Video src={hopeVideo} autoplay/> */}
       <Image 
       src="/hammer.jpg" 
       alt="example"
       width={800} 
       height={400} 
       priority
       className='object-cover'
        />
        <div className='p-3 pb-3'>
      <TypeWriter text="Welcome to Easy Counterparts to Add Syfii" duration={5} />
       
        </div>
    </div>
    <div className="keen-slider__slide number-slide2 flex">
    <Image 
       src="/jug.jpeg" 
       alt="example"
       width={800} 
       height={400} 
       priority
       className='object-cover'
        />
        <div className='p-2'>
        <TypeWriter text="Welcome to Easy Counterparts to Add Syfii" duration={5} />
        </div>
        </div>
    

  </div>
  )
}




