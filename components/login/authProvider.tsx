import firebase from 'firebase';
import React, { useState, useEffect } from 'react';
import { auth } from 'util_user';


export const AuthContext = React.createContext<
  firebase.User | null | undefined
>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<
    firebase.User | null | undefined
  >(undefined);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};
