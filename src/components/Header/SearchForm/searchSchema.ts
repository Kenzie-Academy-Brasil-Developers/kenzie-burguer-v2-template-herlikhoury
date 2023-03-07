import * as yup from 'yup';

export const searchSchema = yup.object().shape({
  searchedValue: yup.string().required('Campo obrigatório'),
});
