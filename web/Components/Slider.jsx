import React ,{useEffect, useState} from 'react';
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import 'keen-slider/keen-slider.min.css';
import TypeWriter from './typewriter';
import KeenSlider from 'keen-slider';





function Slider() {

    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
          origin: "auto",
          perView: 1,
          spacing: 15,
        },
      })


  return (
    <div ref={sliderRef} className="keen-slider w-full md:h-[50vh] sm:h-[40vh] text-6xl text-center">
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
        <p className='p-10'>
        <TypeWriter 
          text="Built and styled the homepage for a Black politics & culture magazine.
          Worked with the team on UI design, connected live issue data from our CMS, and improved responsiveness using SASS modules.
          Integrated Next.js, Sanity, and Vercel to streamline updates and make content editing easy for the client."
          duration={6}
          className="text-xl font-semibold text-[#3F3D56] font-red-hat"
        />
        </p>
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
        <p className='p-10'>
        <TypeWriter 
          text="Led UI for a Connecticut-based clothing brand.
          Boosted organic traffic to 20K+ users.
          Designed an accessible Shopify experience, including a custom lookbook carousel to showcase collections."
          duration={6}
          className="text-xl font-semibold text-[#3F3D56] font-red-hat"
        />
        </p>
        </div>
    

  </div>
  )
}

export default Slider