import { cva } from "class-variance-authority";
import type { ReactElement } from "react";
import { cn } from "../tw-merge";
import type { Avatar } from "../avatar";

const badge = cva(
  "flex items-center justify-center overflow-hidden rounded-[100px] font-medium text-base-300",
  {
    variants: {
      variant: {
        primary: ["bg-accent-content"],
        error: ["bg-error-content"],
        warning: ["bg-warning-content"],
        success: ["bg-success-content"],
      },
      size: {
        sm: ["py-[2px]", "px-[8px]", "text-[13px]", "gap-x-[4px]", "h-[20px]"],
        md: ["py-[3px]", "px-[9px]", "text-base", "gap-x-[5px]", "h-[25px]"],
        lg: ["py-[4px]", "px-[10px]", "text-xl", "gap-x-[6px]", "h-[32px]"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type BadgeVariant = "primary" | "error" | "warning" | "success";
export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children?: ReactElement<typeof Avatar>;
  variant?: BadgeVariant;
  size?: BadgeSize;
}

export default function Badge({
  className,
  title,
  children,
  variant = "primary",
  size = "md",
  ...props
}: BadgeProps) {
  return (
    <div className={cn(badge({ variant, size, className }))} {...props}>
      {children}
      <span>{title}</span>
    </div>
  );
}
