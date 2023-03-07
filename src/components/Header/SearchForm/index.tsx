import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { MdSearch } from 'react-icons/md';
import { ProductsCartContext } from '../../../contexts/ProductsCartContext';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { yupResolver } from '@hookform/resolvers/yup';
import { searchSchema } from './searchSchema';

export interface iSearch {
  searchedValue: string;
}

const SearchForm = () => {
  const { searchForProduct } = useContext(ProductsCartContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iSearch>({
    resolver: yupResolver(searchSchema),
  });

  return (
    <StyledSearchForm onSubmit={handleSubmit(searchForProduct)}>
      <input
        type='text'
        placeholder='Digitar pesquisa'
        {...register('searchedValue')}
      />
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
