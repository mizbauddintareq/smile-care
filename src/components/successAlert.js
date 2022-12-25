import Swal from "sweetalert2";

export const successAlert = (message) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: `${message}`,
    showConfirmButton: false,
    timer: 1500,
  });
};
