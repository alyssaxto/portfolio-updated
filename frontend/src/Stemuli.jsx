
import "./Casestudy.css";
import { TextFade } from "./Components/TextFade.tsx"; // Ensure this import is correct
import ProgressBar from "./Components/ProgressBar/ProgressBar.jsx";
import ExpandableImage from './Components/ExpandImage.jsx';

import { useState } from "react";

// Header Component
const Header = ({ bgColor = "#FFDBB1" }) => (
  <TextFade direction="up">
    <header className="header">
      <div
        className="image-containy"
        style={{ backgroundColor: bgColor }}
      >
        <div className="image-wrapper">
          <a
            href="https://stemuli.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/stemuli/s20.png"
              alt="Stemuli Project"
              className="hover-image"
            />
          </a>
        </div>
      </div>

      <h1 className="header__title">
        Designing a way for students to gain work experience outside of school
      </h1>
      <h2 className="header__subtitle">
        Stemuli Product Designer ✷ Jan - May 2024
      </h2>
    </header>
  </TextFade>
);

// ImageBox Component (unchanged)
const ImageBox = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="image-box" onClick={openModal}>
        <img src={src} alt={alt} className="image-box" />
      </div>

      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <button className="close-btn" onClick={closeModal}>X</button>
          <img src={src} alt={alt} className="modal-content" />
        </div>
      )}
    </>
  );
};

// Grid Component
const Grid = () => (
  <TextFade direction="up">
    <div className="grid">
      <div className="grid__item">
        <h2 className="grid__heading">Company —</h2>
        <div className="grid__content">
          <a
            href="https://stemuli.net/"
            className="yellow-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stemuli
          </a>
        </div>
      </div>

      <div className="grid__item">
        <h2 className="grid__heading">Skills —</h2>
        <div className="grid__content">Design Engineering</div>
        <div className="grid__content">Prototyping</div>
        <div className="grid__content">Figma</div>
        <div className="grid__content">UI/UX Design</div>
        <div className="grid__content">Illustration</div>
      </div>

      <div className="grid__item">
        <h2 className="grid__heading">Timeline —</h2>
        <div className="grid__content">Jan - May 2024</div>
      </div>

      <div className="grid__item">
        <h2 className="grid__heading">Tools —</h2>
        <div className="grid__content">Figma</div>
        <div className="grid__content">Clip Studio Paint</div>
      </div>
    </div>
  </TextFade>
);

const Top = () => (
    <TextFade direction="up">
    <div className="summary-container">
      <div className="summary-header">
        <h2>Problem</h2>
        <div className="summary-text">
          <h1>It's difficult for college students to gain work experience through classes</h1>
          <p> The traditional approach to talent acquisition and training is undergoing a
            transformation, with digital experiences and gamification becoming integral parts of the
            process.</p>
            <p><a href="https://stemuli.net/" class="yellow-link" target="_blank">Stemuli</a> recognizes the need to adapt to these changing dynamics, making it
              imperative to incorporate training simulations and career exploration opportunities into
              their video game.</p>
        </div>
      </div>
    </div>
        </TextFade>
);

const Summary = () => (
  <TextFade direction="up">
  <div className="summary-container">
    <div className="summary-header">
      <h2>Research</h2>
      <div className="summary-text">
        <h1>We found out how financially literate UTD students are</h1>
        <p>Our team conducted interviews on a design professor at UTD and 5 college students
        </p>
                          <ul className="summary-text-bullets">

        <li>The majority of these students were concerned about gaining work experience while in college</li>
                    <li>We discovered students at UTD thought current school curriculums didn't teach students enough skills they'd use in their actual careers</li>
      </ul>
      </div>
    </div>
    <div className="yellow-summary-image">
      <ExpandableImage src="/assets/stemuli/s8.png" alt="User Journey" />
    </div>
    <div className="yellow-summary-image">
      <ExpandableImage src="/assets/stemuli/s7.png" alt="User Journey" />
    </div>
  </div>
  </TextFade>
);


