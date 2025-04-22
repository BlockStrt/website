import Image from "next/image";
import { Geist, Geist_Mono} from "next/font/google";
import { useEffect, useState } from "react";
import { Box, ThemeWrapper } from 'retro-ui'
import { Button, Modal, Badge } from "arcadeui";
import Github from "../Components/gitHub";
import Twitter from "../Components/twitter"
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

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // 2 second delay
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }



  return (
        <div className={`pt-[15vh] grid bg-amber-100 text-black border-2 overflow-x-hidden grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
    <header className="w-screen p-2 mx-auto fixed top-0 h-[15%] flex justify-between ">
      <div className="p-4 w-full ">
      <ThemeWrapper >
          <Box type='error' className='w-[15%] text-center '>{'503:Joshua levy'}</Box>
      </ThemeWrapper>
      </div>
      <div className="flex space-x-4 ">
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

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* create a carousel  */}

       <div className="">
        <Slider/>

       </div>
       
      </main>


         {/* Footer */}
      <footer className="w-full row-start-3 gap-[24px] flex-wrap items-center justify-between ">
      
      <div>
      
      <Button 
      onClick={() => setIsOpen(true)}
      className='border-none special-gothic'
      >
        More Info
      </Button>
  
      <Modal
        isOpen={isOpen}
        className='!flex !items-center !justify-center !fixed !inset-0 !z-50 border-pixel-blue'
        size='lg'
        
      >
    {/* Exit Button */}
    <button
      onClick={() => setIsOpen(false)}
      className="  text-white hover:text-black text-xl font-bold"
      aria-label="Close"
    >
      ×
    </button>

        <div className="bg-green-300 p-8 rounded-lg shadow-lg text-black special-gothic text-[20px] ">
          <h1>Technology stack</h1>
          <li>Javascript</li>
          <li>React</li>
          <li>Modern Css & preprocessors</li>
          <li>Command Line</li>
          <li>Nodejs</li>
          <li>mySQL</li>
          <li>Git</li>
          <li>Github</li>
          </div>
      </Modal>
      </div>
      </footer>
    </div>
  );
}
