import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-ash/30 bg-white p-6 md:p-8",
        hover && "transition-shadow duration-200 hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
