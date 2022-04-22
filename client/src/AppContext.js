import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [status, setStatus] = useState(null);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AppContext.Provider
      value={{ status, user, email, password, setStatus, setUser }}
    >
      {children}
    </AppContext.Provider>
  );

  //once I create more varialbles added it here to AppContext.Provider via (values)
};
