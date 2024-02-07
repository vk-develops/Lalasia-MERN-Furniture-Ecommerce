import { toast } from "react-toastify";

const useSuccessToast = (msg) => {
    toast.success(msg, {
        position: "top-center",
    });
};

const useErrorToast = (msg) => {
    toast.error(msg, {
        position: "top-center",
    });
};

export { useSuccessToast, useErrorToast };
