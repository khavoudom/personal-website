import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/app/lib/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <SectionHeading number="03" title="Projects" />
        {projects.length > 0 ? (
          <div className="space-y-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </div>
        ) : (
          <p className="text-ink-muted italic font-body">
            Projects coming soon.
          </p>
        )}
      </div>
    </section>
  );
}
