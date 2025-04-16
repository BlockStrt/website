

import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import Loading from "./loading";
import Posts from "./posts";
import BasicCard from "../Components/Cards.jsx";
import Github from "../Components/gitHub";
import Twitter from "../Components/twitter"
import Linkedin from "../Components/Linked";
import Slider from "../Components/Slider";

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
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000); // 2 second delay
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }



  return (
    <div className={`${geistSans.className} ${geistMono.className} pt-[15vh] grid bg-amber-100 text-black border-2 grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
      <header className="w-screen p-2 mx-auto fixed top-0 h-[15%] flex justify-between ">
      <BasicCard/>

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

       <div className="p-6">
        <Slider/>
       </div>
       
      </main>


         {/* Footer */}
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <p>EASY COUNTERPARTS TO ADD SYFII</p>
        
      </footer>
    </div>
  );
}
