/* import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { useGlobalContext } from "../context";

const Footer = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  return (
    <div>
      <footer className="footer">
        <div className="footer-center">
          <div className="footer-header">
            <div className="footer-section">
              <h4 className="footer-title">Information</h4>
              <ul className="policy">
                <div className="footer-info">
                  <button className="policy-btn">Shipping Policy</button>
                  <button className="policy-btn">Refund Policy</button>
                  <button className="policy-btn">Privacy Policy</button>
                  <button className="policy-btn">Term of Service</button>
                  <button className="policy-btn">Click and Collect</button>
                  <button className="policy-btn">Covid-19 Policy</button>
                </div>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Trading Hours</h4>
              <div className="footer-info">
                <p>Monday: 10am - 6pm</p>
                <p> Tuesday: 10am - 6pm </p>
                <p>Wednesday: 10am - 6pm</p>
                <p>Thursday: 10am - 6pm </p>
                <p>Friday: 10am - 6pm </p>
                <p>Saturday: 10am - 5pm </p>
                Closed Public Holidays
              </div>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Contact</h4>
              <div className="footer-info">
                <p>10 Bellerine Street, GEELONG VIC 3220</p>
                <p>ph: 0423235600</p>
                <p>Email: harro@mr-guitar@gmail.com</p>
              </div>
            </div>
            <button className="btn toggle-btn" onClick={openSidebar}>
              <MenuIcon />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
 */

import React from "react";
import { useGlobalContext } from "../context";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  const { isFooterOpen, openFooter, closeFooter, openSidebar } =
    useGlobalContext();
  const displayFooter = (e) => {
    const page2 = e.target.textContent;
    const tempContent = e.target.getBoundingClientRect();
    const height = tempContent.height + 30;
    console.log(page2);
    console.log(tempContent);
    console.log(height);
    openFooter();
    // {center, bottom} -> {coordinate}
  };
  return (
    <footer className="footer">
      <div className="footer-center">
        <div className="footer-header">
          <h3 className="footer-title">policy</h3>
          <button className="footer-btn toggle-btn" onClick={openFooter}>
            <MenuIcon />
          </button>
          <div className="footer-content">
            <ul className="footer-links">
              <li className="policy-links">
                <button className="policy-btn ">Shipping Policy</button>
                <button className="policy-btn">Refund Policy</button>
                <button className="policy-btn">Privacy Policy</button>
                <button className="policy-btn">Term of Service</button>
                <button className="policy-btn">Click and Collect</button>
                <button className="policy-btn">Covid-19 Policy</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-header">
          <h3 className="footer-title">policy</h3>
          <button className="footer-btn toggle-btn" onMouseOver={displayFooter}>
            <MenuIcon />
          </button>
          <div className="footer-content">
            <ul className="footer-links">
              <li className="policy-links">
                <p>Monday: 10am - 6pm</p>
                <p> Tuesday: 10am - 6pm </p>
                <p>Wednesday: 10am - 6pm</p>
                <p>Thursday: 10am - 6pm </p>
                <p>Friday: 10am - 6pm </p>
                <p>Saturday: 10am - 5pm </p>
                Closed Public Holidays
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-header">
          <h3 className="footer-title">policy</h3>
          <button className="footer-btn toggle-btn" onMouseOver={displayFooter}>
            <MenuIcon />
          </button>
          <div className="footer-content">
            <ul className="footer-links">
              <li className="policy-links">
                <p>10 Bellerine Street, GEELONG VIC 3220</p>
                <p>ph: 0423235600</p>
                <p>Email: harro@mr-guitar@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Navbar;
