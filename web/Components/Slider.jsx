import React from 'react';
import Image from "next/image";
import Video from 'next-video';
import { useKeenSlider } from "keen-slider/react";
import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';
import hopeVideo from '/videos/hopee.mp4';




function Slider() {
    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
          origin: "auto",
          perView: 0.5,
          spacing: 15,
        },
      })
  return (
    <div ref={sliderRef} className="keen-slider h-[50vh] text-6xl text-center">
    <div className="keen-slider__slide number-slide1 border-2 border-l-2">
       <Video src={hopeVideo} autoplay/>
    </div>
    <div className="keen-slider__slide number-slide2 border-2 border-l-2">2</div>
    <div className="keen-slider__slide number-slide3 border-2 border-l-2">3</div>
  </div>
  )
}

export default Slider