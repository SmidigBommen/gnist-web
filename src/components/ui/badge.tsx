import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "ember" | "sage" | "terracotta";
  className?: string;
}

const variantStyles = {
  default: "bg-cream text-warm-gray",
  ember: "bg-glow/30 text-ember-dark",
  sage: "bg-sage/15 text-sage",
  terracotta: "bg-terracotta/15 text-terracotta",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
