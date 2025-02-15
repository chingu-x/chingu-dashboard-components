import React from "react";
import RadioInput, { type RadioInputProps } from "../../radio-input/RadioInput";
import { cn } from "../../../tw-merge";

interface RadioGroupGridProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  options: RadioInputProps[];
}

const RadioGroupGrid = React.forwardRef<HTMLInputElement, RadioGroupGridProps>(
  ({ options, ...props }, ref) => (
    <div
      className={cn(
        "grid w-full grid-cols-2 gap-4",
        options.length % 2 > 0 && "[&>*:last-child]:col-span-2",
      )}
    >
      {options.map(({ id, value, label }) => (
        <RadioInput
          key={id}
          id={id}
          value={value}
          label={label}
          {...props}
          ref={ref}
          groupLayout={"withBorder"}
        />
      ))}
    </div>
  ),
);

RadioGroupGrid.displayName = "RadioGroupGrid";

export default RadioGroupGrid;
