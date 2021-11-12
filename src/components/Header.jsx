import React from "react";
import "./Header.css";
import logo from "../images/logo.svg";

function Header() {
  return (
    <header>
      <img src={logo} alt="windbnb-logo" />
    </header>
  );
}

export default Header;
