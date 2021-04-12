import React from "react";

import logoG1 from "../img/logo-green-1x.png";
import logoG2 from "../img/logo-green-2x.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        {/* ART DIRECTION  write @media into html
       <picture className="footer__logo">
          <source
            media="{max-width:37.5em}" 
            srcSet={`${logoG1} 1x , ${logoG2} 2x`}
          />
          <img srcSet={`${logoG1} 1x , ${logoG2} 2x`} alt="" />
        </picture>
*/}
        {/* OR SIMPLE srcset attribute and DENSITY RESOLUTION descriptor (1x -low 2x-high) */}
        <img
          srcSet={`${logoG1} 1x , ${logoG2} 2x`}
          alt=""
          className="footer__logo"
        />

        {/* OR BOTH IN ONE 
        <img
          srcSet={`${logoG1} 300w , ${logoG2} 1000w`}  w->original width of img
          sizes="{max-width:900px} 10vw , {max-width:600px} 30vw , 300px"  ->width that takes the img of the viewport at given max-width and original
          alt=""
          className="footer__logo"
          srcSet={logoG2}  ->for older browsers
        />
         */}
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Conntact us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Carrers
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy policy
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built my{" "}
            <a href="#" className="footer__link">
              Jonas Schmedtmann
            </a>{" "}
            for his online course{" "}
            <a href="#" className="footer__link">
              Advanced CSS and Saas.{" "}
            </a>
            , Copyright &copy; by Jonas Schmedtmann. You are 100% allowe to use
            this webpage for both personal and commercial use, but NOT to claim
            it as your own design.A credit to the original author, Jonas
            Schmedtmann, is of course highly appriciated!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
