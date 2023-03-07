import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './loginSchema';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';

export interface iLoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { user, logUser } = useContext(UserContext);
  const navigation = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginForm>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(logUser)}>
      <Input
        label={'Email'}
        register={register('email')}
        error={errors.email}
        type={'email'}
      />
      <Input
        label={'Senha'}
        register={register('password')}
        error={errors.password}
        type={'password'}
      />
      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
