import isEmpty from "lodash/isEmpty";
import { useEffect, useState } from "react";

function logout() {
  localStorage.removeItem("token");
}

function login() {
  localStorage.setItem("token", "1234567890fakeToken");
}

export default function useLogin() {
  const [isLogin, setIsLogin] = useState(false);

  const checkLoginTokenInLocalStorage = () => {
    const token = localStorage.getItem("token");
    const nextIsLogin = !isEmpty(token);
    setIsLogin(nextIsLogin);
  };

  const doLogin = () => {
    login();
    checkLoginTokenInLocalStorage();
  };

  const doLogout = () => {
    logout();
    checkLoginTokenInLocalStorage();
  };

  useEffect(() => {
    checkLoginTokenInLocalStorage();
  }, []);

  return {
    isLogin,
    login: doLogin,
    logout: doLogout,
  };
}
