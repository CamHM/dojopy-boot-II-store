import './App.css';
import Products from './pages/products/Products';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { home, products, login, users, cart } from './routes/routes';
import Login from './pages/login/Login';
import Users from './pages/users/Users';
import Cart from './pages/cart/Cart';
import NotFound from './pages/notFound/NotFound';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className='App'>
      <CartProvider>
        <Router>
          <Switch>
            <Route exact path={home}>
              <Redirect to={products} />
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
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
