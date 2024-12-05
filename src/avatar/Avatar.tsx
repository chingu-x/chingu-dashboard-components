"use client";

import { cn } from "../tw-merge";

interface AvatarProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
  customClassName?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function Avatar({
  children,
  width = 24,
  height = 24,
  customClassName,
  onMouseEnter,
  onMouseLeave,
}: AvatarProps) {
  return (
    <div
      className={cn(
        "shrink-1 cursor-pointer overflow-hidden rounded-full px-0",
        customClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-base-200" style={{ width, height }}>
        {children}
      </div>
    </div>
  );
}
