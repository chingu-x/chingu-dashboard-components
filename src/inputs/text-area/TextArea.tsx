import React, {
  type ChangeEvent,
  type ElementRef,
  useEffect,
  useRef,
  useState,
} from "react";

import Label from "../label/Label";
import FieldMessage from "../field-message/FieldMessage";

import { cn } from "../../tw-merge";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label?: string;
  placeholder: string;
  defaultValue?: string;
  suggestion?: string;
  maxLength?: number;
  errorMessage?: string | undefined;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      id,
      label,
      placeholder,
      defaultValue,
      suggestion,
      maxLength,
      errorMessage,
      className,
      ...props
    },
    ref,
  ) => {
    const [currentSuggestion, setCurrentSuggestion] = useState(suggestion);
    const textAreaRef = useRef<ElementRef<"textarea"> | null>(null);

    // Set Textarea height to fit the content on first load
    useEffect(() => {
      // The 2 corresponds to the 2 1px borders (top and bottom):
      if (textAreaRef !== null && textAreaRef.current !== null) {
        textAreaRef.current.style.height = `${Math.max(
          textAreaRef.current.scrollHeight + 4,
          0,
        )}px`;
      }
    }, [textAreaRef?.current?.innerHTML]);

    function handleOnChange(e: ChangeEvent<HTMLTextAreaElement>) {
      // Make Textarea expand or shrink vertically to fit the content
      // The 2 corresponds to the 2 1px borders (top and bottom):
      e.target.style.height = e.target.style.minHeight = "auto";
      e.target.style.minHeight = `${Math.min(
        e.target.scrollHeight + 4,
        parseInt(e.target.style.maxHeight),
      )}px`;
      e.target.style.height = `${Math.max(e.target.scrollHeight + 4, 0)}px`;

      // Set character length counter
      if (!maxLength) return;

      const currentLength = e.target.value.length;
      if (currentLength > 0) {
        setCurrentSuggestion(`Character length ${currentLength}/${maxLength}`);
      } else {
        setCurrentSuggestion(suggestion);
      }
    }

    return (
      <div className="w-full">
        {label && <Label htmlFor={id}>{label}</Label>}
        <textarea
          id={id}
          rows={1}
          ref={(e) => {
            if (typeof ref === "function") {
              ref(e);
            } else if (ref) {
              ref.current = e;
            }
            textAreaRef.current = e;
          }}
          placeholder={placeholder}
          defaultValue={defaultValue}
          aria-describedby={`${id}-message`}
          className={cn(
            "placeholder-base my-2 w-full resize-none rounded-lg border-2 border-neutral/40 bg-base-200 px-3.5 py-2.5 text-base text-base-300 shadow-[0px_0px_0px_3px] shadow-transparent outline-none transition hover:border-neutral-focus focus-visible:border-neutral/40 focus-visible:bg-base-200 focus-visible:shadow-neutral/30 focus-visible:ring-0 hover:focus-visible:border-neutral/40 disabled:cursor-not-allowed disabled:bg-base-100 disabled:hover:border-neutral/40",
            errorMessage &&
              "border-error/40 focus-visible:border-error/40 focus-visible:shadow-error/20",
            className,
          )}
          {...props}
          onChange={(e) => {
            // call onChange which can be passed as prop
            if (props.onChange) void props.onChange(e);
            // call your handler
            handleOnChange(e);
          }}
        />
        <FieldMessage
          id={`${id}-message`}
          errorMessage={errorMessage && errorMessage}
          suggestionMessage={errorMessage ? "" : currentSuggestion}
        />
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

export default Textarea;
