import { useContext, useEffect } from 'react';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import { ProductsCartContext } from '../../contexts/ProductsCartContext';
import { StyledContainer } from '../../styles/grid';
import { StyledShopPage } from './style';

const ShopPage = () => {
  const { productsList, loadProductsList } = useContext(ProductsCartContext);

  useEffect(() => {
    loadProductsList();
  }, []);

  /* console.log(productsList); */
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
