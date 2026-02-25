import { cn } from "@/lib/utils";

interface V3BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "moss" | "sand" | "clay";
  className?: string;
}

const variantStyles = {
  default: "bg-v3-linen text-v3-drift",
  moss: "bg-v3-moss-light text-v3-moss",
  sand: "bg-v3-sand-light text-v3-sand",
  clay: "bg-v3-clay-light text-v3-clay",
};

export function V3Badge({ children, variant = "default", className }: V3BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
