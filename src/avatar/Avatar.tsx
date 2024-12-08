"use client";

import { cn } from "../tw-merge";

interface AvatarProps {
  children: React.ReactNode;
  customClassName?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  withBorder?: boolean;
}

export default function Avatar({
  children,
  customClassName,
  onMouseEnter,
  onMouseLeave,
  withBorder,
}: AvatarProps) {
  return (
    <div
      className={cn(
        "shrink-1 cursor-pointer overflow-hidden rounded-full px-0 bg-base-200",
        withBorder ? "border border-base-content" : "",
        customClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}
