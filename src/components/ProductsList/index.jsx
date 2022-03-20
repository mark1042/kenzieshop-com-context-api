import { useSelector } from "react-redux";
import { Vitrine } from "./styles";
import Card from "../Card";
import { CatalogueContext } from "../../Providers/catalogue/catalogue";
import { useContext } from "react";

function ProductsList() {
  const products = useSelector((state) => state.products);
  const { catalogue } = useContext(CatalogueContext);
  return (
    <Vitrine>
      {catalogue.map((prod, idx) => (
        <Card key={idx} product={prod} />
      ))}
    </Vitrine>
  );
}

export default ProductsList;
