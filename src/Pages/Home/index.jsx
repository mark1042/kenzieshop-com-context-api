import { Container } from "./styles";
import Header from "../../components/Header";
import ProductsList from "../../components/ProductsList";
function Home() {
  return (
    <Container>
      <Header />
      <ProductsList />
    </Container>
  );
}

export default Home;
