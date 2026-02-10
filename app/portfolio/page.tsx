"use client"; // Required in Next.js App Router when using hooks

import Image from "next/image";
import ThemeToggle from "./components/ThemeToggle";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import SpotifyPlaylist from "./components/spotifyplaylist";
import TechStacks from "./components/techstacks";
import TechStachPreview from "./components/techstack";

export default function Home() {
  const [text] = useTypewriter({
    words: ["QA Engineer", "Web Developer", "Software Engineer"],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 5000,
  });

  return (
    <main
      className="min-h-screen p-6 md:pt-12 md:pb-24 md:px-24 relative animate-fade-in overflow-x-hidden"
      style={{
        backgroundImage: "url('/Sprinkle.svg')",
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
    >
      {/* Header Area */}
      <div className="flex justify-between items-start mb-12 md:mb-20">
        <div className="brutalist-border brutalist-shadow bg-[var(--card-bg)] text-[var(--foreground)] px-4 py-2 font-black uppercase tracking-tighter text-lg md:text-xl">
          Ruzle's Portfolio
        </div>
        <ThemeToggle />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-10 md:gap-12 items-center">
        {/* Profile Card */}
        <div className="w-full md:col-span-4 flex justify-center md:justify-start">
          <div className="brutalist-border brutalist-shadow bg-[var(--card-bg)] text-[var(--foreground)] p-3 md:p-4 w-full max-w-[320px] relative">
            {/*
              <div className="absolute top-2 right-2 border-2 border-black dark:border-white rounded-full p-1 bg-white dark:bg-zinc-800 z-10">
                <span className="text-xs">IF EVER MAISIPAN KO GAWIN NAPAPALITAN PICURE</span>
              </div>
            */}
            <div className="group relative aspect-square w-full overflow-hidden">
              {/* LIGHT MODE IMAGES */}
              <div style={{ display: "var(--light-only)" }}>
                <Image
                  src="/formalpic.jpg"
                  alt="Avatar"
                  fill
                  className="bg-zinc-800 object-cover"
                />
                <Image
                  src="/formalshyy.jpg"
                  alt="Avatar Hover"
                  fill
                  className="absolute inset-0 object-cover opacity-0 group-hover:opacity-100"
                />
              </div>

              {/* DARK MODE IMAGES */}
              <div style={{ display: "var(--dark-only)" }}>
                <Image
                  src="/sleeping1.png" // Change this to your dark mode filename
                  alt="Avatar Dark"
                  fill
                  className="bg-zinc-800 object-cover"
                />
                <Image
                  src="/wokeup1.png" // Change this to your dark mode hover filename
                  alt="Avatar Hover Dark"
                  fill
                  className="absolute inset-0 object-cover opacity-0 group-hover:opacity-100"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center font-bold">
              <span className="text-xl md:text-2xl">@rzljhn</span>
              <div className="flex items-center gap-2 border-2 border-black dark:border-white px-2 py-1 rounded-full text-[10px] md:text-xs uppercase">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Online
              </div>
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <div className="w-full md:col-span-8 space-y-6 text-left">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
            <span className="text-grey-600">{text}</span>
            <Cursor cursorStyle="|" />
          </h1>
          <div className="max-w-xl space-y-4">
            <p className="text-lg opacity-90 leading-relaxed">
              I’m a full-stack web developer and QA engineer who enjoys building
              robust web solutions and making sure they actually work Through a
              sophisticated testing. From front-end to back-end, and from
              testing to deployment, I focus on clean code, solid functionality,
              and great user experience.{" "}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-4">
            <div className="flex flex-wrap gap-3 w-full sm:w-auto">
              <a
                href="#"
                className="brutalist-border brutalist-shadow bg-[black] text-white px-4 py-2 md:py-3 flex items-center gap-2 flex-1 sm:flex-none justify-center 
             transition-all duration-100 hover:translate-x-[-2px] hover:translate-y-[-5px] hover:shadow-none"
              >
                <span className="text-xs md:text-sm">SEND EMAIL</span>
              </a>

              <a
                href="/TAYAO, RUZLE JHON L. RESUME.pdf"
                download="TAYAO_RUZLE_JHON_L_RESUME.pdf"
                className="brutalist-border brutalist-shadow bg-[#facc15] text-black px-4 py-2 md:py-3 flex items-center gap-2 flex-1 sm:flex-none justify-center 
             transition-all duration-100 hover:translate-x-[-2px] hover:translate-y-[-5px] hover:shadow-none"
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[16vh]" />
      <div className="max-w-6xl mx-auto px-4">
        <a className="brutalist-border brutalist-shadow bg-[#facc15] font-bold text-black px-4 py-2 md:py-3 flex items-center gap-2 flex-1 sm:flex-none justify-center">
          MY TECHNICAL STACKS
        </a>
        <TechStacks />
      </div>
      <section className="pb-24">
        <SpotifyPlaylist />
      </section>
    </main>
  );
}
