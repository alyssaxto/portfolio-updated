import React from 'react';
import "./About.css";
import Profile from '/assets/newpfp.png';
import { StaggeredFade } from './Components/staggered-fade';
import { TextFade } from "./Components/TextFade";

const AboutAndGallery = () => {
  return (
    <div>
      <div className="about" id="about">
        <div className="about__container">
          <div className="about__img--card swing">
            <img src={Profile} alt="Image of Alyssa" />
          </div>

          <div className="about__content">
            <TextFade direction="up">
              <h1>
                Hi, I'm Alyssa! <span className="no-break">(｡˃ ᵕ ˂ )⸝♡</span>
              </h1>  
              <p>
                Nice to meet you! I’m a recent graduate from <a href="https://bass.utdallas.edu/degrees/undergraduate-degrees/arts-technology-and-emerging-communication/" className="about-link" target="_blank" rel="noopener noreferrer">UTD</a> with a Bachelors of Arts, Technology, and Emerging Communications and a concentration on <a href="/#Projects" className="about-link">UX Design.</a><br /><br />
              </p>
              <p>
                Ever since I was young, I knew I was meant to do something with art. I grew up drawing for fun and realized it was something you could actually do for a living after making youtube videos. From there, I discovered UX design and fell in love with it.
              </p>
            </TextFade>
          </div>
        </div>

        <StaggeredFade text="Outside of design..." className="about-heading" />

        {/* Combined polaroid wrapper */}
        <TextFade direction="up">
          <div className="polaroid-wrapper">
            <div className="polaroid-item">
              <img src="/assets/me.png" alt="Making YouTube videos" className="polaroid-image" />
              <h2 className="polaroid-caption">Making YouTube Videos</h2>
              <span className="polaroid-subtitle">Rare photo of me at 15 (ᵕ—ᴗ—)</span>
            </div>
            <div className="polaroid-item">
              <img src="/assets/pc.png" alt="Building computers" className="polaroid-image" />
              <h2 className="polaroid-caption">Building Computers</h2>
            </div>
            <div className="polaroid-item">
              <img src="/assets/mousepad.jpg" alt="Attending hackathons" className="polaroid-image" />
              <h2 className="polaroid-caption">Hiking</h2>
              <span className="polaroid-subtitle">The Santa Ana Volcano ᕙ(  •̀ ᗜ •́  )ᕗ</span>
            </div>
            <div className="polaroid-item">
              <img src="/assets/smiski.jpg" alt="Collecting Smiskis" className="polaroid-image" />
              <h2 className="polaroid-caption">Collecting Smiskis</h2>
            </div>
            <div className="polaroid-item">
              <img src="/assets/hack.png" alt="Traveling" className="polaroid-image" />
              <h2 className="polaroid-caption">Traveling</h2>
              <span className="polaroid-subtitle">Me in Tokyo, Japan ₍^. .^₎⟆</span>
            </div>
            <div className="polaroid-item">
              <img src="/assets/valorant.jpg" alt="Fueling my Caffeine Addiction" className="polaroid-image" />
              <h2 className="polaroid-caption">Fueling my Caffeine Addiction</h2>
            </div>
          </div>
        </TextFade>
      </div>
    </div>
  );
};

export default AboutAndGallery;
