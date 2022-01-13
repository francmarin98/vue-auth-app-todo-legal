import { useStore } from "vuex";

export const useAuthLogout = () => {
  const store = useStore();
  const logout = () => {
    store.commit("logout");
  };
  return {
    logout,
  };
};
