import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const userdata = (data) => {
    setUser(data); // 👈 THIS WAS MISSING OR WRONG
  };

  return (
    <AuthContext.Provider value={{ user, userdata }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
