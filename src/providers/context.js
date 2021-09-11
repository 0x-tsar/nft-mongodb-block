import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  // const [contexto, setContexto] = useState({ token: undefined });
  const [token, setToken] = useState(undefined);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};
