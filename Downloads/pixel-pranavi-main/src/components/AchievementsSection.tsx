import SectionHeading from "./SectionHeading";
import { Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const achievements = [
  {
    title: "Oracle APEX Hackathon",
    description: "AdroIT Technologies (Naan Mudhalvan Program)",
  },
  {
    title: "Game-a-thon'25",
    description: "ArrowDev Club, SRM Institute of Science and Technology",
  },
];

const AchievementCard = ({ a, index }: { a: typeof achievements[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 150}ms` }}
      className={`flex-1 flex items-start gap-4 rounded-xl bg-card border border-border p-6 card-glow transition-all duration-600 hover:border-primary/40 hover:-translate-y-1 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
    >
      <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 transition-all duration-500 ${isVisible ? "rotate-0" : "-rotate-45"}`}>
        <Trophy size={20} />
      </div>
      <div>
        <h4 className="font-semibold text-foreground">{a.title}</h4>
        <p className="text-sm text-muted-foreground">{a.description}</p>
      </div>
    </div>
  );
};

const AchievementsSection = () => (
  <section id="achievements" className="py-20 px-6">
    <div className="container mx-auto">
      <SectionHeading title="Achievements" />
      <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-3xl mx-auto">
        {achievements.map((a, i) => (
          <AchievementCard key={a.title} a={a} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
