import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";
import Home from "./Home/Home";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Home />
      <Submenu />
    </>
  );
}

export default App;
