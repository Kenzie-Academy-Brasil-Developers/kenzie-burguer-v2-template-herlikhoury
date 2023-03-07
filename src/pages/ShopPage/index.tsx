import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import { getToken } from '../../scripts/localStorage';
import { StyledContainer } from '../../styles/grid';
import { useContext, useEffect } from 'react';
import { ProductsCartContext } from '../../contexts/productsCartContext';

const ShopPage = () => {
  const { productsList, loadProductsList } = useContext(ProductsCartContext);

  useEffect(() => {
    loadProductsList();
    console.log('use effect');
  }, []);

  console.log(productsList);
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
