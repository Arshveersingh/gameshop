import { jwtDecode } from "jwt-decode";

export const isTokenExpired = (token: string) => {
  const decoded = jwtDecode(token);
  if (decoded && Date.now() / 1000 > decoded.exp) {
    return true;
  }
  return false;
};

export const setToken = (token: string) => {
  if (!isTokenExpired(token)) {
    localStorage.setItem("token", token);
  }
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    if (isTokenExpired(token)) {
      localStorage.removeItem("token");
    } else {
      return token;
    }
  }
  return null;
};
