import { cn } from "@/lib/utils";

interface V3SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "snow" | "paper" | "linen";
}

const variantStyles: Record<NonNullable<V3SectionProps["variant"]>, string> = {
  snow: "bg-v3-snow",
  paper: "bg-v3-paper",
  linen: "bg-v3-linen",
};

export function V3Section({
  children,
  className,
  id,
  variant = "snow",
}: V3SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28 lg:py-32", variantStyles[variant], className)}
    >
      {children}
    </section>
  );
}
