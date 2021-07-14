import React from "react";
import FooterSidebar from "./FooterSidebar";
import { footerInfo } from "../subData";

const Navbar = () => {
  return (
    <footer className="footer">
      <div className="footer-center">
        <div className="footer-mobile-show">
          {footerInfo.map((info) => {
            return <FooterSidebar key={info.id} {...info}></FooterSidebar>;
          })}
        </div>
        <div className="footer-header footer-hide">
          <h3 className="footer-title">policy</h3>
          <div className="footer-content">
            <ul className="footer-link">
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
          <h3 className="footer-title">Trading Hours</h3>
          <div className="footer-content">
            <ul className="footer-links">
              <li className="holiday">
                <p className="hours">Monday: 10am - 6pm</p>
                <p className="hours"> Tuesday: 10am - 6pm </p>
                <p className="hours">Wednesday: 10am - 6pm</p>
                <p className="hours">Thursday: 10am - 6pm </p>
                <p className="hours">Friday: 10am - 6pm </p>
                <p className="hours">Saturday: 10am - 5pm </p>
                Closed Public Holidays
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-header">
          <h3 className="footer-title">policy</h3>
          <div className="footer-content">
            <ul className="footer-links">
              <li>
                <p className="hours">10 Bellerine Street, GEELONG VIC 3220</p>
                <p className="hours">ph: 0423235600</p>
                <p className="hours">Email: harro@mr-guitar@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Navbar;
