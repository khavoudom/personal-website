export default function SkillCard({
  category,
  skills,
  index,
}: {
  category: string;
  skills: string[];
  index: number;
}) {
  const rotations = ["-rotate-1", "rotate-1", "rotate-2", "-rotate-0.5"];

  return (
    <div
      className={`${rotations[index % rotations.length]} bg-cardboard/30 p-6 border border-ink/5 relative coffee-stain`}
    >
      <p className="font-display text-lg text-ink mb-4">{category}</p>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-xs font-body tracking-wide bg-aged-paper text-ink/80 border border-ink/5"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
