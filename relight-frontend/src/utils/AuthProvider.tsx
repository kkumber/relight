import { useContext, useEffect, useState, createContext } from "react";


const UserContext = createContext({});
const AccessTokenContext = createContext({});

const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);


  return (
    <UserContext.Provider value={{user, setUser}}>
    <AccessTokenContext.Provider value={{accessToken, setAccessToken}}>
      {children}
    </AccessTokenContext.Provider>
  </UserContext.Provider>
  );
};

export default AuthProvider;