import './App.css';
import Products from "./pages/products/Products";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { home, products, login, users, cart } from './routes/routes';
import Login from "./pages/login/Login";
import Users from "./pages/users/Users";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path={home}>
                    <h1>Home</h1>
                </Route>
                <Route exact path={products}>
                    <Products />
                </Route>
                <Route exact path={login}>
                    <Login />
                </Route>
                <Route exact path={users}>
                    <Users />
                </Route>
                <Route exact path={cart}>
                    <Cart />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
