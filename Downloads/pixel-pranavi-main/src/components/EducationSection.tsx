import SectionHeading from "./SectionHeading";
import { GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const education = [
  {
    degree: "B.Sc. Computer Science (Data Science & Analytics)",
    school: "Manikam Ramaswami College of Arts and Science",
    period: "2024 – 2027",
  },
  {
    degree: "Higher Secondary School Certificate (ISC)",
    school: "VMJ Higher Secondary School, Madurai",
    period: "2010 – 2024",
  },
];

const EducationCard = ({ e, index }: { e: typeof education[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 150}ms` }}
      className={`flex items-start gap-4 rounded-xl bg-card border border-border p-6 card-glow transition-all duration-600 hover:border-primary/40 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary transition-transform duration-500 ${isVisible ? "rotate-0 scale-100" : "rotate-12 scale-0"}`}>
        <GraduationCap size={20} />
      </div>
      <div>
        <h3 className="font-semibold text-foreground">{e.degree}</h3>
        <p className="text-sm text-muted-foreground">{e.school}</p>
        <span className="text-xs text-primary font-mono">{e.period}</span>
      </div>
    </div>
  );
};

const EducationSection = () => (
  <section id="education" className="py-20 px-6">
    <div className="container mx-auto">
      <SectionHeading title="Education" />
      <div className="max-w-3xl mx-auto space-y-6">
        {education.map((e, i) => (
          <EducationCard key={e.degree} e={e} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
