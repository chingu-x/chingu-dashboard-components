import React from "react";
import CheckboxInput, {
  type CheckboxInputProps,
} from "../../checkbox-input/CheckboxInput";

interface CheckboxGroupProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  options: CheckboxInputProps[];
}

const CheckboxGroup = React.forwardRef<HTMLInputElement, CheckboxGroupProps>(
  ({ options, ...props }, ref) => (
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
  )
);

CheckboxGroup.displayName = "CheckboxGroup";

export default CheckboxGroup;
