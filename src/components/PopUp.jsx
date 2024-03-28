import { green } from "@mui/material/colors";
import Swal from "sweetalert2";

export function popUp({
    message,
    title = "",
    icons = "error",
    html,
    showCloseButton,
    showCancelButton,
    returnFocus = false,
    allowOutsideClick = false,
    allowEnterKey = true,
    showConfirmButton = true,
    timer,
    width,
    reverseButtons = false,
    confirmButtonText = "OK",
    cancelButtonText = "Cancel",
    focusConfirm = true,
    confirmButtonColor = green,
    cancelButtonColor = "#8596a6",
}) {
    return Swal.fire({
        icon: icons,
        title: title,
        text: message,
        html: html,
        showCloseButton: showCloseButton,
        showCancelButton: showCancelButton,
        confirmButtonText: confirmButtonText,
        customClass: ".swal-wide",
        showConfirmButton: showConfirmButton,
        confirmButtonColor: confirmButtonColor,
        cancelButtonColor: cancelButtonColor,
        cancelButtonText: cancelButtonText,
        returnFocus: returnFocus,
        allowEnterKey: allowEnterKey,
        allowOutsideClick: allowOutsideClick,
        focusConfirm: focusConfirm,
        timer: timer,
        reverseButtons: reverseButtons,
        width: width
    });
}