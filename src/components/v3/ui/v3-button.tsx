import { cn } from "@/lib/utils";
import Link from "next/link";

type V3ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type V3ButtonSize = "sm" | "md" | "lg";

type V3ButtonProps = {
  variant?: V3ButtonVariant;
  size?: V3ButtonSize;
  className?: string;
  children: React.ReactNode;
} & (
  | { href: string }
  | (Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & { href?: never })
);

const variantStyles: Record<V3ButtonVariant, string> = {
  primary:
    "bg-v3-heading text-v3-snow hover:bg-v3-text focus-visible:ring-v3-heading",
  secondary:
    "bg-v3-moss text-white hover:bg-v3-moss/90 focus-visible:ring-v3-moss",
  outline:
    "border border-v3-stone text-v3-text hover:bg-v3-linen focus-visible:ring-v3-heading",
  ghost:
    "text-v3-text hover:bg-v3-linen focus-visible:ring-v3-heading",
};

const sizeStyles: Record<V3ButtonSize, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-sm",
  lg: "px-9 py-4 text-base",
};

export function V3Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: V3ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-v3-snow",
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
