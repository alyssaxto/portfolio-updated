import React from 'react';
import "./About.css";
import Profile from '/assets/imageofme.jpg';
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
<h1>
  Hi, I'm Alyssa! <span className="no-break">(｡˃ ᵕ ˂ )⸝♡</span>
</h1>              <p>
                Nice to meet you! I’m a recent graduate from <a href="https://bass.utdallas.edu/degrees/undergraduate-degrees/arts-technology-and-emerging-communication/" className="pink-link" target="_blank" rel="noopener noreferrer">the University of Texas @ Dallas</a> with a Bachelors of Arts, Technology, and Emerging Communications and a concentration on <a href="/#Projects" className="pink-link">UX Design.</a><br /><br />
              </p>
              <p>
                Ever since I was young, I knew I was meant to do something with art. I grew up drawing for fun and realized it was something you could actually do for a living after making youtube videos. From there, I discovered UX design and fell in love with it.
              </p>
            </TextFade>
          </div>
        </div>

        <StaggeredFade text="Outside of design..." className="about-heading" />

        <div className="polaroid-container">
        <TextFade direction="up">
  <div className="polaroid-wrapper">
<div className="polaroid-item">
  <img src="/assets/me.png" alt="Making YouTube videos" className="polaroid-image" />
  <h2 className="polaroid-caption">Making YouTube Videos</h2>
  <span className="polaroid-subtitle">(Rare photo of me at 15!)</span>
</div>

    <div className="polaroid-item">
      <img src="/assets/pc.png" alt="Building computers" className="polaroid-image" />
      <h2 className="polaroid-caption">Building Computers</h2>
    </div>
    <div className="polaroid-item">
      <img src="/assets/mousepad.jpg" alt="Attending hackathons" className="polaroid-image" />
      <h2 className="polaroid-caption">Riding my bike</h2>
    </div>
  </div>
  <br/>
  <br/>
  </TextFade>
        <TextFade direction="up">
  <div className="polaroid-wrapper">
    <div className="polaroid-item">
      <img src="/assets/smiski.jpg" alt="Making YouTube videos" className="polaroid-image" />
      <h2 className="polaroid-caption">Collecting Smiskis</h2>
    </div>
    <div className="polaroid-item">
      <img src="/assets/hack.png" alt="Building computers" className="polaroid-image" />
      <h2 className="polaroid-caption">Traveling</h2>
        <span className="polaroid-subtitle">(Me in Tokyo, Japan)</span>
    </div>
    <div className="polaroid-item">
      <img src="/assets/valorant.jpg" alt="Attending hackathons" className="polaroid-image" />
      <h2 className="polaroid-caption">Fueling my caffeine addiction</h2>
    </div>
  </div>
  
  </TextFade>
</div>
      </div>
    </div>
  );
};

export default AboutAndGallery;
