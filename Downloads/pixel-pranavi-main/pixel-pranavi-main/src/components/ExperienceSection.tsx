import SectionHeading from "./SectionHeading";
import { Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <SectionHeading title="Experience" />
        <div ref={ref} className="max-w-3xl mx-auto">
          <div className={`relative pl-8 border-l-2 border-primary/30 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center transition-transform duration-500 delay-300 ${isVisible ? "scale-100" : "scale-0"}`}>
              <Briefcase size={12} className="text-primary-foreground" />
            </div>
            <div className="rounded-xl bg-card border border-border p-6 card-glow transition-all duration-300 hover:border-primary/40 hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="font-semibold text-foreground text-lg">MERN Stack Developer Intern</h3>
                <span className="text-xs text-primary font-mono mt-1 sm:mt-0">Nov 2025 – Dec 2025</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Hitasoft Technologies — Madurai, India
              </p>
              <ul className="space-y-2 text-sm text-secondary-foreground">
                {[
                  "Built full-stack web applications using the MERN stack",
                  "Developed RESTful APIs and optimized MongoDB queries",
                  "Created responsive UI with React.js and Bootstrap",
                  "Performed debugging, testing, and performance optimization",
                ].map((item, i) => (
                  <li
                    key={item}
                    style={{ transitionDelay: `${400 + i * 100}ms` }}
                    className={`flex items-start gap-2 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
