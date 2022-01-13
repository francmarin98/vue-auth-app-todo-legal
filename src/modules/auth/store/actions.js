import authAPI from "../api/authAPI";

export const loginUser = async ({ commit }, user) => {
  try {
    const response = await authAPI.post("/auth/login", user);
    commit("setUser", response.data);
    return { ok: true };
  } catch (error) {
    return { ok: false };
  }
};