const Assets = () => (
  <TextFade direction="up">
    <div className="summary-container">
      <div className="summary-header">
        <h2>Competitive Analysis</h2>
        <div className="summary-text">
          <h1>We looked at other educational VR programs to gain a better understanding</h1>
          <ul className="summary-text-bullets">
            <li>Each of our group members picked a competitor to analyze what they were doing right</li>
            <li>The companies we looked at were Axon Park, ClassVR, Wisepath SkillQuest, Inspirit, and Filament Games</li>
            <li>We discovered that a lot of these educational games tended to use a reward system to encourage users to learn more</li>
          </ul>
          <br/>
        </div>
      </div>

      <div className="yellow-summary-image">
        <ExpandableImage src="/assets/stemuli/s15.png" alt="User Journey" />
      </div>
    </div>
  </TextFade>
);


const Soon = () => (
  <TextFade direction="up">
  <div className="summary-container">
    <div className="summary-header">
    <h2>Design Statement</h2>
    <div className="summary-text">
    <h1>Problem Statement:</h1>
<p>When college students interested in the STEM career fields want to explore their options and seek to learn more about a specific career, they need an app that will help them gain insightful knowledge and real-world experience that a standard post-secondary education curriculum might not.
</p>
<h1>Segment Of Interest:</h1>
<p>Our segment of interest is college students who are getting ready to enter the workforce, with a focus on becoming a product designer as a career.</p>
         <h1>Mandatories:</h1>
         <p>Our designed object must contain an intuitive career pathway with the necessary skills and experience a product designer will need, as well as a way to network and gain advice from real-world professionals. The designed object must avoid incomprehensible information that is difficult to digest.</p>
         </div>
         </div>
    <div className="yellow-summary-image">
      <ExpandableImage src="/assets/stemuli/s2.png" alt="User Journey" />
    </div>
  </div>
  </TextFade>
);

// New Section for Empathize
const Hero = () => (
  <TextFade direction="up">
  <div className="summary-container">
    <div className="summary-header">
    <h2>User Persona
    </h2>
    <div className="summary-text">
    <h1>Then designed a typical user for our app    </h1>
            <ul className="summary-text-bullets">

    <li>A lot of the students our group conducted interviews on were computer science majors</li>
            <li>A very big concern was securing internships with the current job market</li>
            <li>Throughout the case study, this personas served as a compass, guiding our research, design choices, and usability testing scenarios, ensuring that our solutions were user-centric and aligned with the app's goals.</li>
            </ul>

    <br/>
    </div>
    <div className="yellow-summary-image">
      <ExpandableImage src="/assets/stemuli/s3.png" alt="User Journey" />
    </div>

          </div>
          </div>  
    </TextFade>
);

// New Section for Empathize
const User = () => (
    <TextFade direction="up">
    <div className="summary-container">
      <div className="summary-header">
      <h2>User Journey
      </h2>
      <div className="summary-text">
      <h1>We mapped out how users might interact with our app      </h1>
      <p>By mapping out these user journeys, we were able to better visualize how users would interact with our app</p>
      </div>
      <div className="yellow-summary-image">
        <ExpandableImage src="/assets/stemuli/s4.png" alt="User Journey" />
      </div>
      <div className="yellow-summary-image">
        <ExpandableImage src="/assets/stemuli/s5.png" alt="User Journey" />
      </div>
      <div className="yellow-summary-image">
        <ExpandableImage src="/assets/stemuli/s6.png" alt="User Journey" />
      </div>
      <div className="yellow-summary-image">
        <ExpandableImage src="/assets/stemuli/s16.png" alt="User Journey" />
      </div>
            </div>
            </div>  
      </TextFade>
  );

