"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import DiscordStatus from "./components/discordstatus";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  Moon,
  Sun,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  const [imgIndex, setImgIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const images = ["/main_pic.jpg", "/pic_2.PNG", "/pic1.jpg"];
  const stacks = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Node.js",
    "Python",
    "Selenium",
    "Cypress",
    "PostgreSQL",
  ];

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const bentoCard = `
    bg-white dark:bg-white 
    border-4 border-black dark:border-black 
    shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
    p-6 transition-all hover:-translate-x-1 hover:-translate-y-1 
    hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
  `;
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#f5f4f4] dark:bg-[#f5f4f4] z-[9999]">
        <motion.img
          src="/eatchipstransparent.png"
          alt="Loading..."
          className="w-48 h-48"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
          }}
        />
        <p className="text-2xl font-black uppercase animate-pulse mt-4">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f4f4] dark:bg-[#f5f4f4] p-4 md:p-8 font-sans text-black dark:text-white animate-fade-in transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
        {/*HERO SECTION*/}
        <div
          className={`${bentoCard} md:col-span-8 !bg-[#FFC567] dark:!bg-[#FFC567]`}
        >
          <h1 className="text-4xl md:text-6xl text-[#fcfef6] font-black uppercase leading-tight dark:text-[#fcfef6]">
            Ruzle Jhon Tayao
          </h1>
          <p className="text-xl text-[#fcfef6] font-bold mt-2 dark:text-[#fcfef6] uppercase">
            Web Developer & QA Engineer
          </p>
        </div>

        {/*FOR IMAGE DISPLAY*/}
        <div
          className={`${bentoCard} md:col-span-2 relative overflow-hidden group cursor-pointer !bg-[#f5f4f4]`}
          onClick={() => setImgIndex((prev) => (prev + 1) % images.length)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={imgIndex}
              src={images[imgIndex]}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              className="h-full w-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/*FOR DISCORD STATUS COMPONENT*/}
        <div
          role="button"
          tabIndex={0}
          onClick={() =>
            window.open(
              "https://discord.com/users/608176201697329168",
              "_blank",
            )
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") window.open("...", "_blank");
          }}
          className={`${bentoCard} md:col-span-2 !bg-[#FB7DA8] dark:!bg-[#FB7DA8] text-white flex items-center justify-center cursor-pointer`}
        >
          <DiscordStatus />
        </div>

        {/*ABOUT ME*/}
        <div className={`${bentoCard} md:col-span-4 !bg-[#FD5A46]`}>
          <h3 className="text-2xl font-black mb-2 text-[#fcfef6] uppercase">
            About Me
          </h3>
          <p className="text-[#fcfef6] font-medium leading-relaxed">
            I specialize in Web Development and Quality Assurance Engineer. I am
            passionate about building reliable, and user-friendly apps. Outside
            of tech, I love shopping, skincare, and café hopping, always seeking
            new inspiration.
          </p>
        </div>

        {/*FOR WEB DEV*/}
        <Link
          href="/portfolio"
          className={`${bentoCard} md:col-span-4 !bg-[#058CD7] group flex flex-col justify-between min-h-[200px]`}
        >
          <div className="flex justify-between items-start">
            <div className="bg-black text-[#fcfef6] p-2 rounded-lg mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <ArrowRight
              className="group-hover:translate-x-2 transition-transform"
              size={32}
            />
          </div>
          <h3 className="text-3xl text-[#fcfef6] font-black uppercase">
            Web <br /> Developer
          </h3>
          <p className="font-bold text-[#fcfef6] text-sm mt-4 uppercase tracking-wider">
            Building Scalable Web Apps & Creative UI
          </p>
        </Link>

        {/*FOR QA ENG*/}
        <Link
          href="/portfolio"
          className={`${bentoCard} md:col-span-4 !bg-[#552CB7] dark:!bg-[#552CB7] group flex flex-col justify-between min-h-[200px]`}
        >
          <div className="flex justify-between items-start">
            <div className="bg-black text-[#fcfef6] p-2 rounded-lg mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <ArrowRight
              className="group-hover:translate-x-2 transition-transform"
              size={32}
            />
          </div>
          <h3 className="text-3xl text-[#fcfef6] font-black uppercase">
            QA <br /> Engineer
          </h3>
          <p className="font-bold text-[#fcfef6] text-sm mt-4 uppercase tracking-wider">
            Automation, Manual Testing & Quality Assurance
          </p>
        </Link>

        {/*FOR SOCIALS*/}
        <div
          className={`${bentoCard} md:col-span-3 flex flex-wrap gap-4 items-center justify-center !bg-[#FFC8DD]`}
        >
          <a
            href="https://www.facebook.com/ruzle.tayao/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook
              size={32}
              strokeWidth={2.5}
              className="cursor-pointer hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/tayaoruzlejhonl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin
              size={32}
              strokeWidth={2.5}
              className="cursor-pointer hover:scale-110 transition-transform"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:ruzletayaowork@gmail.com"
          >
            <Mail
              size={32}
              strokeWidth={2.5}
              className="cursor-pointer hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="https://github.com/ruzzberry"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github
              size={32}
              strokeWidth={2.5}
              className="cursor-pointer hover:scale-110 transition-transform"
            />
          </a>
        </div>

        {/*FOR MARQUEE*/}
        <div
          className={`${bentoCard} md:col-span-9 overflow-hidden whitespace-nowrap !bg-[#00995E] dark:!bg-[#00995E] text-[#fcfef6] dark:text-[#fcfef6]`}
        >
          <motion.div
            className="flex gap-8 items-center"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...stacks, ...stacks].map((stack, i) => (
              <span
                key={i}
                className="text-2xl font-black uppercase tracking-tighter"
              >
                {stack}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
