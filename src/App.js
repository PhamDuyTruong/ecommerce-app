import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {Switch, Route} from 'react-router-dom'
import Products from './Components/Products';
import Product from './Components/Product';
import Cart from './Components/Cart';

function App() {
  return (
    <>
      <Navbar />
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/products" component={Products} />
       <Route exact path="/products/:id" component={Product} />
       <Route exact path="/cart" component={Cart} />
     </Switch>
    </>
  );
}

export default App;
