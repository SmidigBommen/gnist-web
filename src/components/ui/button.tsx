import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
} & (
  | { href: string }
  | (Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & { href?: never })
);

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-ember text-white hover:bg-ember-dark focus-visible:ring-ember",
  secondary:
    "bg-terracotta text-white hover:bg-terracotta/90 focus-visible:ring-terracotta",
  outline:
    "border-2 border-ember text-ember hover:bg-ember hover:text-white focus-visible:ring-ember",
  ghost:
    "text-ember hover:bg-ember/10 focus-visible:ring-ember",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
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
