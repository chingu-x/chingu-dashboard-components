import { cn } from "../../tw-merge";

export default function Label({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "text-base font-medium capitalize text-base-300",
        className,
      )}
      {...props}
    />
  );
}
