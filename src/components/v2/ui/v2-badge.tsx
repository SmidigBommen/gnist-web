import { cn } from "@/lib/utils";

interface V2BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "cyan" | "purple" | "success";
  className?: string;
}

const variantStyles = {
  default: "border-v2-border text-v2-muted",
  cyan: "border-v2-cyan/40 text-v2-cyan",
  purple: "border-v2-purple/40 text-v2-purple",
  success: "border-v2-success/40 text-v2-success",
};

export function V2Badge({ children, variant = "default", className }: V2BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border px-3 py-1 font-mono text-xs uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
