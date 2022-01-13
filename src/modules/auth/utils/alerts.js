import Swal from "sweetalert2";

export const showLoading = (title) => {
  new Swal({
    title,
    allowOutsideClick: false,
  });
  Swal.showLoading();
};

export const showAlert = async (title, message, icon) => {
  await Swal.fire(title, message, icon);
};

export const hideLoading = () => Swal.close();
