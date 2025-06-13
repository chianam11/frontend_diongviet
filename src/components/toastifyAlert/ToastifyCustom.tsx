import { ToastContentProps } from "react-toastify";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

type Props = ToastContentProps & {
  type: "success" | "error" | "info" | "warning";
  title?: string;
  message: string;
};

export default function ToastifyCustom({
  type,
  title = "Thông báo",
  message,
}: Props) {
  const isError = type === "error";

  return (
    <div className="flex items-start gap-4 p-4 w-full max-w-[400px] bg-white rounded shadow-md">
      <div className="pt-1">
        {isError ? (
          <XCircleIcon className="text-red-500 w-6 h-6" />
        ) : (
          <CheckCircleIcon className="text-green-500 w-6 h-6" />
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{message}</p>
      </div>
    </div>
  );
}
