import React from "react";
import { motion } from "framer-motion"; //

const TechStacks = () => {
  const webStacks = {
    Frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Sass",
      "SCSS",
      "JavaScript",
      "Wordpress",
    ],
    Backend: ["Golang", "Java", "Python"],
    Database: ["MySQL", "SQL Server", "Firebase"],
    Tools: [
      "Git",
      "GitHub",
      "BitBucket",
      "Salesforce",
      "NPM",
      "VS Code",
      "JetBrains IntelliJ",
      "PyCharm",
      "Discord",
      "Teams",
      "Jira",
      "Trello",
    ],
  };

  const qaStacks = {
    Automation: [
      "Selenium",
      "Playwright",
      "Appium",
      "WinAppDriver",
      "PyAutoGUI",
    ],
    API: ["Postman"],
    Management: ["Jira"],
    Methodologies: [
      "Manual Testing",
      "Automated Testing",
      "API Testing",
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "E2E Testing",
    ],
  };

  const StackBox = ({
    title,
    items,
    colorClass,
  }: {
    title: string;
    items: string[];
    colorClass: string;
  }) => (
    <div
      className={`mb-6 p-4 brutalist-border bg-[var(--card-bg)] brutalist-shadow`}
    >
      <h4
        className={`inline-block px-2 mb-3 font-black uppercase text-sm ${colorClass} border-2 border-black`}
      >
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-sm font-bold border border-black/20 dark:border-white/20 px-2 py-1 bg-black/5 dark:bg-white/5"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section className="mt-10 mb-12 overflow-hidden">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 brutalist-border overflow-hidden">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-6 md:p-10 border-b-4 md:border-b-0 md:border-r-4 border-black dark:border-white bg-[#facc15]/10"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 tracking-tighter">
            Web <br /> Development
          </h2>
          <StackBox
            title="Frontend"
            items={webStacks.Frontend}
            colorClass="bg-blue-400 text-black"
          />
          <StackBox
            title="Backend"
            items={webStacks.Backend}
            colorClass="bg-green-400 text-black"
          />
          <StackBox
            title="Database"
            items={webStacks.Database}
            colorClass="bg-orange-400 text-black"
          />
          <StackBox
            title="Others"
            items={webStacks.Tools}
            colorClass="bg-[#fe7ac1] text-black"
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-6 md:p-10 bg-white/5"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 tracking-tighter text-right md:text-left">
            QA <br /> Engineering
          </h2>
          <StackBox
            title="Automation"
            items={qaStacks.Automation}
            colorClass="bg-purple-400 text-black"
          />
          <StackBox
            title="API & Management"
            items={[...qaStacks.API, ...qaStacks.Management]}
            colorClass="bg-red-400 text-black"
          />
          <StackBox
            title="Testing Methods"
            items={qaStacks.Methodologies}
            colorClass="bg-cyan-400 text-black"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TechStacks;
