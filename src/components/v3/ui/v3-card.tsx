import { cn } from "@/lib/utils";

interface V3CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: React.ElementType;
}

export function V3Card({
  children,
  className,
  hover = false,
  as: Component = "div",
}: V3CardProps) {
  return (
    <Component
      className={cn(
        "border border-v3-stone bg-v3-paper p-8 md:p-10",
        hover &&
          "transition-all duration-200 ease-in-out hover:border-v3-drift hover:shadow-md",
        className
      )}
    >
      {children}
    </Component>
  );
}
