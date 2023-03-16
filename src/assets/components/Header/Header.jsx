import React from "react";
import Logo from "../../images/shared/logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
        <h1>start slideshow</h1>
      </nav>
      <div className="line"></div>
    </header>
  );
};

export default Header;
