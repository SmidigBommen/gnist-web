import { cn } from "@/lib/utils";

interface V3TextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted" | "large";
  as?: React.ElementType;
}

export function V3Text({
  children,
  className,
  variant = "default",
  as: Component = "p",
}: V3TextProps) {
  return (
    <Component
      className={cn(
        "leading-relaxed",
        variant === "default" && "text-base text-v3-text",
        variant === "muted" && "text-base text-v3-drift",
        variant === "large" && "text-lg md:text-xl text-v3-drift font-light",
        className
      )}
    >
      {children}
    </Component>
  );
}
