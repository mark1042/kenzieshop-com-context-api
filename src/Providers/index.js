import { CatalogueProvider } from "./catalogue/catalogue";

const Providers = ({ children }) => {
  return <CatalogueProvider>{children}</CatalogueProvider>;
};

export default Providers;
