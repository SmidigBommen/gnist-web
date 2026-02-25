import { cn } from "@/lib/utils";
import Link from "next/link";

type V2ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type V2ButtonSize = "sm" | "md" | "lg";

type V2ButtonProps = {
  variant?: V2ButtonVariant;
  size?: V2ButtonSize;
  className?: string;
  children: React.ReactNode;
} & (
  | { href: string }
  | (Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & { href?: never })
);

const variantStyles: Record<V2ButtonVariant, string> = {
  primary:
    "bg-v2-cyan text-v2-void hover:bg-v2-cyan-dark focus-visible:ring-v2-cyan",
  secondary:
    "bg-v2-purple text-white hover:bg-v2-purple/80 focus-visible:ring-v2-purple",
  outline:
    "border border-v2-cyan text-v2-cyan hover:bg-v2-cyan hover:text-v2-void focus-visible:ring-v2-cyan",
  ghost:
    "text-v2-cyan hover:bg-v2-cyan/10 focus-visible:ring-v2-cyan",
};

const sizeStyles: Record<V2ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function V2Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: V2ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold uppercase tracking-wider transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-v2-void",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { href: _, ...buttonProps } = props as Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "className"
  > & { href?: never };
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
