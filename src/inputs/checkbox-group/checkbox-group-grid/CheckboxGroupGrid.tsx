import React from "react";
import CheckboxInput, {
  type CheckboxInputProps,
} from "../../checkbox-input/CheckboxInput";

interface CheckboxGroupVerticalProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  options: CheckboxInputProps[];
}

const CheckboxGroupGrid = React.forwardRef<
  HTMLInputElement,
  CheckboxGroupVerticalProps
>(({ options, ...props }, ref) => (
  <div className="grid w-full grid-cols-2 gap-4">
    {options.map(({ id, value, label }) => (
      <CheckboxInput
        key={id}
        id={id}
        value={value}
        label={label}
        {...props}
        ref={ref}
        withBorder={true}
      />
    ))}
  </div>
));

CheckboxGroupGrid.displayName = "CheckboxGroupGrid";

export default CheckboxGroupGrid;
