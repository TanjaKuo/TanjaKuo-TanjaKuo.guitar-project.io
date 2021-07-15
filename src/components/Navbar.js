import React from "react";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../context";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    console.log(page);
    console.log(tempBtn);
    console.log(center);
    console.log(bottom);
    openSubmenu(page, { center, bottom }); // {center, bottom} -> {coordinate}
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h3 className="logo">Mr.Guitar</h3>
          </Link>
          <button className="btn toggle-btn" onClick={openSidebar}>
            <MenuIcon />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/product">
              <button className="link-btn" onMouseOver={displaySubmenu}>
                prodcuts
              </button>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <button className="link-btn" onMouseOver={displaySubmenu}>
                contact
              </button>
            </Link>
          </li>
          <li>
            <Link to="/faq">
              <button className="link-btn" onMouseOver={displaySubmenu}>
                FAQ
              </button>
            </Link>
          </li>
        </ul>
        <button className="link-btn cart-btn">
          <ShoppingCartIcon fontSize="large" />
        </button>{" "}
      </div>
    </nav>
  );
};

export default Navbar;
