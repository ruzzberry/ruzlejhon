import React from "react";
import { motion, Variants } from "framer-motion";

interface MyTimelineProps {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  direction: "left" | "right";
}

const cardVariants: Variants = {
  hidden: (direction: "left" | "right") => ({
    opacity: 0,
    x: direction === "left" ? -50 : 50,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const MyTimeline = ({
  title,
  subtitle,
  date,
  description,
  direction,
}: MyTimelineProps) => (
  <motion.div
    variants={cardVariants}
    custom={direction}
    className="brutalist-border brutalist-shadow bg-[var(--card-bg)] p-5 mb-8 relative"
  >
    <div className="absolute -top-4 -right-2 bg-[#facc15] brutalist-border px-2 py-1 text-xs font-black text-black">
      {date}
    </div>
    <h3 className="text-xl font-black uppercase tracking-tighter">{title}</h3>
    <h4 className="text-sm font-bold opacity-70 mb-3">{subtitle}</h4>
    <p className="text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export default function Timeline() {
  const experiences = [
    {
      title: "Developer",
      subtitle: "Ecological Energy Technologies Inc.",
      date: "2024 - 2025",
      description:
        "I streamline office operations by building web applications that automate everyday office tasks and developing automation scripts that support data analysts by reducing manual work, improving accuracy, and making workflows more efficient.",
    },
    {
      title: "Technical Staff",
      subtitle: "Zank POS Enterprises",
      date: "2023 - 2024",
      description:
        "I provide technical support for software, SQL Server, and hardware issues while working closely with clients to tailor system customizations to their needs. I also create test cases and perform both manual and automated testing to ensure every feature runs smoothly and reliably.",
    },
  ];

  const education = [
    {
      title: "Bachelor of Science in Information Technology",
      subtitle: "Bulacan State University",
      date: "2023",
      description: "",
    },
    {
      title: "Information and Communication Technology",
      subtitle: "AMA Computer Learning Center",
      date: "2019",
      description: "",
    },
  ];

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
    <div className="max-w-6xl mx-auto px-4 mt-20 grid md:grid-cols-2 gap-12 overflow-hidden">
      {/*MY EXPERIENCE COLUMN HERE*/}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div>
          <h2 className="border-4 border-[var(--foreground)] shadow-[8px_8px_0px_0px_var(--shadow)] bg-[#52a6fe] font-black uppercase text-xl md:text-3xl px-4 md:px-6 py-3 flex items-center gap-2 flex-1 sm:flex-none inline-block justify-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_var(--shadow)] transition-all text-black">
            Experience
          </h2>
          <div className="h-[5vh]" /> {/*FOR GAP PURPOSE*/}
        </div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <MyTimeline key={index} {...exp} direction="left" />
          ))}
        </div>
      </motion.div>

      {/*MY EDUCATION COLUMN HERE*/}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div>
          <h2 className="border-4 border-[var(--foreground)] shadow-[8px_8px_0px_0px_var(--shadow)] bg-[#c47cfc] font-black uppercase text-xl md:text-3xl px-4 md:px-6 py-3 flex items-center gap-2 flex-1 sm:flex-none inline-block justify-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_var(--shadow)] transition-all text-black">
            Education
          </h2>
          <div className="h-[5vh]" /> {/*FOR GAP PURPOSE*/}
        </div>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <MyTimeline key={index} {...edu} direction="right" />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
