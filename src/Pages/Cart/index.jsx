import { Container } from "../Home/styles";
import {
  AuxTotalContainer,
  ShoppingCard,
  ShoppingList,
  ShoppingListContainer,
  TotalContainer,
} from "./styles";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { empty, remove } from "../../store/modules/cart/actions";
function Cart() {
  const shoppingList = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Container>
      <Header isCart={true} />
      <ShoppingListContainer>
        <ShoppingList>
          {shoppingList.length === 0 && <h2>Carrinho vázio </h2>}
          {shoppingList.map((prod, idx) => (
            <ShoppingCard key={idx}>
              <div className="shoppingAux">
                <img src={prod.image} alt={prod.name} />
                <h6>{prod.name}</h6>
              </div>
              <div className="shoppingAux">
                <span>R${prod.price.toFixed(2)} </span>
                <button onClick={() => dispatch(remove(prod))}>x</button>
              </div>
            </ShoppingCard>
          ))}
        </ShoppingList>

        <TotalContainer>
          <h4>Resumo do pedido</h4>
          <AuxTotalContainer>
            <span className="prodN">{shoppingList.length} Produtos</span>
            <span className="prodAmt">
              R$
              {shoppingList
                .reduce((acc, prod) => acc + prod.price, 0)
                .toFixed(2)}
            </span>
          </AuxTotalContainer>
          <button onClick={() => dispatch(empty())}>FINALIZAR O PEDIDO</button>
        </TotalContainer>
      </ShoppingListContainer>
    </Container>
  );
}

export default Cart;
