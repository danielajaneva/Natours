import React from "react";

const ToursCard = ({ num, header, detail }) => {
  return (
    <>
      <div className={`card__side card__side--front card__side--front--${num}`}>
        <div className={`card__picture card__picture--${num}`}>&nbsp;</div>
        <div className="card__heading">
          <span className={`card__heading--span card__heading--span--${num}`}>
            {header}
          </span>
        </div>
        <div className="card__detail">
          <ul>
            <li>{detail.days}</li>
            <li>{detail.people}</li>
            <li>{detail.guides}</li>
            <li>{detail.sleeping}</li>
            <li>{detail.difficulty}</li>
          </ul>
        </div>
      </div>
      <div className={`card__side card__side--back card__side--back--${num}`}>
        <div className="card__cta">
          <div className="card__price-box">
            <p className="card__price-only">Only</p>
            <p className="card__price-value">{detail.price}</p>
          </div>
          <a href="#popup" className="btn btn--white">
            Book Now!
          </a>
        </div>
      </div>
    </>
  );
};

export default ToursCard;
