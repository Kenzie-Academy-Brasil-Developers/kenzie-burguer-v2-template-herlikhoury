import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { IProduct } from '../../../contexts/ProductsCartContext';

const ProductCard = ({ id, name, category, price, img }: IProduct) => (
  <StyledProductCard>
    <div className='imageBox'>
      <img src={img} alt={name} />
    </div>
    <div className='content'>
      <StyledTitle tag='h3' $fontSize='three'>
        {name}
      </StyledTitle>
      <StyledParagraph className='category'>
        {category} {id}
      </StyledParagraph>
      <StyledParagraph className='price'>
        {price.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
        })}
      </StyledParagraph>
      <StyledButton $buttonSize='medium' $buttonStyle='green'>
        Adicionar
      </StyledButton>
    </div>
  </StyledProductCard>
);

export default ProductCard;
