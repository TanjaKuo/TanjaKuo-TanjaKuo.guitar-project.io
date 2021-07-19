import React, { useState } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const FooterSidebar = ({ title, name, id, label, url }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="footer-header-show">
      <header className="footer-each-info">
        <h3 className="footer-title">{title}</h3>
        <button
          className="foo-btn"
          onClick={() => setShowInfo(!showInfo)}
          key={id}
        >
          {showInfo ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
        </button>
      </header>

      {showInfo && (
        <p>
          {name.map((i) => (
            <Link to={i.url}>
              <button className={id === 20 ? "policy-mobile--btn" : "disabled"}>
                {i.label}
              </button>
            </Link>
          ))}
        </p>
      )}
    </article>
  );
};

FooterSidebar.ProtoTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.any.isRequired,
  id: PropTypes.any.isRequired,
  name: PropTypes.object.isRequired,
};

export default FooterSidebar;
