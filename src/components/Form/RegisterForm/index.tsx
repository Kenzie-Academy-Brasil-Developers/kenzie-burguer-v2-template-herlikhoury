import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from './registerSchema';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';

export interface iRegisterForm {
  name: string;
  email: string;
  password: string;
  rewritten_password: string;
}

const RegisterForm = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterForm>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(registerUser)}>
      <Input
        label={'Nome'}
        register={register('name')}
        error={errors.name}
        type={'text'}
      />
      <Input
        label={'Email'}
        register={register('email')}
        error={errors.email}
        type={'email'}
      />
      <Input
        label={'Password'}
        register={register('password')}
        error={errors.password}
        type={'password'}
      />
      <Input
        label={'Confirmar Senha'}
        register={register('rewritten_password')}
        error={errors.rewritten_password}
        type={'password'}
      />
      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
