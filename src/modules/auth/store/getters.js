export const getFullName = (state) => {
  return `${state.name} ${state.lastname}`;
};

export const getUsername = (state) => {
  return state.username;
};

export const getToken = (state) => {
  return state.id_token;
};
