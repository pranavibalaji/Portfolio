import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`mb-12 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
