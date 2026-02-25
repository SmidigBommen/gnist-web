import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
}

const styles = {
  h1: "text-4xl md:text-5xl lg:text-6xl",
  h2: "text-3xl md:text-4xl",
  h3: "text-2xl md:text-3xl",
  h4: "text-xl md:text-2xl",
};

export function Heading({ children, as: Tag = "h2", className }: HeadingProps) {
  return (
    <Tag className={cn("font-heading tracking-tight text-charcoal", styles[Tag], className)}>
      {children}
    </Tag>
  );
}
