import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('Email obrigatório'),
  password: yup.string().required('Senha obrigatória'),
  rewritten_password: yup
    .string()
    .oneOf([yup.ref('password')], 'Precisa ser igual a senha')
    .required('Confirmação de senha obrigatória'),
});
