import React from 'react';
import "./Casestudy.css";
import { TextFade } from "./Components/TextFade.tsx"; // Ensure this import is correct
import ProgressBar from "./Components/ProgressBar/ProgressBar.jsx";
import ExpandableImage from './Components/ExpandImage.jsx';
import { Link } from "react-router-dom";



// Header Component
const Header = ({ bgColor = "#FFE0B1" }) => (
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
              src="/assets/mvp/10.png"
              alt="BP Designer Badge"
              className="hover-image"
            />
          </a>
        </div>
      </div>

      <h1 className="header__title">
        Designing a badge to recognize designers
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
      <h2>The Ask</h2>
      <div className="summary-text">
        <h1>Project Brief</h1>
        <p>
        I was given a document with a project brief to begin designing
        </p>
        <p>Create 6 badge executions using the 2024 UX Design Bootcamp look and feel. Each badge should be the same with only the badge name varied. These badges will be awarded to the grads to use in their bp online profiles and email signatures. Please provide concepts for both a round badge and a more traditional badge.</p>
        <h2>The 6 badge titles        </h2>
              <div className="quote-grid-3">
        <div className="quote-cell">
          <h2>1</h2>
          <p className="quote-text">MVP: Best Collaboration</p>
        </div>

        <div className="quote-cell">
          <h2>2</h2>
          <p className="quote-text">MVP: Knowledge Guru</p>
        </div>

        <div className="quote-cell">
          <h2>3</h2>
          <p className="quote-text">MVP: Most Original Project</p>
        </div>

        <div className="quote-cell">
          <h2>4</h2>
          <p className="quote-text">MVP: Best Business Case</p>
        </div>

        <div className="quote-cell">
          <h2>5</h2>
          <p className="quote-text">MVP: Most All In</p>
        </div>

        <div className="quote-cell">
          <h2>6</h2>
          <p className="quote-text">MVP: Best All-Around
</p>
        </div>
      </div>
            {/* 3-column grid */}
      </div>

    </div>
<h2 className="img-subtitle">Sketches    </h2>
    <div className="summary-image">
      <ExpandableImage src= "/assets/mvp/4.png" alt="User Journey" />
    </div>
    <br/>
<h2 className="img-subtitle">bp's Official Color Palette </h2>
    <div className="summary-image">
      <ExpandableImage src= "/assets/GA/8.png" alt="User Journey" />
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
        <p>Since I was asked for 2-3 badges to show the stakeholders, I created three prototypes with different color palettes        </p>
<h5 className="img-subtitle">Feedback I received</h5>
        <ul className="summary-text-bullets">
          <li>Remove the medal next to MVP on each design</li>
          <li>Make the flag bigger to make bp's logo more visible</li>
          <li>Add the words, "2024 UX Design Bootcamp" to each badge</li>
        </ul>
      </div>
    </div>
    <div className="summary-image">
      <ExpandableImage src= "/assets/mvp/7.png" alt="User Journey" />
    </div>
  </div>
  </TextFade>
);
const SecondVer = () => (
  <TextFade direction="up">
  <div className="summary-container">
    <div className="summary-header">
      <h2>Second Variations      </h2>
      <div className="summary-text">
        <h1>Generating different colored banners        </h1>
        <p>For each MVP title, I created different color variations        </p>
        <ul className="summary-text-bullets">
          <li>Changed the formatting of "UX Design Bootcamp 2024" to have the year in front of the text</li>
          <li>Used colors directly from bp's color branding</li>
         </ul>
      </div>
    </div>
    <h5 className="img-subtitle">Badge Option 1</h5>
    <div className="summary-image">
      <ExpandableImage src= "/assets/mvp/1.png" alt="User Journey" />
    </div>
    <br/>
    <h5 className="img-subtitle">Badge Option 2</h5>
    <div className="summary-image">
      <ExpandableImage src= "/assets/mvp/2.png" alt="User Journey" />
    </div>
        <h5 className="img-subtitle">Badge Option 3</h5>
    <div className="summary-image">
      <ExpandableImage src= "/assets/mvp/3.png" alt="User Journey" />
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
<h5 className="img-subtitle">Final feedback I received</h5>
        <ul className="summary-text-bullets">
          <li>Make all the titles lowercase and the same size</li>
          <li>Change some of the characters to be male to represent the male designers</li>
        </ul>
      </div>
            </div>
<h2 className="img-subtitle">Badge option 1</h2>
    <div className="summary-image">
      <ExpandableImage src= "/assets/mvp/1.png" alt="User Journey" />
    </div>
    <br/>
<h2 className="img-subtitle">Badge option 2</h2>
    <div className="summary-image">
      <ExpandableImage src= "/assets/mvp/2.png" alt="User Journey" />
    </div>
    <br/>
<h2 className="img-subtitle">Badge option 3</h2>
    <div className="summary-image">
      <ExpandableImage src= "/assets/mvp/8.png" alt="User Journey" />
    </div>
    <h2 className="img-subtitle">Female and male variations</h2>
    <div className="summary-image">
      <ExpandableImage src= "/assets/mvp/9.png" alt="User Journey" />
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
        <Link to="/bpxGA">
          <img src="/assets/GA/7.png" alt="Project 2" />
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
    <SecondVer />
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