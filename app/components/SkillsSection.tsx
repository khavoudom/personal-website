import SectionHeading from "./SectionHeading";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
  const categories = [
    { category: "Languages", skills: ["Python", "TypeScript", "PHP"] },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Vue", "Nuxt", "Lynx JS"],
    },
    { category: "Database", skills: ["PostgreSQL", "MySQL", "MongoDB"] },
    {
      category: "Tools/OS",
      skills: ["Linux", "Git", "Figma", "Photoshop", "After Effects"],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <SectionHeading number="02" title="Skills" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {categories.map((cat, i) => (
            <SkillCard
              key={cat.category}
              category={cat.category}
              skills={cat.skills}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
