import { createContext, ReactNode, useState } from 'react';
import { iLoginForm } from '../components/Form/LoginForm';
import { api } from '../services/api';
import { setToken, removeToken } from '../scripts/localStorage';
import { useNavigate } from 'react-router-dom';
import { iRegisterForm } from '../components/Form/RegisterForm';

export interface IUser {
  email: string;
  name: string;
}

interface IUserContext {
  user: IUser[];
  logUser: (data: iLoginForm) => Promise<void>;
  registerUser: (data: iRegisterForm) => Promise<void>;
  logOutUser: () => void;
}

interface IUserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser[]>([]);
  const navigation = useNavigate();

  const logUser = async (data: iLoginForm) => {
    try {
      const answer = await api.post('/login', data);
      setToken(answer.data.accessToken);
      setUser(answer.data.user);
      navigation('/shop');
    } catch (error) {
      console.log(error);
    }
  };

  const registerUser = async (data: iRegisterForm) => {
    const requestParams = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    try {
      const answer = await api.post('/users', requestParams);
      setToken(answer.data.accessToken);
      setUser(answer.data.user);
      navigation('/shop');
    } catch (error) {
      console.log(error);
    }
  };

  const logOutUser = () => {
    removeToken();
    navigation('/');
  };

  return (
    <UserContext.Provider value={{ user, logUser, registerUser, logOutUser }}>
      {children}
    </UserContext.Provider>
  );
};
