

import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import Loading from "./loading";
import Posts from "./posts";
import BasicCard from "../Components/Cards.jsx";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  // const posts = getPosts();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000); // 2 second delay
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid bg-amber-100 text-black border-2 grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <header className="w-screen p-2 mx-auto  fixed top-0 h-[15%] ">
      <BasicCard/>



       </header>
       <p>EASY COUNTERPARTS TO ADD SYFII</p>


      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <p>EASY COUNTERPARTS TO ADD SYFII</p>
       
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <p>EASY COUNTERPARTS TO ADD SYFII</p>
        
      </footer>
    </div>
  );
}
