import RocketLaunchIcon from "@heroicons/react/24/solid/RocketLaunchIcon";

const Colors = {
  green: "text-success",
  amber: "text-warning",
  red: "text-error",
};

interface LabelIconProps {
  iconName: string;
  color: string;
}

export default function LabelIcon({ iconName, color }: LabelIconProps) {
  if (iconName.toLowerCase() === "rocket") {
    return (
      <RocketLaunchIcon
        className={`h-5 w-6 ${Colors[color as keyof typeof Colors]}`}
      />
    );
  }
}
