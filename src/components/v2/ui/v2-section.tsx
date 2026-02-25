import { cn } from "@/lib/utils";

interface V2SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "void" | "surface" | "surface-alt";
}

export function V2Section({
  children,
  className,
  id,
  variant = "void",
}: V2SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        variant === "void" && "bg-v2-void",
        variant === "surface" && "bg-v2-surface",
        variant === "surface-alt" && "bg-v2-surface-alt",
        className
      )}
    >
      {children}
    </section>
  );
}
