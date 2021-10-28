import React from "react";

const UserContext = React.createContext({ user: null, setUser: () => {} });

export const UserProvider = UserContext.Provider;

export default UserContext;
