import { showLoading } from "../utils";
import authAPI from "../api/authAPI";
import { formatUsername } from "../helpers";

const useAuthRegister = () => {
  const createUser = async (user) => {
    try {
      const { username, password } = user;
      const access_token = localStorage.getItem("access_token");

      showLoading("Registrando, espere por favor...");

      const data = {
        name: "Pedro",
        last_name: "Perez Lopez",
        phone_number: "8091010101",
        email: "xxx.xxx@todolegal.com",
        username: formatUsername(username),
        password,
      };

      await authAPI.post("/user", data, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      return { ok: true, msg: "Registro de usuario exitoso" };
    } catch (e) {
      return {
        ok: false,
        msg: "La cédula ya esta registrada, intente con una diferente",
      };
    }
  };

  return {
    createUser,
  };
};

export default useAuthRegister;
