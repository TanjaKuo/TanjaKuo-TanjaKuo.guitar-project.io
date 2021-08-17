import React from "react";
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const ShopCartIcon = () => {
  return (
    <Link to="/shop-cart">
      <button className="cart-btn">
        <ShoppingCartIcon fontSize="large" />
      </button>
    </Link>
  );
};

export default ShopCartIcon;
