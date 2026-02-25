import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "cream" | "charcoal";
}

export function Section({
  children,
  className,
  id,
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        variant === "cream" && "bg-cream",
        variant === "charcoal" && "bg-charcoal text-warm-white",
        className
      )}
    >
      {children}
    </section>
  );
}
