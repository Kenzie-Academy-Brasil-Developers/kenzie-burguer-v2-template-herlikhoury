import { ReactNode, useEffect, createContext, useState } from 'react';
import { getToken } from '../scripts/localStorage';
import { api } from '../services/api';
import { iSearch } from '../components/Header/SearchForm/index';

interface IProductsCartProviderProps {
  children: ReactNode;
}

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface IProductCartContext {
  productsList: IProduct[];
  loadProductsList: () => Promise<void>;
  listView: IProduct[];
  searchForProduct: (searchedString: iSearch) => void;
  addToCart: (product: IProduct) => void;
}

export const ProductsCartContext = createContext({} as IProductCartContext);

export const ProductsCartProvider = ({
  children,
}: IProductsCartProviderProps) => {
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  const [listView, setListView] = useState<IProduct[]>([]);
  const [shopCart, setShopCard] = useState<IProduct[]>([]);

  const loadProductsList = async () => {
    let token = localStorage.getItem('token');
    try {
      const answer = await api.get<IProduct[]>('/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProductsList(answer.data);
      setListView(answer.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchForProduct = (searchedString: iSearch) => {
    let searchedValue: string = searchedString.searchedValue;
    if (searchedValue) {
      let itensFound: IProduct[] = [];
      for (let product of productsList) {
        if (
          product.name.toLowerCase() === searchedValue.toLowerCase() ||
          product.category.toLowerCase() === searchedValue.toLowerCase()
        ) {
          itensFound = [...itensFound, product];
        }
      }
      if (itensFound.length > 0) {
        setListView(itensFound);
      } else {
        console.log('Produto não encontrado');
        setListView(productsList);
      }
    } else {
      setListView(productsList);
    }
  };

  const addToCart = (product: IProduct) => {
    setShopCard([...shopCart, product]);
    console.log(shopCart);
  };

  const removeFromCart = (removedId: number) => {
    let newCartList: IProduct[] = shopCart.filter(
      (product) => product.id !== removedId
    );
    setShopCard(newCartList);
  };

  return (
    <ProductsCartContext.Provider
      value={{
        productsList,
        loadProductsList,
        listView,
        searchForProduct,
        addToCart,
      }}
    >
      {children}
    </ProductsCartContext.Provider>
  );
};
