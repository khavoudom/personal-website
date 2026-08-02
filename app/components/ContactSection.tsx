import SectionHeading from "./SectionHeading";

const links = [
  {
    label: "Email",
    href: "mailto:khavoudom.123@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/khavoudom",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/oudom-khav-b817bb2a7/",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <SectionHeading number="04" title="Contact" />
        <div className="space-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="block group"
            >
              <span className="font-mono text-[11px] text-blue-pen tracking-[0.15em] uppercase group-hover:underline">
                {link.label}
              </span>
            </a>
          ))}
        </div>
        <div className="mt-10">
          <a
            href="mailto:khavoudom.123@gmail.com"
            className="inline-block px-8 py-3 bg-blue-pen text-paper text-sm font-body tracking-wide hover:bg-blue-pen/90 transition-colors shadow-sm"
          >
            Send me a message &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
