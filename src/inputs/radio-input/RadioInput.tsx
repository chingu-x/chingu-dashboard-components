import React from "react";
import { cn } from "../../tw-merge";
import Label from "../label/Label";

type groupLayoutTypes = "vertical" | "horizontal" | "rating" | "withBorder";

export interface RadioInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string | JSX.Element;
  groupLayout?: groupLayoutTypes;
  additionalContent?: JSX.Element;
}

const RadioInput = React.forwardRef<HTMLInputElement, RadioInputProps>(
  (
    {
      id,
      label,
      groupLayout = "vertical",
      additionalContent,
      className,
      disabled,
      checked,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn(
          "relative flex flex-col w-full items-start gap-4",
          (groupLayout === "horizontal" || groupLayout === "rating") &&
            "w-auto",
          groupLayout === "withBorder" &&
            "py-[22px] px-4 border border-neutral-content rounded-lg",
          groupLayout === "withBorder" &&
            disabled &&
            "bg-base-100 border-neutral-content",
        )}
      >
        <Label
          htmlFor={id}
          className={cn(
            "group flex cursor-pointer items-center gap-x-4 normal-case text-neutral-focus",
            groupLayout === "rating" &&
              "flex-col-reverse gap-y-4 text-base-300",
            className,
          )}
        >
          <input
            id={id}
            type="radio"
            ref={ref}
            disabled={disabled}
            checked={checked}
            {...props}
            className="hidden peer"
          />
          <span
            className={cn(
              "inline-block h-6 w-6 rounded-full border border-neutral/40 bg-base-200 transition-all group-hover:border group-hover:border-neutral group-hover:bg-base-100 peer-checked:border-0 peer-checked:bg-base-200 peer-checked:shadow-[inset_0_0_0_7px] peer-checked:shadow-base-300 group-hover:peer-checked:shadow-neutral peer-disabled:bg-base-100 peer-disabled:peer-checked:bg-neutral-focus peer-disabled:peer-checked:shadow-neutral",
              groupLayout === "withBorder" &&
                "border-neutral-focus peer-disabled:bg-base-100 peer-disabled:border-neutral-content peer-disabled:peer-checked:shadow-neutral-content group-hover:peer-disabled:peer-checked:shadow-neutral-content peer-checked:[&>*]:text-neutral-focus ",
            )}
          />
          <span className="peer-checked:text-base-300 peer-disabled:text-neutral-focus ">
            {groupLayout !== "horizontal" && label}
          </span>
        </Label>
        {checked && additionalContent ? additionalContent : null}
      </div>
    );
  },
);

RadioInput.displayName = "RadioInput";

export default RadioInput;
