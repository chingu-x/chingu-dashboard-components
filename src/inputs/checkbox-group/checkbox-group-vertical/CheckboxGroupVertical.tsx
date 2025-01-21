import React from "react";
import CheckboxInput, {
  type CheckboxInputProps,
} from "../../checkbox-input/CheckboxInput";

interface CheckboxGroupVerticalProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  options: CheckboxInputProps[];
}

const CheckboxGroupVertical = React.forwardRef<
  HTMLInputElement,
  CheckboxGroupVerticalProps
>(({ options, ...props }, ref) => (
  <div className="flex flex-col gap-y-5">
    {options.map(({ id, value, label }) => (
      <CheckboxInput
        key={id}
        id={id}
        value={value}
        label={label}
        {...props}
        ref={ref}
      />
    ))}
  </div>
));

CheckboxGroupVertical.displayName = "CheckboxGroupVertical";

export default CheckboxGroupVertical;
