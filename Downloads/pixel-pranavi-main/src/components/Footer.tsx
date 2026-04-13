import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart } from "lucide-react";

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <footer ref={ref} className={`border-t border-border py-8 px-6 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
      <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
        © {new Date().getFullYear()} Pranavi NKB.
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
