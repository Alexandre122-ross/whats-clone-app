import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [currentuser, setCurrentuser] = useState({});

  const handleSignIn = (dataForm, callback) => {
    setCurrentuser({...dataForm, uid: 'Beta-01'});
    callback();
  };

  const value = {
    currentuser,
    handleSignIn,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;