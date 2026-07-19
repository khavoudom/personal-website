import type { Project } from "@/app/lib/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const rotations = ["-rotate-0.5", "rotate-1", "-rotate-1"];

  return (
    <article
      className={`${rotations[index % rotations.length]} bg-aged-paper/50 p-6 sm:p-8 border border-ink/5 hover:border-blue-pen/20 transition-colors relative coffee-stain`}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-xl font-display text-ink">{project.name}</h3>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 font-mono text-xs text-blue-pen hover:underline"
          aria-label={`${project.name} on GitHub`}
        >
          GitHub &rarr;
        </a>
      </div>
      <p className="text-ink-muted text-sm leading-relaxed mb-4 font-body">
        {project.description}
      </p>
      <p className="text-xs font-body text-ink-muted mb-3 tracking-wide">
        <span className="text-red-marker font-display text-sm">Role:</span>{" "}
        {project.role}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-0.5 text-[11px] font-mono text-ink-muted bg-paper border border-ink/5"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
