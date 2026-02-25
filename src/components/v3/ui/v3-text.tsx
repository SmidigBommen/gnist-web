import { cn } from "@/lib/utils";

interface V3TextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted" | "large";
  as?: React.ElementType;
}

const variantStyles = {
  default: "text-base text-v3-text",
  muted: "text-base text-v3-drift",
  large: "text-lg md:text-xl text-v3-drift",
};

export function V3Text({
  children,
  className,
  variant = "default",
  as: Component = "p",
}: V3TextProps) {
  return (
    <Component
      className={cn("leading-relaxed", variantStyles[variant], className)}
    >
      {children}
    </Component>
  );
}
