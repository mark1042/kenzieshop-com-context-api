import { Container } from "../Home/styles";
import {
  AuxTotalContainer,
  ShoppingCard,
  ShoppingList,
  ShoppingListContainer,
  TotalContainer,
} from "./styles";
import Header from "../../components/Header";
import { CartContext } from "../../Providers/cart/cart";
import { useContext } from "react";
function Cart() {
  const { cart, removeFromCart, emptyCart } = useContext(CartContext);

  return (
    <Container>
      <Header isCart={true} />
      <ShoppingListContainer>
        <ShoppingList>
          {cart.length === 0 && <h2>Carrinho vázio </h2>}
          {cart.map((prod, idx) => (
            <ShoppingCard key={idx}>
              <div className="shoppingAux">
                <img src={prod.image} alt={prod.name} />
                <h6>{prod.name}</h6>
              </div>
              <div className="shoppingAux">
                <span>R${prod.price.toFixed(2)} </span>
                <button onClick={() => removeFromCart(prod)}>x</button>
              </div>
            </ShoppingCard>
          ))}
        </ShoppingList>

        <TotalContainer>
          <h4>Resumo do pedido</h4>
          <AuxTotalContainer>
            <span className="prodN">{cart.length} Produtos</span>
            <span className="prodAmt">
              R$
              {cart.reduce((acc, prod) => acc + prod.price, 0).toFixed(2)}
            </span>
          </AuxTotalContainer>
          <button onClick={() => emptyCart()}>FINALIZAR O PEDIDO</button>
        </TotalContainer>
      </ShoppingListContainer>
    </Container>
  );
}

export default Cart;
