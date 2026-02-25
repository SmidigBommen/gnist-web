import { cn } from "@/lib/utils";

interface V2TextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted" | "large";
  as?: React.ElementType;
}

export function V2Text({
  children,
  className,
  variant = "default",
  as: Component = "p",
}: V2TextProps) {
  return (
    <Component
      className={cn(
        "leading-relaxed",
        variant === "default" && "text-base text-v2-text",
        variant === "muted" && "text-base text-v2-muted",
        variant === "large" && "text-lg md:text-xl text-v2-muted",
        className
      )}
    >
      {children}
    </Component>
  );
}
