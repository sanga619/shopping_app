import React from "react";
import {Switch, Route} from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductsList";
import Details from "./components/Details";
import Defaults from "./components/Defaults";
import Cart from './components/Cart';

function App() {
  return (
    <React.Fragment>
      
      <Navbar/>
    <Switch>
      <Route exact path="/" component={ProductList}/>
      <Route path="/details" component={Details}/>
      <Route path="/cart" component={Cart}/>
      <Route component={Defaults}/>
    </Switch>
      
     </React.Fragment>
  );
}

export default App;
