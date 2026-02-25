import { cn } from "@/lib/utils";

interface V3CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function V3Card({ children, className, hover = false }: V3CardProps) {
  return (
    <div
      className={cn(
        "border border-v3-stone/50 bg-v3-snow p-8 md:p-10",
        hover && "transition-all duration-300 hover:border-v3-stone hover:shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
