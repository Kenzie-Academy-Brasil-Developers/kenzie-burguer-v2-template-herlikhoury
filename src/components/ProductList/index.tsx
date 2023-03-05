import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { useEffect, useState } from 'react';
import { api } from '../../../src/services/api';

interface IProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    async () => {
      let token = 23; /* apagar essa lambança */
      try {
        const response = await api.post<Array<IProducts>>('/products', {
          headers: {
            auth: token /* token aqui */,
          },
        });
      } catch (error) {
        console.log(error);
      }
    };
  });

  return (
    <StyledProductList>
      <ProductCard />
    </StyledProductList>
  );
};

export default ProductList;
