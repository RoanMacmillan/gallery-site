import React from "react";
import Logo from "../../images/shared/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <img className="logo" src={Logo} alt="Logo" />
        <h1>start slideshow</h1>
      </nav>
      <div className="line"></div>
    </header>
  );
};

export default Header;
