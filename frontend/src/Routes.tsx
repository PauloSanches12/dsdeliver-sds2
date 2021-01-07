import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Orders from "./components/Orders";


const Routes: React.FC = () => {
  return (
      <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/orders" component={Orders} />
        </Switch>
      </BrowserRouter>
  );
}

export default Routes;