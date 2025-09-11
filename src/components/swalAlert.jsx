import Swal from "sweetalert2";

export function handleSignupSuccess(message) {
  Swal.fire({
    title: "Success!",
    text: message,
    icon: "success",
    confirmButtonText: "OK",
  });
}

export function handleSignupError(message) {
  Swal.fire({
    title: "Oops!",
    text: message,
    icon: "error",
    confirmButtonText: "OK",
  });
}
