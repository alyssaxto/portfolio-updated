import React from 'react';
import "./Casestudy.css";
import { TextFade } from "./Components/TextFade"; // Ensure this import is correct
import ProgressBar from "./Components/ProgressBar/ProgressBar.jsx";
import ExpandableImage from './Components/ExpandImage.jsx';
import { Link } from "react-router-dom";



// Header Component
const Header = () => (
  <TextFade direction="up">
  <header className="header">
    <h1 className="header__title">Designing a badge to recognize designers    </h1>
    <h2>bp Product Design Internship ✴ Summer 2024</h2>
    <div className="image-containy">
      <a href="https://www.bp.com/" target="_blank" rel="noopener noreferrer">
        <img src="../src/assets/mvp/5.png" alt="Image 2" className="hover-image" />
      </a>
    </div>
  </header>
  </TextFade>
);

const Grid = () => (
  
  <TextFade direction="up">
    
    <div className="grid grid-cols-2 gap-4">
      <div className="grid__item">
        <h2>Company —</h2>
        <div>
          <a href="https://www.bp.com/" className="green-link" target="_blank" rel="noopener noreferrer">
            bp
          </a>
        </div>
      </div>

      <div className="grid__item">
        <h2>Skills —</h2>
        <div>Sketching</div>
        <div>Illustration</div>
        <div>Graphic Design</div>
      </div>

      <div className="grid__item">
        <h2>Timeline —</h2>
        <div>1 week</div>
      </div>

      <div className="grid__item">
        <h2>Tools —</h2>

          <div>Adobe Illustrator</div>

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
        <ul className="summary-text-bullets">
          <li>MVP: Best Collaboration</li>
          <li>MVP: Knowledge Guru</li>
          <li>MVP: Most Original Project</li>
          <li>MVP: Best Business Case</li>
          <li>MVP: Most All In</li>
          <li>MVP: Best All-Around</li>
        </ul>
      </div>
    </div>
    <h2>Sketches    </h2>
    <div className="summary-image">
      <ExpandableImage src= "./src/assets/mvp/4.png" alt="User Journey" />
    </div>
    <br/>
    <h2>bp's Official Color Palette </h2>
    <div className="summary-image">
      <ExpandableImage src= "./src/assets/GA/8.png" alt="User Journey" />
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
        <h2>Feedback I received        </h2>
        <ul className="summary-text-bullets">
          <li>Remove the medal next to MVP on each design</li>
          <li>Make the flag bigger to make bp's logo more visible</li>
          <li>Add the words, "2024 UX Design Bootcamp" to each badge</li>
        </ul>
      </div>
    </div>
    <div className="summary-image">
      <ExpandableImage src= "./src/assets/mvp/7.png" alt="User Journey" />
    </div>
  </div>
  </TextFade>
);

const Value = () => (
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
    <div className="summary-image">
      <ExpandableImage src= "./src/assets/GA/4.png" alt="User Journey" />
    </div>
    <br/>
    <h2>bp's Official Color Palette    </h2>
    <div className="summary-image">
      <ExpandableImage src= "./src/assets/GA/8.png" alt="User Journey" />
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
    <h2>Badge option 1</h2>
    <div className="summary-image">
      <ExpandableImage src= "./src/assets/mvp/1.png" alt="User Journey" />
    </div>
    <br/>
    <h2>Badge option 2</h2>
    <div className="summary-image">
      <ExpandableImage src= "./src/assets/mvp/2.png" alt="User Journey" />
    </div>
    <br/>
    <h2>Badge option 3</h2>
    <div className="summary-image">
      <ExpandableImage src= "./src/assets/mvp/8.png" alt="User Journey" />
    </div>
  </div>
  </TextFade>
);

const Last = () => (
    <TextFade direction="up">
    <div className="summary-container">
      <div className="summary-header">
        <h2>Third Variations      </h2>
        <div className="summary-text">
          <h1>Final Version </h1>
          <p>After presenting the idea to stakeholders from bp, the 3rd badge designs were approved          </p>
          <h3>Final feedback I received          </h3>
          <ul className="summary-text-bullets">
            <li>Make all the titles lowercase and the same size</li>
            <li>Change some of the characters to be male to represent the male designers</li>
           </ul>
        </div>
      </div>
      <div className="summary-image">
        <ExpandableImage src= "./src/assets/mvp/3.png" alt="User Journey" />
      </div>
      <br/>
      <h2>Female and male variations      </h2>
      <div className="summary-image">
        <ExpandableImage src= "./src/assets/mvp/9.png" alt="User Journey" />
      </div>
    </div>
    </TextFade>
  );

const BPPortfolio = () => (
<TextFade direction="up">
<div className="container">
    <h2>Despite only having 12 weeks, I also created other products!</h2>
    <h1>Check out the other projects I worked on at bp</h1>
    <div className="Gallery__wrapper">
      <div className="Gallery__item">
        <Link to="/Password">
          <img src="./src/assets/bp/6.png" alt="Project 1" />
        </Link>
      </div>
      <div className="Gallery__item">
        <Link to="/bpxGA">
          <img src="./src/assets/GA/7.png" alt="Project 2" />
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
    
    <div className="section-divider"></div>
    <div class="divider"></div>
    <ProblemStatement />
    <div class="divider"></div>
    <Value />
    
    <div className="section-divider"></div>
    <div class="divider"></div>
    <div className="section-divider"></div>
    <Empathize />
    <div class="divider"></div>
    <Last />
    <div class="divider"></div>

    <BPPortfolio/>
    <div class="portfolio__btn-container">
<button class="portfolio__btn"><a href="/">Back to Portfolio</a></button>
</div>
  </div>
);

export default App;