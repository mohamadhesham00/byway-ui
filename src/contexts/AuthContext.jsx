import { createContext, useEffect, useState } from "react";

const KEY = "accessToken";
// 1. Create Context
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// 2. Create Provider component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // Load token from localStorage on refresh
  useEffect(() => {
    const savedToken = localStorage.getItem(KEY);
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  // login function
  const storeToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem(KEY, newToken);
  };

  // logout function
  const removeToken = () => {
    setToken(null);
    localStorage.removeItem(KEY);
  };

  return (
    <AuthContext value={{ token, storeToken, removeToken }}>
      {children}
    </AuthContext>
  );
};
