import React from "react";
import RadioInput, { RadioInputProps } from "../../radio-input/RadioInput";

interface RadioGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  options: RadioInputProps[];
}

const RadioGroupVertical = React.forwardRef<HTMLInputElement, RadioGroupProps>(
  ({ options, ...props }, ref) => (
    <div className="flex flex-col gap-y-5">
      {options.map(({ id, value, label }) => (
        <RadioInput
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

RadioGroupVertical.displayName = "RadioGroupVertical";

export default RadioGroupVertical;
