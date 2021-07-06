import React from "react";
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
          <h3 className="logo">Mr.Guitar</h3>
          <button className="btn toggle-btn" onClick={openSidebar}>
            <MenuIcon />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              prodcuts
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              contact
            </button>
          </li>{" "}
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              FAQ
            </button>
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
