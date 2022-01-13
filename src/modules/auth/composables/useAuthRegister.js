import { formatUsername } from "../helpers";
import { showLoading } from "../utils";
import authAPI from "../api/authAPI";

const useAuthRegister = () => {
  const createUser = async (user) => {
    try {
      const { username, password } = user;

      const data = {
        name: "Pedro",
        last_name: "Perez Lopez",
        phone_number: "8091010101",
        email: "xxx.xxx@todolegal.com",
        username: formatUsername(username),
        password,
      };
      showLoading("Registrando, espere por favor...");
      const response = await authAPI.post("/user", data);
      return { ok: true, data: response.data };
    } catch (e) {
      return { ok: false, data: "Error" };
    }
  };

  return {
    createUser,
  };
};

export default useAuthRegister;
