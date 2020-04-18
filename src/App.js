import React,{Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.png';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Default from './components/Default';
import Detail from './components/Detail';
import Modal from './components/Modal';
import Cart from './components/Cart/';

class App extends Component {
  render() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/product" component={Product} />
        <Route path="/detail" component={Detail} />
        <Route path="/cart" component={Cart} />
        <Route  component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}
}

export default App;
