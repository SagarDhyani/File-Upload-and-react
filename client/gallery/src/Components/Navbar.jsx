import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="leftSide">
          <img
            src="https://images.template.net/wp-content/uploads/2017/01/06171250/Orange-Logo-for-Company.jpg"
            className="logo"
          />

          <Link className="span" to="/">
            <span className="span"> Home</span>
          </Link>
          <Link  className="span" to = "/feeds"><span className="span">Feeds</span></Link>
        </div>
      </div>
    </div>
  );
};
