"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface Project {
  title: string;
  company?: string;
  description: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Leave Management Application",
    company: "EcoEnergy",
    description:
      "Streamlined internal leave request and approval processes through automated email notifications and structured hierarchical approval workflows.",
    image: "/leavemgmt1.png",
  },
  {
    title: "Leave Monitoring App",
    company: "Ecoenergy",
    description:
      "Employee Leave Monitoring Web App that enables employees to track their filed leave requests in real time, including approval status and current level within the organizational approval hierarchy.",
    image: "/leavetracking.png",
  },
  {
    title: "Attendance & Monitoring",
    company: "EcoEnergy",
    description:
      "A web-based attendance management appl with location-based time tracking and automated Discord notifications for real-time monitoring.",
    image: "/attendance1.jpg",
  },
  {
    title: "SaasConsole",
    company: "Hooli Software Inc.",
    description:
      "A fast and easy SaaS management platform designed to efficiently manage groups of users. Developed to simplify user administration and streamline SaaS operations.",
    image: "/saasconsole.webp",
    link: "https://app.saasconsole.com/signin",
  },
  {
    title: "eHataw",
    company: "Capstone Project",
    description:
      "Mobile fitness application designed to make Zumba training accessible anytime, anywhere. It offers comprehensive instructional content, BMI tracking, and personalized dietary guidance to help users achieve their health and wellness goals effectively.",
    image: "/ehataw.jpg",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const closeModal = useCallback(() => setCurrentIndex(null), []);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) =>
      prev !== null ? (prev + 1) % projects.length : null,
    );
  }, []);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) =>
      prev !== null ? (prev - 1 + projects.length) % projects.length : null,
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, closeModal, nextImage, prevImage]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="max-w-6xl mx-auto px-4 mt-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="brutalist-border brutalist-shadow bg-[var(--card-bg)] flex flex-col h-full group"
              >
                <div
                  className="relative aspect-video w-full border-b-3 border-[var(--foreground)] overflow-hidden cursor-zoom-in"
                  onClick={() => setCurrentIndex(index)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-[var(--background)] text-[var(--foreground)] brutalist-border px-2 py-1 font-black text-xs uppercase">
                      View Full Size
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  {project.company && (
                    <span className="text-xs font-black uppercase bg-[#facc15] text-black px-2 py-1 w-fit mb-2 border-2 border-black">
                      {project.company}
                    </span>
                  )}
                  <h3 className="text-2xl font-black uppercase mb-3 tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-sm opacity-90 leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto brutalist-border bg-[var(--foreground)] text-[var(--background)] font-black text-center py-2 uppercase text-sm transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/*GALLERY MODAL CODE BELOW*/}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 z-[110] bg-[#ff4646] text-white brutalist-border px-4 py-2 font-black text-xl hover:scale-110 transition-transform"
            onClick={closeModal}
          >
            X
          </button>

          <button
            className="absolute left-4 z-[110] bg-[var(--background)] text-[var(--foreground)] brutalist-border p-4 font-black text-2xl hover:bg-[#facc15] transition-colors hidden md:block"
            onClick={prevImage}
          >
            ←
          </button>

          <div
            className="relative brutalist-border bg-[var(--card-bg)] p-2 max-w-5xl w-full max-h-[85vh] shadow-[20px_20px_0px_0px_var(--shadow)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] md:h-[70vh] bg-zinc-900 overflow-hidden">
              <Image
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-4 border-t-3 border-[var(--foreground)] bg-[var(--card-bg)] flex justify-between items-center">
              <div>
                <p className="font-black uppercase text-lg">
                  {projects[currentIndex].title}
                </p>
                <p className="text-xs opacity-70 italic">
                  Project {currentIndex + 1} of {projects.length}
                </p>
              </div>
              <div className="flex gap-2 md:hidden">
                <button
                  onClick={prevImage}
                  className="brutalist-border p-2 bg-[var(--background)] font-bold"
                >
                  PREV
                </button>
                <button
                  onClick={nextImage}
                  className="brutalist-border p-2 bg-[var(--background)] font-bold"
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>

          <button
            className="absolute right-4 z-[110] bg-[var(--background)] text-[var(--foreground)] brutalist-border p-4 font-black text-2xl hover:bg-[#facc15] transition-colors hidden md:block"
            onClick={nextImage}
          >
            →
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
