import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [status, setStatus] = useState(null);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AppContext.Provider
      value={{
        status,
        setStatus,
        user,
        setUser,
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </AppContext.Provider>
  );

  //once I create more varialbles added it here to AppContext.Provider via (values)
};
