import { ReactNode, useEffect, createContext, useState } from 'react';
import { getToken } from '../scripts/localStorage';
import { api } from '../services/api';

interface IProductsCartProviderProps {
  children: ReactNode;
}

interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface IProductCartContext {
  productsList: IProduct[];
  loadProductsList: () => Promise<void>;
}

export const ProductsCartContext = createContext({} as IProductCartContext);

export const ProductsCartProvider = ({
  children,
}: IProductsCartProviderProps) => {
  const [productsList, setProductsList] = useState<IProduct[]>([]);

  const loadProductsList = async () => {
    let token = localStorage.getItem('token');
    console.log(token);
    console.log('teste');
    try {
      const answer = await api.get<IProduct[]>('/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProductsList(answer.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductsCartContext.Provider value={{ productsList, loadProductsList }}>
      {children}
    </ProductsCartContext.Provider>
  );
};
