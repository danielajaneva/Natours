import React from "react";

import ToursCard from "./ToursCard";

const Tours = () => {
  return (
    <section className="section-tours" id="section-tours">
      <div className="u-center-text u-margin-buttom-8">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <ToursCard
              num="1"
              header="The sea explorer"
              detail={tours.tourSummer}
            />
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <ToursCard
              num="2"
              header="The forest hiker"
              detail={tours.tourForest}
            />
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <ToursCard
              num="3"
              header="The snow adventurer"
              detail={tours.tourWinter}
            />
          </div>
        </div>
      </div>
      <div className="u-center-text u-margin-top-8">
        <a href="#" className="btn btn--green">
          Discover all tours
        </a>
      </div>
    </section>
  );
};

const tours = {
  tourSummer: {
    days: "3 day tour",
    people: "Up to 30 people",
    guides: "2 tour guides",
    sleeping: "Sleep in cozy hostels",
    difficulty: "Difficulty: very easy",
    price: "297$",
  },
  tourForest: {
    days: "7 day tour",
    people: "Up to 40 people",
    guides: "6 tour guides",
    sleeping: "Sleep in provided tents",
    difficulty: "Difficulty: medium",
    price: "497$",
  },
  tourWinter: {
    days: "5 day tour",
    people: "Up to 15 people",
    guides: "3 tour guides",
    sleeping: "Sleep in provided tents",
    difficulty: "Difficulty: hard",
    price: "897$",
  },
};

export default Tours;
