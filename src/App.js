import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";
import Footer from "./components/Footer";
import ReturnPolicy from "./components/ReturnPolicy";
import ShippingPolicy from "./components/ShippingPolicy";
import PrivatePolicy from "./components/PrivatePolicy";

import Home from "./Home/Home";
import Products from "./Product/Products";
import SingleGuitar from "./Product/SingleGuitar";
import Contact from "./Contact/Contact";
import FAQ from "./FAQ/FAQ";
import Error from "./Error/Error";
import MexicanFender from "./Blog/MexicanFender";
import FenderUSA from "./Blog/FenderUSA";

/* testing */
import TestingProducts from "./Product/TestingProducts";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Submenu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/products/:id" children={<SingleGuitar />}></Route>
        <Route exact path="/faq">
          <FAQ />
        </Route>
        <Route exact path="/return-policy">
          <ReturnPolicy />
        </Route>
        <Route exact path="/shipping-policy">
          <ShippingPolicy />
        </Route>
        <Route exact path="/private-policy">
          <PrivatePolicy />
        </Route>
        <Route exact path="/testing">
          <TestingProducts />
        </Route>
        <Route exact path="/blog/mexican-fender">
          <MexicanFender />
        </Route>
        <Route exact path="/blog/fender-usa52">
          <FenderUSA />
        </Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
