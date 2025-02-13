import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

import Label from "../label/Label";
import { cn } from "../../tw-merge";

export interface CheckboxInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string | JSX.Element;
  withBorder?: boolean;
}

const CheckboxInput = React.forwardRef<HTMLInputElement, CheckboxInputProps>(
  ({ id, label, withBorder, className, disabled, ...props }, ref) => (
    <div
      className={cn(
        "relative flex w-full items-center gap-x-4",
        withBorder && "py-[22px] px-4 border border-neutral-content rounded-lg",
        withBorder && disabled && "bg-base-100",
      )}
    >
      <Label
        htmlFor={id}
        className={cn(
          "group flex cursor-pointer items-center gap-x-4 normal-case text-neutral-focus",
          className,
        )}
      >
        <input
          id={id}
          type="checkbox"
          ref={ref}
          disabled={disabled}
          {...props}
          className="hidden peer"
        />
        <span
          className={cn(
            "flex shrink-0 h-6 w-6 items-center justify-center rounded border border-neutral/40 bg-base-200 transition-all group-hover:bg-base-100 peer-checked:border-base-300 group-hover:peer-checked:border-neutral-content [&>*]:hidden [&>*]:text-base-300 peer-checked:[&>*]:block group-hover:peer-checked:[&>*]:text-neutral-content peer-disabled:bg-base-content peer-disabled:[&>*]:text-neutral-content peer-disabled:border-neutral-content",
            withBorder &&
              "border-neutral-focus peer-disabled:bg-base-100 peer-checked:[&>*]:text-base-300 group-hover:peer-checked:[&>*]:text-base-300",
          )}
        >
          <CheckIcon className="hidden w-full h-full transition-all" />
        </span>
        <span className="transition-all peer-checked:text-base-300">
          {label}
        </span>
      </Label>
    </div>
  ),
);

CheckboxInput.displayName = "CheckboxInput";

export default CheckboxInput;
