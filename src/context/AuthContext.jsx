import React from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

  const [token, setToken] = React.useState("");

  const handle = (val) => {
    setToken(val);
  };

  return (
    <AuthContext.Provider value={{token, handle }}>
      {children}
    </AuthContext.Provider>
  );
};

