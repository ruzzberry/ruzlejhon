import Link from "next/link";

export default function Home() {
  return (
    <div
      className="animate-fade-in flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-white lg:flex-row overflow-hidden"
      style={{
        backgroundColor: "#f5f4f4",
        backgroundImage: "url('/AnimatedShapes.svg')",
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
    >
      <main className="flex flex-1 flex-col items-center justify-center px-8 py-12 text-center lg:items-start lg:pl-55 lg:text-center">
        <div className="flex flex-col space-y-8 max-w-lg">
          <div className="w-full transition-all hover:scale-105 hover:brightness-110">
            <img
              src="/launchimage2cut.png"
              alt="Ruzle's Portfolio"
              draggable="false"
              className="select-none pointer-events-none w-full h-auto "
            />
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-[#2D4A9D] dark:text-blue-400">
            Software Engineer and QA Engineer in one
          </h2>

          <div className="flex flex-wrap justify-center gap-4 ">
            <Link
              href="/portfolio"
              className="px-10 py-3 bg-[#A1C4FD] text-white rounded-full font-bold tracking-wide transition-all hover:scale-105 hover:brightness-110 shadow-md"
            >
              VIEW PORTFOLIO
            </Link>

            <a
              href="/TAYAO, RUZLE JHON L. RESUME.pdf"
              download
              className="flex items-center gap-2 px-8 py-3 bg-[#1A367F] text-white rounded-full font-bold tracking-wide transition-all hover:scale-105 hover:brightness-110 shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </main>

      <div className="group relative flex flex-1 items-end justify-end self-end lg:h-screen lg:w-1/2">
        <img
          src="/casualblondetransparent.png"
          alt="Ruzle"
          draggable="false"
          className="w-full max-w-md lg:max-w-none lg:h-[95vh] lg:w-auto object-contain object-right-bottom select-none group-hover:hidden"
        />

        <img
          src="/covertransparent.png"
          alt="Ruzle Hover"
          draggable="false"
          className="hidden group-hover:block absolute bottom-0 right-0 w-[115%] max-w-none lg:h-[95vh] lg:w-auto object-contain object-right-bottom select-none scale-110 origin-bottom-right"
        />
      </div>
    </div>
  );
}
