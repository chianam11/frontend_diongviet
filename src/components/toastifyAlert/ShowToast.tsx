import { toast } from "react-toastify";
import ToastifyCustom from "./ToastifyCustom";

// Hàm tiện lợi để hiển thị
export const showCustomToast = ({
  type = "success",
  title,
  message,
  toastId, // hỗ trợ toastId từ bên ngoài
}: {
  type: "success" | "error" | "info" | "warning";
  title: string;
  message: string;
  toastId?: string;
}) => {
  console.log(toastId);

  toast(
    (props) => (
      <ToastifyCustom {...props} type={type} title={title} message={message} />
    ),
    {
      className: "p-0",
      toastId: toastId || `${type}-${title}-${message}`, // tạo toastId theo nội dung
    }
  );
};
