import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <SectionHeading number="01" title="About" />
        <div className="max-w-2xl space-y-5 text-ink-muted text-base sm:text-lg leading-[1.8] font-body">
          <p>
            I&apos;m a CS (Software Development) student at the University of
            Cambodia who enjoys building web applications that solve real
            problems. My work spans full-stack development — from interactive
            frontends with React and Vue to APIs and databases on the backend.
          </p>
          <p>
            I&apos;m drawn to projects where I can own the full stack, make
            deliberate design decisions, and write code that&apos;s both
            functional and maintainable. Right now I&apos;m exploring real-time
            data systems and developer tooling.
          </p>
        </div>
      </div>
    </section>
  );
}
