import { Container, AuxDiv, StyledButton } from "./styles";
import { purchase } from "../../store/modules/cart/actions";
import { useDispatch } from "react-redux";
function Card({ product }) {
  const dispatch = useDispatch();
  return (
    <Container>
      <img src={product.image} alt={product.name} />
      <AuxDiv>
        <h4>{product.name}</h4>
      </AuxDiv>
      <AuxDiv>
        <span>R$ {product.price.toFixed(2)}</span>
      </AuxDiv>
      <StyledButton onClick={() => dispatch(purchase(product))}>
        Adicionar ao carrinho
      </StyledButton>
    </Container>
  );
}

export default Card;
