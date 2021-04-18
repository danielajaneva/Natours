import React from "react";

const Navigation = () => {
  return (
    <div className="navigation">
      <input
        id="navi-toggle"
        type="checkbox"
        className="navigation__checkbox"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              About Natours
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Your benifits
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Popular tours
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Stories
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Book now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
