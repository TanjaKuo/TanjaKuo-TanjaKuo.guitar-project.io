import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

//import React from "react"; */
/* import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";
import Footer from "./components/Footer";
import Home from "./Home/Home";
import Product from "./Product/Product";
import Contact from "./Contact/Contact";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
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
          <Route exact path="/product">
            <Product />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

 */
/* 
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// pages for this product
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";
import Footer from "./components/Footer";
import Home from "./Home/Home";
import Product from "./Product/Product";
import Contact from "./Contact/Contact";
import { AppProvider } from "./context";

import "./App.css";

var hist = createBrowserHistory();

ReactDOM.render(
  <AppProvider>
    <Router history={hist}>
      <Route component={Navbar} />
      <Route component={Sidebar} />
      <Route component={Submenu} />
      <Switch>
        <Route path="/product" component={Product} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
      <Route component={Footer} />
    </Router>
  </AppProvider>,
  document.getElementById("root")
);
 */
