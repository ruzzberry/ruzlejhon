"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// --- Types & Data ---
type TechItem = {
  name: string;
  icon: string; // Path to the icon in your public folder (e.g., "/icons/react.svg")
};

type ServiceType = "web" | "qa";

const STACKS: Record<
  ServiceType,
  { title: string; categories: { name: string; items: TechItem[] }[] }
> = {
  web: {
    title: "Web Development",
    categories: [
      {
        name: "Frontend",
        items: [
          { name: "React.js", icon: "/icons/react.svg" },
          { name: "Next.js", icon: "/icons/nextjs.svg" },
          { name: "TypeScript", icon: "/icons/typescript.svg" },
          { name: "JavaScript", icon: "/icons/javascript.svg" },
          { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
          { name: "SCSS", icon: "/icons/scss.svg" },
          { name: "Wordpress", icon: "/icons/wordpress.svg" },
          { name: "HTML", icon: "/icons/html.svg" },
          { name: "CSS", icon: "/icons/css.svg" },
        ],
      },
      {
        name: "Backend",
        items: [
          { name: "Golang", icon: "/icons/golang.svg" },
          { name: "Java", icon: "/icons/java.svg" },
          { name: "Python", icon: "/icons/python.svg" },
          { name: "PHP", icon: "/icons/php.svg" },
        ],
      },
      {
        name: "Database",
        items: [
          { name: "MySQL", icon: "/icons/mysql.svg" },
          { name: "SQL Server", icon: "/icons/sqlserver.svg" },
          { name: "Firebase", icon: "/icons/firebase.svg" },
        ],
      },
      {
        name: "Others",
        items: [
          { name: "Git", icon: "/icons/git.svg" },
          { name: "GitHub", icon: "/icons/github.svg" },
          { name: "BitBucket", icon: "/icons/bitbucket.svg" },
          { name: "Salesforce", icon: "/icons/saesforce.svg" },
          { name: "NPM", icon: "/icons/npm.svg" },
        ],
      },
    ],
  },
  qa: {
    title: "QA Engineering",
    categories: [
      {
        name: "Automation",
        items: [
          { name: "Selenium", icon: "/icons/selenium.svg" },
          { name: "Playwright", icon: "/icons/playwright.svg" },
          { name: "Appium", icon: "/icons/appium.svg" },
          { name: "Postman", icon: "/icons/postman.svg" },
        ],
      },
      {
        name: "API & Management Tools",
        items: [
          { name: "Postman", icon: "/icons/postman.svg" },
          { name: "Jira", icon: "/icons/jira.svg" },
        ],
      },
    ],
  },
};

// --- Sub-Component: Tech Chip (Image 3 Style) ---
const TechChip = ({ item }: { item: TechItem }) => (
  <div className="flex items-center gap-3 bg-[#1a1a1a] border-2 border-[#ff4d4d] rounded-full px-4 py-2 shadow-[4px_4px_0px_0px_rgba(255,77,77,0.3)] hover:translate-y-[-2px] transition-transform cursor-default">
    <div className="w-6 h-6 relative flex-shrink-0">
      <Image
        src={item.icon}
        alt={`${item.name} logo`}
        fill
        className="object-contain"
      />
    </div>
    <span className="text-white font-bold text-sm whitespace-nowrap tracking-tight">
      {item.name}
    </span>
  </div>
);

// --- Sub-Component: Modal ---
const StackModal = ({
  type,
  onClose,
}: {
  type: ServiceType;
  onClose: () => void;
}) => {
  const data = STACKS[type];
  const side = type === "web" ? -100 : 100;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ x: side, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: side, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="brutalist-border bg-[#fffce1] w-full max-w-2xl max-h-[85vh] overflow-y-auto p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-12 h-12 brutalist-border bg-[#ff4d4d] text-white flex items-center justify-center font-black text-2xl hover:bg-red-600 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          ✕
        </button>

        <div className="mb-10">
          <h2 className="text-3xl font-black uppercase italic tracking-tighter text-black leading-none">
            {data.title}
          </h2>
          {/*LINE SA IBABA NG TITLE <div className="h-2 w-24 bg-black mt-2"></div>*/}
        </div>

        <div className="space-y-10">
          {data.categories.map((cat) => (
            <div key={cat.name}>
              <h3 className="inline-block brutalist-border bg-[#facc15] px-4 py-1 font-black uppercase text-xs mb-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-4 font-normal">
                {cat.items.map((item) => (
                  <TechChip key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

// ... Rest of your TechStach and TechStachPreview components remain the same ...

// --- Main Component ---
const TechStach = ({
  title,
  description,
  label,
  imageSrc,
  side,
  onClick,
}: any) => {
  const variants = {
    hidden: { opacity: 0, x: side === "left" ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } as const;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className="brutalist-border brutalist-shadow bg-[var(--card-bg)] p-6 flex flex-col gap-4 w-full h-full relative group"
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-black uppercase tracking-tighter">
          {title}
        </h2>
        <p className="text-sm font-medium leading-tight opacity-80">
          {description}
        </p>
      </div>

      <div
        onClick={onClick}
        className="w-fit transition-all duration-100 active:translate-y-1 cursor-pointer"
      >
        <span className="brutalist-border bg-[#7ba7d4] text-black px-3 py-1 font-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all">
          {label}
        </span>
      </div>

      <div className="relative mt-auto h-[280px] w-full overflow-hidden">
        <motion.div
          className="w-full h-full"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain object-bottom"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function TechStachPreview() {
  const [selectedType, setSelectedType] = useState<ServiceType | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-4 py-20 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <TechStach
          side="left"
          title="Web Developer"
          description="I build modern web applications using React, Next.js, TypeScript, and responsive UI frameworks."
          label="View All"
          imageSrc="/devtransparent.png"
          onClick={() => setSelectedType("web")}
        />
        <TechStach
          side="right"
          title="QA Engineer"
          description="I ensure software quality through manual and automated testing using tools like Selenium, Playwright, and Postman."
          label="View All"
          imageSrc="/qatransparentt.png"
          onClick={() => setSelectedType("qa")}
        />
      </div>

      <AnimatePresence>
        {selectedType && (
          <StackModal
            type={selectedType}
            onClose={() => setSelectedType(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
