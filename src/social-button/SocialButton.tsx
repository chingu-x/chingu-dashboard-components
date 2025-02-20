"use client";

import { cn } from "../tw-merge";

type SocialButtonVariant = "github" | "linkedin" | "discord";

interface SocialButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: SocialButtonVariant;
  size?: number;
}

const Icons = {
  github: ({ size = 24 }) => (
    <svg
      fill="#181717"
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  linkedin: ({ size = 24 }) => (
    <svg
      fill="#0077B5"
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.75V1.75C24 .78 23.21 0 22.23 0zM7.06 20.5H3.56V9h3.5v11.5zM5.31 7.75c-1.12 0-2.02-.9-2.02-2s.91-2 2.02-2c1.12 0 2.02.9 2.02 2s-.91 2-2.02 2zM20.5 20.5h-3.5V14c0-1.55-.03-3.54-2.15-3.54-2.16 0-2.49 1.69-2.49 3.43v6.61h-3.5V9h3.36v1.58h.05c.47-.89 1.63-1.83 3.36-1.83 3.6 0 4.27 2.37 4.27 5.45v6.3z" />
    </svg>
  ),
  discord: ({ size = 24 }) => (
    <svg
      fill="#5865F2"
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.317 4.3698A19.791 19.791 0 0 0 15.705 3c-.396.75-.848 1.815-1.153 2.682a18.971 18.971 0 0 0-5.104 0A13.162 13.162 0 0 0 8.296 3a19.792 19.792 0 0 0-4.612 1.369C1.191 8.106.501 11.735.825 15.306c1.942 1.53 3.813 2.458 5.675 3.081a14.978 14.978 0 0 0 1.227-1.962 12.292 12.292 0 0 1-1.938-.935c.162-.12.32-.246.473-.375 3.744 1.751 7.795 1.751 11.512 0 .153.129.311.255.473.375-.621.373-1.264.698-1.938.935a14.972 14.972 0 0 0 1.227 1.962c1.862-.623 3.733-1.551 5.675-3.081.39-4.014-.65-7.643-2.273-10.936zM8.02 14.76c-1.202 0-2.183-1.109-2.183-2.476 0-1.365.96-2.482 2.183-2.482 1.226 0 2.197 1.117 2.197 2.482 0 1.367-.971 2.476-2.197 2.476zm7.96 0c-1.202 0-2.183-1.109-2.183-2.476 0-1.365.96-2.482 2.183-2.482 1.226 0 2.197 1.117 2.197 2.482 0 1.367-.971 2.476-2.197 2.476z" />
    </svg>
  ),
};

export default function SocialButton({
  variant,
  className,
  size = 24,
  ...props
}: SocialButtonProps) {
  const Icon = Icons[variant];

  return (
    <button
      type="button"
      className={cn(
        "flex h-[100px] w-[100px] flex-col items-center justify-center gap-x-2 gap-y-[5px] rounded-lg border-2 border-base-100 bg-base-200 text-sm font-medium capitalize text-base-300 hover:border-base-100 hover:bg-base-content focus:bg-base-content focus:text-black active:bg-base-content",
        className,
      )}
      aria-label={`sign in or sign up with ${variant}`}
      {...props}
    >
      <Icon size={size} />
    </button>
  );
}
