import React from "react";
import UserContext from "./UserContext";

function UserContextProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [userId, setUserId] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser, userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
