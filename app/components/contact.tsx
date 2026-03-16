"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import Socmed from "./socialmediacard";

export default function Contact() {
  const [state, handleSubmit] = useForm("xlgwpzed");

  if (state.succeeded) {
    return <Socmed />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Get In <span className="text-[#ff5c00]">Touch</span>
            </h2>
            <p className="text-lg font-bold opacity-90 max-w-md">
              I'm looking for new opportunities. Whether you have a question or
              planning a collaboration, my inbox is always open!
            </p>

            <div className="space-y-4 pt-4">
              <img
                src={"qatransparent.png"}
                alt="my-icon"
                className="w-84 h-auto"
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="brutalist-border brutalist-shadow bg-[var(--card-bg)] p-6 md:p-8 space-y-6"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="font-black uppercase text-sm">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="JUAN DELA CRUZ"
                className="w-full brutalist-border p-3 bg-transparent outline-none focus:bg-[#c47cfc] focus:text-black transition-colors font-bold placeholder:opacity-50"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="font-black uppercase text-sm">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="HELLO@WORLD.COM"
                className="w-full brutalist-border p-3 bg-transparent outline-none focus:bg-[#50a3fd] focus:text-black transition-colors font-bold placeholder:opacity-50"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="font-black uppercase text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="WHATS ON YOUR MIND?"
                className="w-full brutalist-border p-3 bg-transparent outline-none focus:bg-[#facc15] focus:text-black transition-colors font-bold placeholder:opacity-50 resize-none"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full brutalist-border border-4 border-[var(--foreground)] shadow-[8px_8px_0px_0px_var(--shadow)] bg-[#393B3C] font-black py-4 uppercase tracking-widest transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_var(--shadow)] cursor-pointer text-black"
            >
              {state.submitting ? "SENDING..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </motion.div>
  );
}
