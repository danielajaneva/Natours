import React from "react";

import StoryCard from "./StoryCard";
import nat8 from "../img/nat-8.jpg";
import nat9 from "../img/nat-9.jpg";
import video1 from "../img/video.mp4";
import video2 from "../img/video.webm";

const stories = {
  s1: {
    img: nat8,
    name: "Mary Smith",
    text: "I had the best week ever with my family",
  },
  s2: {
    img: nat9,
    name: "John Smith",
    text: "Wow my life is complitely different now",
  },
  //   s3: {
  //     img: nat10,
  //     name: "Alex Smith",
  //     text:""
  //   },
};

const Stories = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={video1} type="video/mp4" />
          <source src={video2} type="video/webm" />
          Your browser is not supported !!
        </video>
      </div>
      <div className="u-center-text  u-margin-buttom-8">
        <h2 className="heading-secondary">We make people genuinly happy</h2>
      </div>
      <div className="row">
        <StoryCard s={stories.s1} />
      </div>
      <div className="row">
        <StoryCard s={stories.s2} />
      </div>

      <div className="u-center-text u-margin-top-8">
        <a href="https://www.backpacker.com/stories/" className="btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
};

export default Stories;
