import store from "@/store";

export const AuthGuard = async (to, from, next) => {
  const token = store.getters["getToken"];
  if (token) {
    next();
  } else {
    next({ name: "login" });
  }
};
