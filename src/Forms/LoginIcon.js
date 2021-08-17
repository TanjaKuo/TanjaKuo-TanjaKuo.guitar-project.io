import React from "react";
import { Link } from "react-router-dom";

import PersonIcon from "@material-ui/icons/Person";

const LoginIcon = () => {
  return (
    <Link to="/sign-in">
      <button className="cart-btn">
        <PersonIcon fontSize="large" />
      </button>
    </Link>
  );
};

export default LoginIcon;
