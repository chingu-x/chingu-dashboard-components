import { BellIcon } from "@heroicons/react/20/solid";

export default function Bell({
  notificationCount,
}: {
  notificationCount: number | undefined;
}) {
  return (
    <div className="relative">
      <span className="absolute px-1 text-white bg-red-500 rounded-full -end-3 -top-3">
        {notificationCount}
      </span>
      <BellIcon className="self-center w-6 h-6 duration-200 cursor-pointer text-base-300" />
    </div>
  );
}
