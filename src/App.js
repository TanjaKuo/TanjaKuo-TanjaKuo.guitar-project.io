import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";
import Footer from "./components/Footer";
/* policies */
import ReturnPolicy from "./components/ReturnPolicy";
import ShippingPolicy from "./components/ShippingPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
/* Nav */
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import FAQ from "./FAQ/FAQ";
import Error from "./Error/Error";

/* Prodcuts */
import ProductsPage from "./Product/ProductsPage";
import SingleGuitar from "./Product/SingleGuitar";
/* Blog */
import Blog from "./Blog/Blog";
import MexicanFender from "./Blog/MexicanFender";
import FenderUSA from "./Blog/FenderUSA";

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
          <ProductsPage />
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
        <Route exact path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route exact path="/blog">
          <Blog />
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
