import React, {createContext, useState, ReactNode} from 'react';
import {User} from "../interfaces.ts";

interface UserContextProps {
  user: User | null;
  updateUser: (user: User | null) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const updateUser = (newUser: User | null) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{user, updateUser}}>
      {children}
    </UserContext.Provider>
  );
};
