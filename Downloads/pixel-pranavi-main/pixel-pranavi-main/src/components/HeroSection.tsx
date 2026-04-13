import { Download, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTypewriter } from "@/hooks/useTypewriter";

const HeroSection = () => {
  const { ref: photoRef, isVisible: photoVisible } = useScrollAnimation(0.1);
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation(0.1);
  const { displayed: typedName, isDone } = useTypewriter("Pranavi NKB", 100, 600);

  return (
    <section id="about" className="min-h-screen flex items-center pt-20 pb-16 px-6 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[100px] animate-pulse" />

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Photo */}
        <div ref={photoRef} className={`flex-shrink-0 transition-all duration-1000 ${photoVisible ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-90 -translate-x-12"}`}>
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-accent opacity-60 blur-md group-hover:opacity-80 transition-opacity duration-500 animate-glow-pulse" />
            <img
              src={profilePhoto}
              alt="Pranavi NKB"
              width={512}
              height={512}
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-2 border-primary/40 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Text */}
        <div ref={textRef} className={`text-center md:text-left max-w-2xl transition-all duration-1000 delay-200 ${textVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
          <p className={`text-primary font-mono text-sm mb-2 tracking-widest uppercase transition-all duration-700 delay-300 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 gradient-text glow-text">
            {typedName}
            <span className={`inline-block w-[3px] h-[0.8em] bg-primary ml-1 align-middle ${isDone ? "animate-pulse" : "animate-[blink_0.7s_step-end_infinite]"}`} />
          </h1>
          <p className={`text-lg md:text-xl text-secondary-foreground mb-6 transition-all duration-700 delay-[1.5s] ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Computer Science Student &amp; Aspiring Software Developer
          </p>
          <p className={`text-muted-foreground leading-relaxed mb-8 transition-all duration-700 delay-[1.8s] ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Focused Computer Science student with strong foundations in Java, Python, C, and SQL.
            Developed secure applications using HTML, CSS, JavaScript, and modern frameworks.
            Experienced in API development, authentication, and database integration with tools
            such as Git, Postman, and MongoDB Atlas.
          </p>

          <div className={`flex flex-wrap gap-4 justify-center md:justify-start transition-all duration-700 delay-[2.1s] ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_20px_hsl(174_72%_50%/0.4)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95"
            >
              <Download size={18} /> Download Resume
            </a>
            <div className="flex items-center gap-3">
              <SocialIcon href="https://github.com/pranavibalaji" icon={<Github size={20} />} delay={0} />
              <SocialIcon href="https://linkedin.com/in/pranavi-nkb" icon={<Linkedin size={20} />} delay={100} />
              <SocialIcon href="mailto:pranavibalaji656@gmail.com" icon={<Mail size={20} />} delay={200} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground font-mono">scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-[scroll-dot_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, icon, delay }: { href: string; icon: React.ReactNode; delay: number }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{ animationDelay: `${2.3 + delay / 1000}s` }}
    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 hover:rotate-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_hsl(174_72%_50%/0.3)] active:scale-95"
  >
    {icon}
  </a>
);

export default HeroSection;
