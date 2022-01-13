export const formatUsername = (username) => {
  const aleatorio = Math.round(Math.random() * 10);
  return `${username}-${aleatorio}`;
};
