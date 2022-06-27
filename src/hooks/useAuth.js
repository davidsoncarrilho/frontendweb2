import React from "react";

const CestaContext = React.createContext();

export const CESTA_ACTION_TYPES = {
  LOGIN: "LOGIN",
};

export const INITIAL_STATE = {
  email: "",
  password: "",
};

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN": {
      return { ...state, ...action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function AuthProvider({ children, initialState = INITIAL_STATE }) {
  const [store, dispatch] = React.useReducer(authReducer, initialState);

  const contextValue = React.useMemo(() => [store, dispatch], [store]);

  return (
    <CestaContext.Provider value={contextValue}>
      {children}
    </CestaContext.Provider>
  );
}

function useAuth() {
  const context = React.useContext(CestaContext);
  return context;
}

export { AuthProvider, useAuth };
