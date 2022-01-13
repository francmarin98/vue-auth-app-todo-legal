import { useStore } from "vuex";
import { formatUsername } from "../helpers";

const useAuthRegister = () => {
  const store = useStore();

  const createUser = async (user) => {
    const { username, password } = user;

    const data = {
      name: "Pedro",
      last_name: "Perez Lopez",
      phone_number: "8091010101",
      email: "xxx.xxx@todolegal.com",
      username: formatUsername(username),
      password,
    };

    return await store.dispatch("createUser", data);
  };

  return {
    createUser,
  };
};

export default useAuthRegister;