// New Section for Empathize
const Features = () => (
    <TextFade direction="up">
    <div className="summary-container">
      <div className="summary-header">
      <h2>Low Fidelity Wireframes
      </h2>
      <div className="summary-text">
      <h1>We created a list of features then producted some low fidelity wireframes
      </h1>
      </div>
      <div className="yellow-summary-image">
        <ExpandableImage src="/assets/stemuli/s9.png" alt="User Journey" />
      </div>
      <div className="yellow-summary-image">
        <ExpandableImage src="/assets/stemuli/s11.png" alt="User Journey" />
      </div>
      <div className="yellow-summary-image">
        <ExpandableImage src="/assets/stemuli/s12.png" alt="User Journey" />
      </div>
      <div className="yellow-summary-image">
        <ExpandableImage src="/assets/stemuli/s13.png" alt="User Journey" />
      </div>
            </div>
            </div>  
      </TextFade>
  );
const Prototypes = () => (
  <TextFade direction="up">
  <div className="summary-container">
    <div className="summary-header">
      <h2>Second Low Fidelity Prototypes      </h2>
      <div className="summary-text">
        <h1>We narrowed down our screens        </h1>
        <p>We filtered through our original designs to settle on 1 desktop screen and 3 mobile screens.</p>
        <ul className="summary-text-bullets">
          <li>We combined our desktop screens to be scrollable instead of two seperate screens.</li>
          <li>After surveying multiple students, our group decided that the most important features were the homepage, game menu, and game view.</li>
        </ul>
      </div>
      <div className="yellow-summary-image">
        <ExpandableImage src="/assets/stemuli/s14.png" alt="User Journey" />
      </div>
    </div>
  </div>
  </TextFade>
);
const BPPortfolio = () => (
    <div>
                <TextFade direction="up">
      <div className="summary-container">
      <div className="summary-header">
        <h2>Conclusion
        </h2>
        <div className="summary-text">
        <h1>Final Prototype
        </h1>
 <p>Our team developed our final prototypes in Figma
 </p>
        </div>
        </div>
        <br />
        <h3>Desktop View</h3>
        <div className="figma-embed-container-desktop">
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FjC8bRdUc7PZ1sPcDVLO5It%2FStemuli-Desktop%3Fnode-id%3D239-293%26t%3DqfjJnqmu7H8kCVds-1"
            allowFullScreen
          ></iframe>
        </div>
<br/>
<h3>Mobile View</h3>
        <div className="figma-embed-container">
  <iframe
    style={{
      border: "1px solid rgba(0, 0, 0, 0.1)",
      width: "800",  // Make iframe take full width of the container
      height: "600px", // Set a default height
    }}
    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FmRSgpoAHOn6Zj9JFmeDZ1C%2FStemuli-Mobile%3Fnode-id%3D393-359%26starting-point-node-id%3D393%253A359%26t%3D37uQshYzr7x0TUaP-1"
    allowFullScreen
  ></iframe>
</div>
<div className="section-divider"></div>
      </div>
      </TextFade>
    </div>
  );

  

// App Component to include all sections
const App = () => (
  <div className="app">
        <ProgressBar />
    <Header />
    <Grid />
    <div class="divider"></div>
    <Top />
    <div className="section-divider"></div>
    <div class="divider"></div>
    <Summary />
    
    <div className="section-divider"></div>
    <div class="divider"></div>
    <Assets />
    <div className="section-divider"></div>
    <div class="divider"></div>
    <Soon />
    <div className="section-divider"></div>
    <div class="divider"></div>
    <Hero />
    <div className="section-divider"></div>
    <div class="divider"></div>
    <User />
    <div className="section-divider"></div>
    <div class="divider"></div>
    <Features />
    <div className="section-divider"></div>
    <div class="divider"></div>
    <Prototypes />
    <div className="section-divider"></div>
    <div class="divider"></div>

    <BPPortfolio/>
<div class="portfolio__btn-container">
  <a href="/" class="portfolio__btn">Back to Portfolio</a>
</div>
<br/>
<br/>
  </div>
);

export default App;