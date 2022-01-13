import Swal from "sweetalert2";

export const showLoading = () => {
  new Swal({
    title: "Autentincando...",
    allowOutsideClick: false,
  });
  Swal.showLoading();
};

export const showAlert = async (title, message, icon) => {
  await Swal.fire(title, message, icon);
};

export const hideLoading = () => Swal.close();
