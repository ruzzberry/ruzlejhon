"use client";

import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t-4 border-[var(--foreground)] bg-[var(--card-bg)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4 text-center md:text-left">
            <p className="font-bold text-sm max-w-[250px] opacity-80">
              There are millions of possibilities for the future! But it’s up to
              you to choose which becomes reality.
            </p>
            <p className="font-bold text-sm max-w-[250px] opacity-80">
              - Garnet (Steven Universe)
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                name: "Discord",
                url: "https://discord.com/users/608176201697329168",
              },
              {
                name: "Facebook",
                url: "https://www.facebook.com/ruzle.tayao/",
              },
              {
                name: "Github",
                url: "https://github.com/ruzzberry",
              },
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/tayaoruzlejhonl/",
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-border bg-[var(--background)] px-4 py-2 font-black uppercase text-xs hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_var(--shadow)] transition-all text-[var(--foreground)]"
              >
                {social.name}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="brutalist-border brutalist-shadow bg-[#50a3fd] p-3 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--shadow)] transition-all group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 group-hover:-translate-y-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="Path 5 10l7-7m0 0l7 7m-7-7v18"
              />
              <line
                x1="12"
                y1="19"
                x2="12"
                y2="5"
                stroke="currentColor"
                strokeWidth="3"
              />
              <polyline
                points="5 12 12 5 19 12"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </button>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-[var(--foreground)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-black uppercase opacity-60">
          <p>© {currentYear} - Ruzle Tayao</p>
          <p>Handcrafted with caffeine, and Next.js</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
