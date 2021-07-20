import firebase from 'firebase';
import React, { useState, useEffect } from 'react';
import { auth } from 'util_user';

type Props = {
  className?: string;
};

export const AuthContext = React.createContext<
  firebase.String | null | undefined
>(undefined);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<
    firebase.String | null | undefined
  >(undefined);

  useEffect(() => {
    console.log('current', auth.currentUser);
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};
