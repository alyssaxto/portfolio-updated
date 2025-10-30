import React from "react";
import Hackportal from "/assets/hackportal.png";
import Gravebound from "/assets/gb/15.png";
import BpxGA from "/assets/GA/7.png";
import MVP from "/assets/mvp/5.png";
import BB from "/assets/budgetbuddy.png";
import pink from "/assets/thinkpink/tp10.png";
import Playground from "/assets/playground.png";
import { LettersPullUp } from "./Components/letters-pull-up";
import { TextFade } from "./Components/TextFade";
import InfiniteCarousel from "./Artwork"; // <-- import carousel
import "./Components/HorizontalScroll/horizontalScroll.css";
import "./projects copy.css";


const HorizontalScroll = () => {
  return (
    <>
{/* Hero Section */}
<div className="welcome-hero">
  {/* Main Title */}
  <LettersPullUp text="Welcome to my" className="projects-title" />

  {/* Playground Image with Fade */}
  <TextFade direction="up" className="playground-image">
    <img src={Playground} alt="Playground" />
  </TextFade>

  {/* Subtitle next to image with Fade */}
  <TextFade direction="up" className="playground-subtitle-container">
    <LettersPullUp
      text="Explore some more of my work! ↓"
      className="playground-subtitle"
    />
  </TextFade>
</div>


      {/* --- Infinite Carousel inserted here --- */}
      <InfiniteCarousel />

      {/* Projects Grid */}

            <div className="playgroundTitleContainer">
  <LettersPullUp text="Extras" className="projects-title" />
            </div>
      <div className="Projects">
        <div className="Projects__wrapper index">
          <a href="/bpxGA" className="Projects__card">
            <img src={BpxGA} alt="bpxGA" />
            <h2>bp x GA Bootcamp</h2>
            <p>
              Designing badges for new grad designers to display on their profiles after completing a 12-week bootcamp.
            </p>
          </a>
          <a href="/MVP" className="Projects__card">
            <img src={MVP} alt="MVP" />
            <h2>MVP Badges</h2>
            <p>
              Creating badges to recognize new grad designers for their efforts within a 12-week bootcamp.
            </p>
          </a>
          <a href="/Hackportal" className="Projects__card">
            <img src={Hackportal} alt="Hackportal" />
            <h2>Hackportal</h2>
            <p>
              Designing an accessible website template for other hackathons to use to promote their event.
            </p>
          </a>
          <a href="/Gravebound" className="Projects__card">
            <img src={Gravebound} alt="Gravebound" />
            <h2>Gravebound</h2>
            <p>
              Creating and developing UI for a first-person shooter developed entirely by students.
            </p>
          </a>
          <a href="/BudgetBuddy" className="Projects__card">
            <img src={BB} alt="BudgetBuddy" />
            <h2>Budget Buddy</h2>
            <p>
              A mobile app case study that enhances financial decision-making skills among college students.
            </p>
          </a>
          <a href="/ThinkPink" className="Projects__card">
            <img src={pink} alt="ThinkPink" />
            <h2>Think Pink</h2>
            <p>
              A mobile app case study to help women track their menstrual cycles and make more informed decisions.
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default HorizontalScroll;
