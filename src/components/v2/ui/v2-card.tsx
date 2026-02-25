import { cn } from "@/lib/utils";

interface V2CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function V2Card({ children, className, hover = false }: V2CardProps) {
  return (
    <div
      className={cn(
        "border border-v2-border bg-v2-surface p-6 md:p-8",
        hover && "transition-colors duration-200 hover:border-v2-cyan/40",
        className
      )}
    >
      {children}
    </div>
  );
}
