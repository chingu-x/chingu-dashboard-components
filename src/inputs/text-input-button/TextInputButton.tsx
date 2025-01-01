import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { Button } from "../../button";

interface TextInputButtonProps {
  handleClick: () => void;
  placeholder: string;
  value?: string;
}

export default function TextInputButton({
  placeholder,
  handleClick,
  value,
}: TextInputButtonProps) {
  return (
    <Button
      variant="link"
      className="capitalize mb-6 mt-2 flex w-full justify-between rounded-lg border-2 border-neutral-content px-3.5 py-2.5 text-base text-base-300 outline-none hover:border-base-300"
      onClick={handleClick}
      aria-label="average hour per sprint"
      data-cy="avg-hr-per-sprint"
    >
      {value ? value : placeholder}
      <PencilSquareIcon className="w-3.5" />
    </Button>
  );
}
