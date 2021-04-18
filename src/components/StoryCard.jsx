import React from "react";

const StoryCard = ({ s }) => {
  return (
    <div className="story">
      <figure className="story__shape">
        <img className="story__image" src={s.img} alt="" />
        <figcaption className="story__caption">{s.name}</figcaption>
      </figure>
      <div className="story__text">
        <h3 className="heading-tertiary u-margin-bottom-1-5">{s.text}</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quos
          maxime cupiditate? Veritatis magni alias odit voluptatibus amet quod
          obcaecati animi? Amet magni laudantium consectetur adipisci ipsam unde
          et quo? Veritatis magni alias odit voluptatibus amet quod obcaecati
          animi?
        </p>
      </div>
    </div>
  );
};

export default StoryCard;
