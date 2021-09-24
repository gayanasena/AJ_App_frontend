import "./css/styleAsst.css";
import HeaderBar from "./Componenets/HeaderBar";
import Home from "./Pages/Home";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./Pages/Products";
import Footer from "./Componenets/Footer";
import ContactUs from "./Componenets/ContactUs";
import ProductView from "./Componenets/ProductView";
import Cart from "./Componenets/Cart";
import OrderSubmit from "./Componenets/OrderSubmit";
import OrderSuccess from "./Componenets/OrderSuccess";
import AdminPanel from "./Pages/AdminPanel";
import Admin_Login from "./Componenets/Admin_Login";

const currentUser = 'Gayana Senarathne';

export const User = React.createContext(currentUser);
function App() {


  return (
    <Router>
      <HeaderBar/>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path='/product'>
          <Products/>
        </Route>

        <Route path='/feedback' component={ContactUs}>
        </Route>

        <Route exec path='/productView/:id'>
          <ProductView/>
        </Route>

        <Route path='/cart'>
          <Cart/>
        </Route>

        <Route path='/bill'>
          <OrderSubmit/>
        </Route>

        <Route path='/orderSuccess'>
          <OrderSuccess/>
        </Route>

        <Route path='/admin'>
          <Admin_Login/>
        </Route>

        <Route exec path='/AdminDashbord/:stat'>
          <AdminPanel/>
        </Route>
        
      </Switch>
      <Footer/>
    </Router>

  );
}

export default App;
