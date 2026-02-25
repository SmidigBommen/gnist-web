import { cn } from "@/lib/utils";

interface V3SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "snow" | "paper" | "linen";
}

export function V3Section({
  children,
  className,
  id,
  variant = "snow",
}: V3SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-32",
        variant === "snow" && "bg-v3-snow",
        variant === "paper" && "bg-v3-paper",
        variant === "linen" && "bg-v3-linen",
        className
      )}
    >
      {children}
    </section>
  );
}
