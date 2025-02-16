import React from "react";
import Select, {
  type GroupBase,
  type Props as SelectProps,
} from "react-select";

type DropdownSelectOption = {
  value: string;
  label: string;
};

interface DropdownSelectProps
  extends SelectProps<
    DropdownSelectOption,
    false,
    GroupBase<DropdownSelectOption>
  > {
  id: string;
  label: string;
  options: DropdownSelectOption[];
}

const DropdownSelect = React.forwardRef<Select, DropdownSelectProps>(
  ({ id, options, className, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full">
        <Select
          id={id}
          options={options}
          // @ts-expect-error: idk
          ref={ref}
          {...props}
          classNamePrefix="react-select"
          className={className}
        />
      </div>
    );
  },
);

DropdownSelect.displayName = "DropdownSelect";

export default DropdownSelect;
