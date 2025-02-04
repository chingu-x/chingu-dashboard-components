import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface DropDownProps {
  children: React.ReactNode;
  openState?: boolean;
}

export default function DropDown({ children, openState }: DropDownProps) {
  const closed = "hidden";
  const open =
    "absolute flex flex-col gap-5 z-[1] w-[250px] p-5 bottom-100 translate-y-[15%] shadow-md bg-base-200 right-0 border border-base-100 rounded-2xl";

  const handleDropDownClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="relative mx-2 py-0">
      <label
        tabIndex={0}
        className="m-0 flex border-none bg-transparent p-0 text-base-300 hover:border-none hover:bg-transparent"
      >
        <ChevronDownIcon className="w-4 cursor-pointer text-base-300" />
      </label>
      <div
        tabIndex={0}
        className={openState ? open : closed}
        onClick={handleDropDownClick}
      >
        {children}
      </div>
    </div>
  );
}
