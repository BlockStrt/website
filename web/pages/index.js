import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono} from "next/font/google";
import { useEffect, useState, useRef } from "react";
import { Box, ThemeWrapper } from 'retro-ui'
import { Button, Modal, Badge } from "arcadeui";
import Github from "../Components/gitHub";
import Twitter from "../Components/Twitter"
import {motion} from "motion/react";
import Linkedin from "../Components/Linked";
import Slider from "../Components/Slider";
import Loading from "./loading";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // 2 second delay
    return () => clearTimeout(timer);
    
  }, []);

  if (isLoading) {
    return <Loading />;
  }






  return (
        <div className={`pt-[15vh] grid bg-amber-100 text-black border-2 overflow-x-hidden grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
    <header className="md:w-full w-[80%] p-2 mx-auto fixed top-0 h-[15%] flex   ">
      <div className="p-4 w-full sm:w-full mx-auto ">
      <ThemeWrapper >
          <Box type='error' className=' md:w-[50%] text-center  '>{'503:Joshua levy'}</Box>
      </ThemeWrapper>
      </div>
      <div className="flex  md:space-x-4 justify-end p-4  w-full">
          <a
          href="https://github.com/BlockStrt"
          target="_blank"
          rel="noopener noreferrer"
          >
          <Github/>
          </a>
          <a
          href="https://x.com/blckstrtr"
          target="_blank"
          rel="noopener noreferrer"
          >
          <Twitter/>
          </a>
          <a
          href="https://www.linkedin.com/in/joshlevylinked/"
          target="_blank"
          rel="noopener noreferrer"
          >
          <Linkedin/>
          </a>

      </div>
      </header>

      {/* Main body */}

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start ">
        {/* create a carousel  */}

       <div className=" ">
        <Slider/>

       </div>
       
      </main>


         {/* Footer */}
      <footer className="w-full row-start-3 flex flex-wrap  justify-between gap-6 sm:gap-4">
      
      <div className="flex w-full space-x-50 ">
      <Button 
      onClick={() => setIsOpen(prev => !prev)}
      className='border-none special-gothic'
      >
        More Info
      </Button>
  
      <Modal
        isOpen={isOpen}
   
        className='!flex bg-amber-200 !items-center special-gothic  !fixed !inset-0 !z-50 border-pixel-blue'
        title="Technology Stack"
        showCloseButton={false} 
      >
        <motion.div
         initial={{ opacity: 0, x: -50 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: -50 }}
         transition={{ duration: 0.5 }}
        >
    {/* Exit Button */}
    <button
      onClick={() => setIsOpen(false)}
      className="  text-white special-gothic hover:text-black text-[40px] font-bold"
      aria-label="Close"
    >
      close
    </button>

        <div className="bg-amber-50 p-8 rounded-lg shadow-lg text-black special-gothic text-[20px] ">
          <h1>Technology stack</h1>
          <li>Typescript</li>
          <li>React</li>
          <li>Javascript</li>         
          <li>Nodejs</li>
          <li>Modern Css & preprocessors</li>
          <li>mySQL</li>
          <li>Command Line</li>
          <li>Git</li>
          <li>Github</li>
          </div>
          </motion.div>
      </Modal>
      <Link href="">
      <Button className='border-none special-gothic'
      >
        Resume
      </Button>
      </Link>
      </div>


      
      </footer>
    </div>
  );
}
