import Nav from "@/app/components/Nav";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import SkillsSection from "@/app/components/SkillsSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";

const siteUrl = "https://khavoudom.com";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Khav Oudom",
  alternateName: ["k.oudom", "Khav udom", "ខាវ", "ខាវ ឧដុម"],
  url: siteUrl,
  image: `${siteUrl}/IMG_6509.png`,
  jobTitle: "Software Developer",
  description:
    "Khav Oudom is a Computer Science student at the University of Cambodia and a software developer building web apps with React, Vue, Next.js, and Python.",
  email: "mailto:khavoudom.123@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "KH",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Cambodia",
  },
  knowsAbout: [
    "React",
    "Vue",
    "Next.js",
    "Nuxt",
    "TypeScript",
    "Python",
    "PHP",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Full-stack web development",
  ],
  sameAs: [
    "https://github.com/khavoudom",
    "https://www.linkedin.com/in/oudom-khav-b817bb2a7/",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Khav Oudom",
  alternateName: ["k.oudom", "Khav udom", "ខាវ"],
  url: siteUrl,
  description:
    "Portfolio of Khav Oudom — CS student & software developer from Cambodia.",
  inLanguage: "en",
  author: {
    "@type": "Person",
    name: "Khav Oudom",
    url: siteUrl,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Nav />
      <main className="flex-1">
        <HeroSection />
        <hr className="section-divider" />
        <AboutSection />
        <hr className="section-divider" />
        <SkillsSection />
        <hr className="section-divider" />
        <ProjectsSection />
        <hr className="section-divider" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
