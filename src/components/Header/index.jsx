import { HeaderContainer } from "./styles";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Header({ isCart = false }) {
  const history = useHistory();
  const cart = useSelector((state) => state.cart);

  return (
    <HeaderContainer>
      <h2>Kenzie Shop</h2>
      <div className="aux">
        <button onClick={() => history.push("/cart")}>
          Carrinho <span>x{cart.length}</span>
        </button>
        {!!isCart && (
          <button className="backBtn" onClick={() => history.push("/")}>
            Voltar
          </button>
        )}
      </div>
    </HeaderContainer>
  );
}

export default Header;
