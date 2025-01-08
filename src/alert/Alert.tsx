import {
  ExclamationTriangleIcon,
  InformationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

type ContextType = "success" | "info" | "error" | "warning" | "neutral";

interface AlertProps {
  context: ContextType;
  message: string;
}

function Alert({ context, message }: AlertProps) {
  const icon: Record<string, JSX.Element> = {
    success: <CheckCircleIcon />,
    info: <InformationCircleIcon className="w-6 h-6" />,
    error: <ExclamationTriangleIcon />,
    warning: <InformationCircleIcon />,
    neutral: <InformationCircleIcon />,
  };

  const customStyles: Record<string, string> = {
    success: "bg-success-content border-success",
    info: "bg-info-content border-info",
    error: "bg-error-content border-error",
    warning: "bg-warning-content border-warning",
    neutral: "bg-base-100 border-neutral",
  };

  return (
    <div
      className={`flex items-center gap-x-4 rounded-2xl border p-6 text-base font-medium text-base-300 shadow-sm ${customStyles[context]}`}
    >
      <div>{icon[context]}</div>
      <span>{message}</span>
    </div>
  );
}

export default Alert;
