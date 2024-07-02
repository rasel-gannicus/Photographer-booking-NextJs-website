import { toast } from "react-toastify";


// --- creating a popup error message
export const errorMsg = (msg : string) => toast.error(msg || 'Some Error Happened', {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
});

// --- for success Msg
export const successMsg = (msg : string) => toast.success(msg || 'Succeeded !', {
position: "bottom-center",
autoClose: 3000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
