export const setUserState = (state, data) => {
  state.status = data.status;
  state.username = data.username;
  state.token_type = data.token_type;
  state.id_token = data.id_token;
  state.access_token = data.access_token;
  state.refresh_token = data.refresh_token;
  state.user_uuid = data.user_uuid;
  state.roles = data.roles || [];
  state.name = data.name;
  state.lastname = data.lastname;
  state.email = data.email;
};
