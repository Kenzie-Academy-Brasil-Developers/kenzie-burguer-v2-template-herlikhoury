import { createContext, ReactNode, useState } from 'react';

export interface IUser {
  email: string;
  name: string;
  id: number;
}

interface IUserContext {
  /* Isto é um teste em  
    Voltar e realizar a tipagem correta
    serão os tipos do que vou passar pelo contexto*/
  user: IUser[];
}

interface IUserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<IUserContext | null>(null);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser[]>([]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
