import React from "react";

import nat1 from "../img/nat-1-large.jpg";
import nat2 from "../img/nat-2-large.jpg";
import nat3 from "../img/nat-3-large.jpg";

const About = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-buttom-8">
        <h2 className="heading-secondary">
          Exciting tours for adventuorous people
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-1-5">
            You are going to fall in love with nature
          </h3>
          <p className="paragraph">
            Ut lacinia lobortis erat, eget dignissim est mollis eu. Vivamus
            fermentum scelerisque metus, sit amet tempor sem porttitor id. Fusce
            quis egestas orci. Ut volutpat sem diam, nec dapibus lectus lobortis
            a.
          </p>
          <h3 className="heading-tertiary u-margin-bottom-1-5">
            Live adventure like never before
          </h3>
          <p className="paragraph">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Sed a ex hendrerit mi egestas hendrerit.
            Maecenas a magna mi. Fusce non congue neque.
          </p>
          <a href="https://www.nature.org/en-us/" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src={nat1}
              alt=""
              className="composition__photo composition__photo--p1"
            />
            <img
              src={nat2}
              alt=""
              className="composition__photo composition__photo--p2"
            />
            <img
              src={nat3}
              alt=""
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
