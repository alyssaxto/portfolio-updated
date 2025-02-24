import React from 'react';
import "./About.css";


const AboutAndGallery = () => {
  return (
    <div>
      {/* About Section */}
      <div className="about" id="about">
        <div className="about__container">
          <div className="about__img--card">
            <img src="img/imageofme.jpg" alt="Image description" />
          </div>
          <div className="about__content">
            <h1>A bit about me ✨</h1>
            <p>
              Nice to meet you, <a href="https://www.linkedin.com/in/alyssaxto/" className="pink-link" target="_blank" rel="noopener noreferrer">I'm Alyssa!</a> I’m currently studying at <a href="https://bass.utdallas.edu/degrees/undergraduate-degrees/arts-technology-and-emerging-communication/" className="pink-link" target="_blank" rel="noopener noreferrer">the University of Texas @ Dallas</a> with a Bachelors of Arts, Technology, and Emerging Communications and a concentration on <a href="index.html#Projects" className="pink-link">UX Design.</a><br /><br />
              When I'm not designing... <br /><br />
              I'm constantly expanding my <a href="artwork.html" className="pink-link">playground</a> with new illustrations, animations, and games. I also love playing new games whether it's pc games, switch games, or phone games... I'm addicted to games.
            </p>
            <button className="about__btn">
              <a href="img/AlyssaTo_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="Other Projects" id="Projects">
        <h1>My element <span id="arrow"> ↓</span></h1>
        <div className="Gallery__wrapper">
          <div className="Gallery__item">
            <h2>Making youtube videos</h2>
            <img src="img/me.png" alt="Image 1" />
          </div>
          <div className="Gallery__item">
            <h2>Building computers</h2>
            <img src="img/pc.png" alt="Image 3" />
          </div>
          <div className="Gallery__item">
            <h2>Attending hackathons</h2>
            <img src="img/hack.png" alt="Image 2" />
          </div>
        </div>
      </div>

      {/* Modal for Fullscreen Display */}
      <div id="galleryModal" className="modal">
        <span className="close">&times;</span>
        <img className="modal-content" id="modalImage" alt="Modal display" />
      </div>
    </div>
  );
};

export default AboutAndGallery;
