import React from "react";

export default function Socmed() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 text-center">
      <div className="bg-[#1a1a1a] p-12 md:p-16 inline-block shadow-[10px_10px_0px_0px_#9a86fd]">
        <h2 className="text-5xl md:text-6xl font-black uppercase mb-6 text-[#ffde03] tracking-tighter">
          Message Sent!
        </h2>

        <p className="text-white font-mono text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          I'll get back to you as soon as possible. <br />
          You can also reach me through my other official channels.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.com/users/608176201697329168"
            className="flex items-center gap-2 bg-[#393B3C] text-white px-6 py-3 font-bold uppercase hover:translate-y-[-5px] transition-all"
          >
            <img src={"discord.webp"} className="w-5 h-5" alt="Discord" />
            <span>DISCORD</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:ruzletayaowork@gmail.com"
            className="flex items-center gap-2 bg-[#393B3C] text-white px-6 py-3 font-bold uppercase hover:translate-y-[-5px] transition-all"
          >
            <img src={"email.svg"} className="w-5 h-5" alt="Gmail" />
            <span>EMAIL</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/ruzle.tayao/"
            className="flex items-center gap-2 bg-[#393B3C] text-white px-6 py-3 font-bold uppercase hover:translate-y-[-5px] transition-all"
          >
            <img src={"fb.svg"} className="w-5 h-5" alt="Facebook" />
            <span>FACEBOOK</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/tayaoruzlejhonl/"
            className="flex items-center gap-2 bg-[#393B3C] text-white px-6 py-3 font-bold uppercase hover:translate-y-[-5px] transition-all"
          >
            <img src={"linkedin.svg"} className="w-5 h-5" alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
