import { createContext, useReducer } from "react";
import React from "react";
export const authContext = createContext();

export const authReducer = (state, action) => {
  console.log("inside authReducer")
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
       return state
  }
};

export const AuthContextProvider = (PropTypes) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });
  console.log("AuthContext State:", state);

  return (
    <authContext.Provider value={{ ...state, dispatch }}>
      {PropTypes.children}
    </authContext.Provider>
  );
};
