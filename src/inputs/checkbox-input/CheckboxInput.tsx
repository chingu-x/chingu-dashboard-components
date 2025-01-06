import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

import Label from "../label/Label";
import { cn } from "../../tw-merge";

export interface CheckboxInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string | JSX.Element;
}

const CheckboxInput = React.forwardRef<HTMLInputElement, CheckboxInputProps>(
  ({ id, label, className, ...props }, ref) => (
    <div className="relative flex items-center w-full gap-x-4">
      <Label
        htmlFor={id}
        className={cn(
          "group flex cursor-pointer items-center gap-x-4 normal-case text-neutral-focus",
          className
        )}
      >
        <input
          id={id}
          type="checkbox"
          ref={ref}
          {...props}
          className="hidden peer"
        />
        <span className="flex h-6 w-6 items-center justify-center rounded border border-neutral/40 bg-base-200 transition-all group-hover:bg-base-100 peer-checked:border-base-300 group-hover:peer-checked:border-neutral-content [&>*]:hidden [&>*]:text-base-300 peer-checked:[&>*]:block group-hover:peer-checked:[&>*]:text-neutral-content">
          <CheckIcon className="hidden w-full h-full transition-all" />
        </span>
        <span className="transition-all peer-checked:text-base-300">
          {label}
        </span>
      </Label>
    </div>
  )
);

CheckboxInput.displayName = "CheckboxInput";

export default CheckboxInput;
