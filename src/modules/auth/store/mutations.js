export const setUser = (state, data) => {
  localStorage.setItem("access_token", data.access_token);

  state.user_uuid = data.user_uuid;
  state.name = data.name;
  state.lastname = data.lastname;
  state.username = data.username;

  state.token_type = data.token_type;
  state.id_token = data.id_token;
  state.access_token = data.access_token;
  state.refresh_token = data.refresh_token;
};

export const logout = (state) => {
  state.user_uuid = null;
  state.name = null;
  state.lastname = null;
  state.username = null;

  state.token_type = null;
  state.id_token = null;
  state.access_token = null;
  state.refresh_token = null;
};
