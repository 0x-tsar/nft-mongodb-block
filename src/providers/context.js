import React, { createContext, useEffect, useState } from "react";
import getBlockchain from "../ethereum";

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [token, setToken] = useState(undefined);
  const [info, setInfo] = useState([]);
  const [myCards, setMyCards] = useState([]);

  return (
    <AuthContext.Provider
      value={{ token, setToken, info, setInfo, myCards, setMyCards }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
