import React from "react";

import Logo from "../img/logo-white.png";
import "../css/style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img alt="logo" src={Logo} className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">OUTDOORS</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>
        <a
          href="https://www.alltrails.com/"
          className="btn btn--white btn--animated"
        >
          Discover our tours
        </a>
      </div>
    </header>
  );
};

export default Header;
