import React, { useState, useEffect } from 'react';
import { auth } from 'util_user';

type Props = {
  className?: string;
};

export const AuthContext = React.createContext<string | null | undefined>(
  undefined
);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<string | null | undefined>(
    undefined
  );

  useEffect(() => {
    console.log(auth.currentUser, 'current');
    auth.onAuthStateChanged((user) => {
      console.log(user, 'userEffectOnAuth');
      setCurrentUser(user?.uid);
    });
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};
