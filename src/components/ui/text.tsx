import { cn } from "@/lib/utils";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "large";
  as?: React.ElementType;
}

export function Text({
  children,
  className,
  variant = "default",
  as: Component = "p",
}: TextProps) {
  return (
    <Component
      className={cn(
        "leading-relaxed",
        variant === "default" && "text-base text-charcoal",
        variant === "secondary" && "text-base text-warm-gray",
        variant === "large" && "text-lg md:text-xl text-warm-gray",
        className
      )}
    >
      {children}
    </Component>
  );
}
