import React from 'react';
import "./About.css";
import Profile from '../src/assets/imageofme.jpg';
import { StaggeredFade } from './Components/staggered-fade';
import { TextFade } from "./Components/TextFade";

const AboutAndGallery = () => {
  return (
    <div>
<div className="about" id="about">
  <StaggeredFade text="A bit about me ✨" className="about-heading" />
  <div className="about__container">
    <div className="about__img--card">
      <img src={Profile} alt="Image of Alyssa" />
    </div>
    <div className="about__content">
    <TextFade direction="up">
      <p>
        Nice to meet you, <a href="https://www.linkedin.com/in/alyssaxto/" className="pink-link" target="_blank" rel="noopener noreferrer">I'm Alyssa!</a> I’m a recent graduate from <a href="https://bass.utdallas.edu/degrees/undergraduate-degrees/arts-technology-and-emerging-communication/" className="pink-link" target="_blank" rel="noopener noreferrer">the University of Texas @ Dallas</a> with a Bachelors of Arts, Technology, and Emerging Communications and a concentration on <a href="index.html#Projects" className="pink-link">UX Design.</a><br /><br />
        When I'm not designing... <br /><br />
        I'm constantly expanding my <a href="/projects" className="pink-link">playground</a> with new illustrations, animations, and games. I also love playing new games whether it's PC games, Switch games, or phone games... I'm addicted to games.
      </p>
      </TextFade>
      <button className="about__btn">
        <a href="img/AlyssaTo_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </button>
    </div>
  </div>
  
  </div>
  </div>
  );
};

export default AboutAndGallery;
