import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { ProductsCartContext } from '../../contexts/ProductsCartContext';

const ProductList = () => {
  const { listView } = useContext(ProductsCartContext);

  return (
    <StyledProductList>
      {listView.map((product) => {
        return (
          <ProductCard
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            img={product.img}
            key={product.id}
          />
        );
      })}
    </StyledProductList>
  );
};

export default ProductList;
