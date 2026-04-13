import SectionHeading from "./SectionHeading";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const links = [
  { icon: <Mail size={20} />, label: "pranavibalaji656@gmail.com", href: "mailto:pranavibalaji656@gmail.com" },
  { icon: <Phone size={20} />, label: "+91 9043224166", href: "tel:+919043224166" },
  { icon: <Github size={20} />, label: "github.com/pranavibalaji", href: "https://github.com/pranavibalaji" },
  { icon: <Linkedin size={20} />, label: "linkedin.com/in/pranavi-nkb", href: "https://linkedin.com/in/pranavi-nkb" },
];

const ContactLink = ({ l, index }: { l: typeof links[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <a
        href={l.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 rounded-xl bg-card border border-border p-5 hover:border-primary/40 card-glow transition-all duration-300 group hover:-translate-y-1"
      >
        <span className="text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
          {l.icon}
        </span>
        <span className="text-sm text-secondary-foreground group-hover:text-foreground transition-colors">
          {l.label}
        </span>
      </a>
    </div>
  );
};

const ContactSection = () => (
  <section id="contact" className="py-20 px-6">
    <div className="container mx-auto">
      <SectionHeading title="Get In Touch" subtitle="Feel free to reach out!" />
      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {links.map((l, i) => (
          <ContactLink key={l.label} l={l} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
