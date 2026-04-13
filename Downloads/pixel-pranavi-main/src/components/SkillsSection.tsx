import SectionHeading from "./SectionHeading";
import { Code2, Database, Globe, Settings, Terminal, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  {
    icon: <Globe size={24} />,
    title: "Web Development",
    skills: ["HTML5", "CSS3", "Bootstrap", "MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    icon: <Terminal size={24} />,
    title: "Programming Languages",
    skills: ["Java", "Python", "C", "JavaScript (ES6+)"],
  },
  {
    icon: <Code2 size={24} />,
    title: "API Development",
    skills: ["RESTful APIs", "Authentication", "Validation"],
  },
  {
    icon: <Database size={24} />,
    title: "Databases",
    skills: ["SQL", "MongoDB (Beginner)"],
  },
  {
    icon: <Settings size={24} />,
    title: "Tools & Platforms",
    skills: ["VS Code", "Git / GitHub", "Postman", "MongoDB Atlas"],
  },
  {
    icon: <Shield size={24} />,
    title: "Software Engineering",
    skills: ["Modularization", "Backend Optimization", "Role-Based Access Control"],
  },
];

const SkillCard = ({ cat, index }: { cat: typeof categories[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`rounded-xl bg-card border border-border p-6 hover:border-primary/40 card-glow transition-all duration-500 group ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
    >
      <div className="text-primary mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
        {cat.icon}
      </div>
      <h3 className="font-semibold text-foreground mb-3">{cat.title}</h3>
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((s) => (
          <span
            key={s}
            className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => (
  <section id="skills" className="py-20 px-6">
    <div className="container mx-auto">
      <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <SkillCard key={cat.title} cat={cat} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
