import React from "react";
import CheckboxInput, {
  type CheckboxInputProps,
} from "../../checkbox-input/CheckboxInput";
import { cn } from "../../../tw-merge";

interface CheckboxGroupVerticalProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  options: CheckboxInputProps[];
}

const CheckboxGroupGrid = React.forwardRef<
  HTMLInputElement,
  CheckboxGroupVerticalProps
>(({ options, ...props }, ref) => (
  <div
    className={cn(
      "grid w-full grid-cols-2 gap-4",
      options.length % 2 > 0 && "[&>*:last-child]:col-span-2",
    )}
  >
    {options.map(({ id, value, label }) => (
      <CheckboxInput
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
));

CheckboxGroupGrid.displayName = "CheckboxGroupGrid";

export default CheckboxGroupGrid;
