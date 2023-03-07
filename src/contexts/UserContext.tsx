import { createContext, ReactNode, useState } from 'react';
import { iLoginForm } from '../components/Form/LoginForm';
import { api } from '../services/api';
import { setToken } from '../scripts/localStorage';
import { useNavigate } from 'react-router-dom';

export interface IUser {
  email: string;
  name: string;
}

interface IUserContext {
  user: IUser[];
  logUser: (data: iLoginForm) => Promise<void>;
}

interface IUserProviderProps {
  children: ReactNode;
}

/* export const UserContext = createContext<IUserContext | null>(null); */

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser[]>([]);
  const navigation = useNavigate();

  const logUser = async (data: iLoginForm) => {
    try {
      const answer = await api.post('/login', data);
      setToken(answer.data.accessToken);
      navigation('/shop');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ user, logUser }}>
      {children}
    </UserContext.Provider>
  );
};
