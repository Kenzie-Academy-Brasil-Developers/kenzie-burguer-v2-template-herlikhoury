import { useContext, useEffect } from 'react';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import { ProductsCartContext } from '../../contexts/ProductsCartContext';
import { StyledContainer } from '../../styles/grid';
import { useNavigate } from 'react-router-dom';
import { StyledShopPage } from './style';
import { isLogged } from '../../scripts/localStorage';

const ShopPage = () => {
  const { loadProductsList } = useContext(ProductsCartContext);
  const navigation = useNavigate();

  useEffect(() => {
    if (!isLogged()) {
      navigation('/');
    }
    loadProductsList();
  }, []);

  return (
    <StyledShopPage>
      <CartModal />
      <Header />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
};

export default ShopPage;
