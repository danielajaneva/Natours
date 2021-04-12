import React from "react";

import nat8 from "../img/nat-8.jpg";
import nat9 from "../img/nat-9.jpg";

const Popup = () => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img className="popup__img" src={nat8} alt="" />
          <img className="popup__img" src={nat9} alt="" />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-buttom-4">Start booking</h2>
          <h3 className="heading-tertiary u-margin-bottom-1-5">
            Important &ndash; Please read this terms before booking.
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet, ei ceteros signiferumque per, consul
            equidem persequeris ad cum, ei soluta vituperatoribus qui. Mei harum
            partem singulis eu. Dictas iisque referrentur sea no. Per laoreet
            assentior ad, ei qui solet graeci voluptatum. Vel an pertinax
            interpretaris, ut assum sententiae qui. Iriure sensibus suscipiantur
            an sit, doctus quaerendum et eos, quo eu everti alterum. Lorem ipsum
            dolor sit amet, ei ceteros signiferumque per, consul equidem
            persequeris ad cum, ei soluta vituperatoribus qui. Mei harum partem
            singulis eu. Dictas iisque referrentur sea no. Per laoreet assentior
            ad, ei qui solet graeci voluptatum. Vel an pertinax interpretaris,
            ut assum sententiae qui.
          </p>
          <a href="#" className="btn btn--green">
            Book now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
