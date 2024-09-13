export const getUserToken = () => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return token;
};
