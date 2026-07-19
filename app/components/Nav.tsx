export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-paper/85 backdrop-blur-sm border-b border-ink/5">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 h-14 flex items-center justify-between">
        <a href="#hero" className="font-display text-lg text-blue-pen">
          Khav Oudom
        </a>
        <div className="flex items-center gap-6 text-sm font-body tracking-wide">
          <a
            href="#about"
            className="text-ink-muted hover:text-blue-pen transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-ink-muted hover:text-blue-pen transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-ink-muted hover:text-blue-pen transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-ink-muted hover:text-blue-pen transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
