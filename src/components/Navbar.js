import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import MenuIcon from "@material-ui/icons/Menu";
/* icon btn */
import LoginIcon from "../Forms/LoginIcon";
import ShopCartIcon from "../ShoppingCart/ShopCartIcon";
//import SearchBox from "../Product/SearchBox";

const Navbar = (props) => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const [color, setColor] = useState("transparent");
  const changeColor = useCallback((e) => {
    if (window.scrollY > 20) {
      setColor("rgba(29, 53, 87, 0.99)");
    } else {
      setColor("transparent");
    }
  }, []); // remember to pass[] in the end

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, [changeColor]);

  /*  add dynamic submenu height later 07.15 */
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom }); // {center, bottom} -> {coordinate}
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav
      className="nav"
      name="nav"
      onMouseOver={handleSubmenu}
      style={{ background: color }}
    >
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
            <Link to="/products">
              <button className="link-btn" onMouseOver={displaySubmenu}>
                prodcuts
              </button>
            </Link>
          </li>
          <li>
            <Link to="/blog">
              <button className="link-btn" onMouseOver={displaySubmenu}>
                blog
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
        <li className="link-btn">
          <ShopCartIcon />
          <LoginIcon />
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
