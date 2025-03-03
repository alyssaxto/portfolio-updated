import React from 'react';
import "./About.css";
import Profile from '../src/assets/imageofme.jpg';
import { StaggeredFade } from './Components/staggered-fade';
import { TextFade } from "./Components/TextFade";

const AboutAndGallery = () => {
  return (
    <div>
      <div className="about" id="about">
        <div className="about__container">
          <div className="about__img--card">
            <img src={Profile} alt="Image of Alyssa" />
          </div>
          <div className="about__content">
            <TextFade direction="up">
              <h1>Hi, I'm Alyssa!</h1>
              <p>
                Nice to meet you! I’m a recent graduate from <a href="https://bass.utdallas.edu/degrees/undergraduate-degrees/arts-technology-and-emerging-communication/" className="pink-link" target="_blank" rel="noopener noreferrer">the University of Texas @ Dallas</a> with a Bachelors of Arts, Technology, and Emerging Communications and a concentration on <a href="index.html#Projects" className="pink-link">UX Design.</a><br /><br />
              </p>
              <p>
                I come from a background of fine art but fell in love with UI/UX after discovering it in college. Unlike traditional art, it was goal-driven and functional, which deeply resonated with me.
              </p>
            </TextFade>
          </div>
        </div>

        <StaggeredFade text="Outside of design..." className="about-heading" />

        <div className="gallery-container">
        <TextFade direction="up">
  <div className="gallery-wrapper">
    <div className="gallery-item">
      <img src="./src/assets/me.png" alt="Making YouTube videos" className="gallery-image" />
      <h2 className="gallery-caption">Making YouTube Videos</h2>
    </div>
    <div className="gallery-item">
      <img src="./src/assets/pc.png" alt="Building computers" className="gallery-image" />
      <h2 className="gallery-caption">Building Computers</h2>
    </div>
    <div className="gallery-item">
      <img src="./src/assets/hack.png" alt="Attending hackathons" className="gallery-image" />
      <h2 className="gallery-caption">Attending Hackathons</h2>
    </div>
  </div>
  </TextFade>
</div>

      </div>
    </div>
  );
};

export default AboutAndGallery;
