export const getUserId = () => {
  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : null;
  return userId;
};
