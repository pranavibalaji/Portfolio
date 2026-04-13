import SectionHeading from "./SectionHeading";
import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Virtual Healthcare System",
    tag: "Full-Stack",
    description:
      "A MERN stack application enabling patient-doctor interaction with registration, login, appointment scheduling, RESTful APIs, secure MongoDB data storage, authentication, and validation.",
    tech: ["React", "Node.js", "Express", "MongoDB", "REST API"],
  },
  {
    title: "College Attendance Management System",
    tag: "Frontend",
    description:
      "Responsive interface built with HTML, CSS, and JavaScript featuring role-based views, form validation, dashboards, and modular design for managing student attendance.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const ProjectCard = ({ p, index }: { p: typeof projects[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 150}ms` }}
      className={`rounded-xl bg-card border border-border p-6 card-glow transition-all duration-600 hover:border-primary/40 group flex flex-col hover:-translate-y-2 ${isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"}`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-mono">
          {p.tag}
        </span>
        <ExternalLink
          size={16}
          className="text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all duration-300"
        />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{p.title}</h3>
      <p className="text-sm text-muted-foreground mb-4 flex-1">{p.description}</p>
      <div className="flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="py-20 px-6">
    <div className="container mx-auto">
      <SectionHeading title="Projects" subtitle="Some things I've built" />
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
