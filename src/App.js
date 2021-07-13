import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";
import Home from "./Home/Home";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Home />
      <Submenu />
      <Footer />
    </>
  );
}

export default App;
