"use client";

import { cn } from "../tw-merge";

type SocialButtonVariant = "github" | "linkedin" | "discord";

interface SocialButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: SocialButtonVariant;
}

export default function SocialButton({
  variant,
  className,
  ...props
}: SocialButtonProps) {
  const getContent = (
    variant: SocialButtonVariant,
  ): { icon: string; alt: string } => {
    if (variant === "github")
      return {
        icon: "/github.svg",
        alt: "github",
      };

    if (variant === "linkedin")
      return {
        icon: "/linkedin.svg",
        alt: "linkedin",
      };
    else
      return {
        icon: "/discord.svg",
        alt: "discord",
      };
  };

  const content = getContent(variant);

  return (
    <button
      type="button"
      className={cn(
        "flex h-[100px] w-[100px] flex-col items-center justify-center gap-x-2 gap-y-[5px] rounded-lg border-2 border-base-100 bg-base-200 text-sm font-medium capitalize text-base-300 hover:border-base-100 hover:bg-base-content focus:bg-base-content focus:text-black active:bg-base-content",
        className,
      )}
      aria-label={`sign in or sign up with ${content.alt}`}
      {...props}
    >
      <img src={content.icon} alt={content.alt} />
      {content.alt}
    </button>
  );
}
