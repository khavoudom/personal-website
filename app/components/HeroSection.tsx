import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="py-24 sm:py-36">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10 sm:gap-14">
          <div className="relative shrink-0 -rotate-2 group/image">
            <div className="tape-corner">
              <div className="w-36 h-36 sm:w-44 sm:h-44 overflow-hidden border-2 border-ink/10 bg-aged-paper shadow-sm cursor-pointer">
                <Image
                  src="/IMG_6509.png"
                  alt="Portrait of Khav Oudom, software developer"
                  width={176}
                  height={176}
                  priority
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Hover overlay popup */}
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 opacity-0 pointer-events-none transition-all duration-300 ease-out group-hover/image:opacity-100 group-hover/image:pointer-events-auto">
              <div className="shadow-2xl border-2 border-ink/10 bg-aged-paper p-2 flex items-center justify-center scale-90 group-hover/image:scale-100 transition-transform duration-300 ease-out"
                   style={{ maxHeight: '80vh', maxWidth: '90vw' }}>
                <img
                  src="/IMG_6509.png"
                  alt="Khav Oudom"
                  className="object-contain"
                  style={{ maxHeight: 'calc(80vh - 1rem)', maxWidth: 'calc(90vw - 1rem)' }}
                />
              </div>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-ink leading-tight scribble-underline">
              Khav Oudom
            </h1>
            <p className="mt-3 font-mono text-xs sm:text-sm text-blue-pen tracking-[0.15em] uppercase">
              k.oudom &middot; ខាវ
            </p>
            <p className="mt-4 text-base sm:text-lg text-ink-muted leading-relaxed max-w-lg font-body">
              CS Student &amp; Software Developer building web apps with React,
              Vue, and Python.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4 justify-center sm:justify-start">
              <a
                href="#projects"
                className="px-7 py-2.5 bg-blue-pen text-paper text-sm font-body tracking-wide hover:bg-blue-pen/90 transition-colors shadow-sm"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-7 py-2.5 border border-blue-pen/30 text-ink text-sm font-body tracking-wide hover:bg-blue-pen/5 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
