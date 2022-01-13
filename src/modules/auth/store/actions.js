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

export const checkAuthentication = async ({ commit }) => {};

// eslint-disable-next-line no-unused-vars
export const createUser = async ({ commit }, user) => {
  try {
    const response = await authAPI.post("/user", user);
    console.log(response);
  } catch (e) {
    console.log(e.response);
  }
};
