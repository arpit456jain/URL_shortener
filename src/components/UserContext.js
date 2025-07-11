// UserContext.js

import { createContext, useState,useContext } from "react";

const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user1, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user1, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook
export const useUser = () => useContext(UserContext);

export default UserContext;
