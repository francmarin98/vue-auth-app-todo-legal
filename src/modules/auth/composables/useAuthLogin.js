import { useStore } from "vuex";
import { showLoading } from "../utils";

const useAuthLogin = () => {
  const store = useStore();
  const loginUser = async (data) => {
    showLoading("Validando información, espere por favor...");
    return await store.dispatch("loginUser", data);
  };
  return {
    loginUser,
  };
};

export default useAuthLogin;
