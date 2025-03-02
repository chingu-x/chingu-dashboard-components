import { forwardRef, useImperativeHandle, useRef } from "react";
import Select, {
  type GroupBase,
  type Props as SelectProps,
} from "react-select";
import Label from "../label/Label";
import FieldMessage from "../field-message/FieldMessage";

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
  options: DropdownSelectOption[];
  label?: string;
  suggestion?: string;
  errorMessage?: string | undefined;
}

const DropdownSelect = forwardRef<unknown, DropdownSelectProps>(
  (
    { id, options, label, errorMessage, suggestion, className, ...props },
    ref,
  ) => {
    const selectRef = useRef(null);

    useImperativeHandle(ref, () => selectRef.current);

    return (
      <div className="relative w-full">
        {/* LABEL */}
        {label && <Label htmlFor={id}>{label}</Label>}
        <div className="relative my-2 group">
          <Select
            id={id}
            options={options}
            ref={selectRef}
            {...props}
            classNamePrefix="react-select"
            className={`${className} ${errorMessage ? "react-select-error" : ""}`}
          />
        </div>
        <FieldMessage
          id={`${id}-message`}
          errorMessage={errorMessage && errorMessage}
          suggestionMessage={errorMessage ? "" : suggestion}
        />
      </div>
    );
  },
);

DropdownSelect.displayName = "DropdownSelect";

export default DropdownSelect;
