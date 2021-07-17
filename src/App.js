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
import Contact from "./Contact/Contact";
import FAQ from "./FAQ/FAQ";
import Error from "./Error/Error";

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
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
