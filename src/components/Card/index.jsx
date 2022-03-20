import { Container, AuxDiv, StyledButton } from "./styles";
import { CartContext } from "../../Providers/cart/cart";
import { useContext } from "react";
function Card({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <Container>
      <img src={product.image} alt={product.name} />
      <AuxDiv>
        <h4>{product.name}</h4>
      </AuxDiv>
      <AuxDiv>
        <span>R$ {product.price.toFixed(2)}</span>
      </AuxDiv>
      <StyledButton onClick={() => addToCart(product)}>
        Adicionar ao carrinho
      </StyledButton>
    </Container>
  );
}

export default Card;
