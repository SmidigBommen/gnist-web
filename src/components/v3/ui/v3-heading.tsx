import { cn } from "@/lib/utils";

interface V3HeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  serif?: boolean;
  className?: string;
}

const styles = {
  h1: "text-4xl md:text-5xl lg:text-6xl",
  h2: "text-3xl md:text-4xl",
  h3: "text-2xl md:text-3xl",
  h4: "text-xl md:text-2xl",
};

export function V3Heading({ children, as: Tag = "h2", serif = false, className }: V3HeadingProps) {
  return (
    <Tag
      className={cn(
        "tracking-tight text-v3-heading",
        serif ? "v3-serif font-normal" : "font-body font-light",
        styles[Tag],
        className
      )}
    >
      {children}
    </Tag>
  );
}
