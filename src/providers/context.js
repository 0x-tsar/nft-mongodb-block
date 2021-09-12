import React, { createContext, useEffect, useState } from "react";
import getBlockchain from "../ethereum";

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [token, setToken] = useState(undefined);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};
