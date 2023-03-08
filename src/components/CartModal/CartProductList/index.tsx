import { useContext } from 'react';
import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { ProductsCartContext } from '../../../contexts/ProductsCartContext';

const CartProductList = () => {
  const { shopCart, clearCart, total } = useContext(ProductsCartContext);

  return (
    <StyledCartProductList>
      <ul>
        {shopCart.map((product) => {
          return (
            <CartProductCard
              id={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              img={product.img}
              key={product.id}
            />
          );
        })}
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>
          {total.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
          })}
        </StyledParagraph>
      </div>
      <StyledButton
        $buttonSize='default'
        $buttonStyle='gray'
        onClick={() => {
          clearCart();
        }}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
