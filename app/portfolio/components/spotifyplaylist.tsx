"use client";

import { motion } from "framer-motion";

export default function SpotifyPlaylist() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-2xl mx-auto mt-20"
    >
      <div className="brutalist-border brutalist-shadow bg-[var(--card-bg)] p-2">
        <div className="bg-black text-white text-xs font-bold px-2 py-1 mb-2 inline-block uppercase">
          My current on repeat
        </div>
        <iframe
          style={{ borderRadius: "0px" }} // Square corners for brutalist look
          src="https://open.spotify.com/embed/playlist/09bZJleIg1LswxxNT4EPBO?utm_source=generator&theme=0" // Replace with your actual ID
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </motion.div>
  );
}
