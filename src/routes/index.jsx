import { Route, Switch } from "react-router";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
}

export default Routes;
