import React from "react";
import Playground from "/assets/playground.png";
import { LettersPullUp } from "./Components/letters-pull-up";
import { TextFade } from "./Components/TextFade";
import "./projects copy.css"; // Keep your styling

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="welcome-container">
        <LettersPullUp text="Welcome to my" className="projects-title" />
      </div>

      <TextFade direction="up" className="playground-image">
        <img src={Playground} alt="Playground" />
      </TextFade>

      <TextFade direction="up" className="playground-subtitle-container">
        <LettersPullUp
          text="Explore some more of my work! ↓"
          className="playground-subtitle"
        />
      </TextFade>
    </section>
  );
};

export default HeroSection;
