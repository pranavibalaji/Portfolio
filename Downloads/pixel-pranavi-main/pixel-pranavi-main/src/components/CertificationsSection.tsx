import SectionHeading from "./SectionHeading";
import { Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const certs = [
  { title: "Python for Data Science", issuer: "NPTEL" },
  { title: "Introduction to Machine Learning", issuer: "NPTEL" },
  { title: "AI & ML using Python", issuer: "NPTEL+" },
  { title: "Real-Time Operating Systems", issuer: "NPTEL" },
  { title: "English Language for Competitive Exams (Elite Silver)", issuer: "NPTEL" },
  { title: "Java Programming Fundamentals", issuer: "Infosys Springboard" },
  { title: "Excel (Beginner & Advanced)", issuer: "Infosys Springboard" },
];

const CertCard = ({ c, index }: { c: typeof certs[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`flex items-start gap-3 rounded-xl bg-card border border-border p-5 card-glow transition-all duration-500 hover:border-primary/40 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <Award size={18} className="text-primary mt-0.5 flex-shrink-0 group-hover:animate-float" />
      <div>
        <h4 className="text-sm font-semibold text-foreground">{c.title}</h4>
        <p className="text-xs text-muted-foreground">{c.issuer}</p>
      </div>
    </div>
  );
};

const CertificationsSection = () => (
  <section id="certifications" className="py-20 px-6">
    <div className="container mx-auto">
      <SectionHeading title="Certifications" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {certs.map((c, i) => (
          <CertCard key={c.title} c={c} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
