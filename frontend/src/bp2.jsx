import React from 'react';
import "./Casestudy.css";
import { TextFade } from "./Components/TextFade.tsx"; // Ensure this import is correct
import ProgressBar from "./Components/ProgressBar/ProgressBar.jsx";
import ExpandableImage from './Components/ExpandImage.jsx';
import { Link } from "react-router-dom";


// Header Component
const Header = ({ bgColor = "#D5F3CC" }) => (
  <TextFade direction="up">
    <header className="header">
      <div
        className="image-containy"
        style={{ backgroundColor: bgColor }}
      >
        <div className="image-wrapper">
          <a
            href="https://www.bp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/GA/5.png"
              alt="BP x General Assembly Project"
              className="hover-image"
            />
          </a>
        </div>
      </div>

      <h1 className="header__title">
        Designing co-branded digital badges for bp and General Assembly
      </h1>
      <h2 className="header__subtitle">
        bp Product Design Internship ✷ Summer 2024
      </h2>
    </header>
  </TextFade>
);

// Grid Component
const Grid = () => (
  <TextFade direction="up">
    <div className="grid">
      <div className="grid__item">
        <h2 className="grid__heading">Company —</h2>
        <div className="grid__content">
          <a
            href="https://www.bp.com/"
            className="green-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            bp
          </a>
        </div>
        <div className="grid__content">
          <a
            href="https://generalassemb.ly/"
            className="green-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            General Assembly
          </a>
        </div>
      </div>

      <div className="grid__item">
        <h2 className="grid__heading">Skills —</h2>
        <div className="grid__content">Sketching</div>
        <div className="grid__content">Illustration</div>
        <div className="grid__content">Graphic Design</div>
      </div>

      <div className="grid__item">
        <h2 className="grid__heading">Timeline —</h2>
        <div className="grid__content">1 week</div>
      </div>

      <div className="grid__item">
        <h2 className="grid__heading">Tools —</h2>
        <div className="grid__content">Adobe Illustrator</div>
      </div>
    </div>
  </TextFade>
);




const ExecutiveSummary = () => (
  <TextFade direction="up">
  <div className="summary-container">
    <div className="summary-header">
      <h2>Sketching</h2>
      <div className="summary-text">
        <h1>Project Brief</h1>
        <p>
        I was provided a project brief with the visual graphic requirements and objectives with the following direction:
        </p>
        <ul className="summary-text-bullets">
          <li>Include the phrase “2024 UX Design Bootcamp”</li>
          <li>Very one dimensional</li>
          <li>Black and pink, or black and purple</li>
          <li>Futuristic, not starwars or too techy</li>
          <li>“Design for the future”</li>
          <li>Connect GA and Helios logo</li>
        </ul>
      </div>
    </div>
    <div className="summary-image">
      <ExpandableImage src= "/assets/GA/3.png" alt="User Journey" />
    </div>
  </div>
  </TextFade>
);



const ProblemStatement = () => (
  <TextFade direction="up">
  <div className="summary-container">
    <div className="summary-header">
      <h2>First Variations      </h2>
      <div className="summary-text">
        <h1>Building upon my sketches        </h1>
        <p>Since I was asked for 3-4 badges to show the stakeholders, I created three prototypes with different color palettes        </p>
        <ul className="summary-text-bullets">
          <li>I used purple per the project brief.</li>
          <li>However, I also decided to use green since it's such a big part of bp's branding.</li>
        </ul>
      </div>
    </div>
    <div className="summary-image">
      <ExpandableImage src= "/assets/GA/2.png" alt="User Journey" />
    </div>
    <div className="section-divider"></div>

  </div>
  </TextFade>
);

const Value = () => (
  <TextFade direction="up">
  <div className="summary-container">
    <div className="summary-header">
      <h2>Second Variations      </h2>
      <div className="summary-text">
        <h1>Revising and editing        </h1>
        <p>I had my first variations reviewed by a senior designer, who gave me some helpful feedback</p>
        <ul className="summary-text-bullets">
          <li>Changed the "UX Design Bootcamp 2024" to have the year in front.</li>
          <li>Revised the colors to be more aligned with bp's official color palette.</li>
          <li>Simplified the wireframes.</li>
          <li>Seperated the <a href="https://www.bp.com/" class="green-link" target="_blank">bp</a> and <a href="https://generalassemb.ly/" class="green-link" target="_blank">General Assembly</a> logos more</li>
        </ul>
      </div>
    </div>
    <div className="summary-image">
      <ExpandableImage src= "/assets/GA/4.png" alt="User Journey" />
    </div>
    <br/>
<h2 className="img-subtitle">bp's Official Color Palette</h2>
    <div className="summary-image">
      <ExpandableImage src= "/assets/GA/8.png" alt="User Journey" />
    </div>
  </div>
  </TextFade>
);

// New Section for Empathize
const Empathize = () => (
  <TextFade direction="up">
  <div className="summary-container">
    <div className="summary-header">
      <h2>Third Variation      </h2>
      <div className="summary-text">
        <h1>Final Version        </h1>
        <p>After presenting the badges to stakeholders from both bp and General Assembly, this is what was approved        </p>
      </div>
    </div>
    <div className="summary-image">
      <ExpandableImage src= "/assets/GA/5.png" alt="User Journey" />
    </div>
    <br/>

    <h2 className="img-subtitle">Final badge displayed on a UX grad’s LinkedIn profile</h2>

    <div className="summary-image">
      <ExpandableImage src= "/assets/GA/6.png" alt="User Journey" />
    </div>
  </div>
  </TextFade>
);

const BPPortfolio = () => (
<TextFade direction="up">
<div className="container">
  <h2 className="img-subtitle">Despite only having 12 weeks, I also created other products! </h2>
    <h1>Check out the other projects I worked on at bp</h1>
    <div className="Gallery__wrapper">
      <div className="Gallery__item">
        <Link to="/bpProject">
          <img src="/assets/bp/6.png" alt="Project 1" />
        </Link>
      </div>
      <div className="Gallery__item">
        <Link to="/mvp">
          <img src="/assets/mvp/5.png" alt="Project 2" />
        </Link>
      </div>
    </div>
  </div>
  </TextFade>
  );

  

// App Component to include all sections
const App = () => (
  <div className="app">
    <ProgressBar/>
    <Header />
    <Grid />
    <div class="divider"></div>

    <ExecutiveSummary />
    <div class="divider"></div>
    <ProblemStatement />
    <div class="divider"></div>
    <Value />
        <div class="divider"></div>
    <Empathize />
    <div class="divider"></div>
 
    <BPPortfolio/>
<div class="portfolio__btn-container">
  <a href="/playground" class="portfolio__btn">
    Back to Playground
  </a>
</div>

<br/>
<br/>
  </div>
);

export default App;