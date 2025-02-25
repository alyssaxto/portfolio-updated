import React from 'react';
import "./Casestudy.css";

// Header Component
const Header = () => (
  <header className="header">
    <h1 className="header__title">Designing an accessible way for bp employees to create the images they need</h1>
    <h2>bp Product Design Internship ✴ Summer 2024</h2>
    <div className="image-containy">
      <a href="https://www.bp.com/" target="_blank" rel="noopener noreferrer">
        <img src="./src/assets/bp/6.png" alt="Image 2" className="hover-image" />
      </a>
    </div>
  </header>
);

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

// Grid Component for Company, Skills, Timeline, and Tools
const Grid = () => (
  <div className="grid grid-cols-2 gap-4">
    <div className="grid__item">
      <h2>Company —</h2>
      <p>
  <a href="https://www.bp.com/" className="green-link" target="_blank" rel="noopener noreferrer">
    bp
  </a>
</p>

    </div>
    <div className="grid__item">
      <h2>Skills —</h2>
      <ul>
        <li>User Research</li>
        <li>User Personas</li>
        <li>Usability Testing</li>
        <li>Prototyping</li>
        <li>UI/UX Design</li>
        <li>Design Thinking</li>
        <li>AI Tool Usage</li>
      </ul>
    </div>
    <div className="grid__item">
      <h2>Timeline —</h2>
      <p>May - August 2024</p>
    </div>
    <div className="grid__item">
      <h2>Tools —</h2>
      <ul>
        <li>Sketch</li>
        <li>Mural</li>
      </ul>
    </div>
  </div>
);

// Executive Summary Component
const ExecutiveSummary = () => (
  <div className="container">
    <h2>Executive Summary</h2>
    <h1>How are bp employees currently sourcing images?</h1>
    <h2>
      At the beginning of my internship, my mentor and I discussed several potential summer projects. I was particularly drawn to
      the idea of developing a tool that would empower users to easily create or discover images.
    </h2>
    <h3>Current user flow</h3>
    <div className="image-box">
      <img src="./src/assets/bp/10.png" alt="User Journey" className="image-box" />
    </div>
  </div>
);



// Problem Statement Component
const ProblemStatement = () => (
  <div className="container">
    <h2>Problem Statement</h2>
    <h1>How might we enable bp employees to create generative AI images?</h1>
    <div className="bullets">
      <p>Designers and bp employees alike all use images every day.</p>
      <p>However, finding these images can be difficult and time-consuming.</p>
      <p>How can we make it easier for these employees to access images that suit their needs?</p>
    </div>
  </div>
);
const Value = () => (
  <div className="container">
    <h2>Value</h2>
    <h1>Why bp needs generative image AI</h1>
    <h2>
      How does this product align with &nbsp;
      <a href="https://www.bp.com/en/global/corporate/who-we-are/our-beliefs-and-code-of-conduct.html" className="green-link" target="_blank" rel="noopener noreferrer">
         bp's code of conduct?
      </a>
    </h2>
    <br />
    <div className="quote-grid">
      <div className="quote-cell">
        <h2>Live our purpose​</h2>
        <p className="quote-text">By having an approved image generator, it improves safety by protecting bp's data​</p>
      </div>
      <div className="quote-cell">
        <h2>Care for others​</h2>
        <p className="quote-text">This use case for this tool is an endless ocean of opportunity</p>
      </div>
      <div className="quote-cell">
        <h2>Play to win​</h2>
        <p className="quote-text">AI image generators will enhance bp's efficiency and improve the company's leadership within the energy sector</p>
      </div>
    </div>
    <div className="section-divider"></div>
    <div className="image-box">
      <img src="./src/assets/bp/9.png" alt="Features" className="image-box" />
    </div>
  </div>
);

// New Section for Empathize
const Empathize = () => (
  <div className="container">
    <h2>Empathize</h2>
    <h1>I developed a research plan</h1>
    <h2>Research Objectives​</h2>
    <br />
    <div className="number-box">
      <div className="number">1.</div>
      <div className="text">Why do users need this product?​</div>
    </div>

    <div className="number-box">
      <div className="number">2.</div>
      <div className="text">What barriers are there?</div>
    </div>

    <div className="number-box">
      <div className="number">3.</div>
      <div className="text">How can this product add value to bp?​</div>
    </div>
  </div>
);
// Quantitative Data Component
const QuantitativeData = () => (
  <div className="container">
    <h2>Quantitative data</h2>
    <h1>Sending out a survey to bphxd</h1>
    <h2>After 2 weeks, here are the key findings of my survey</h2>
    <br />
    <h4><span className="lime-highlight">19</span> participants</h4>
    <br />
    <div className="bullets">
      <p><span className="lime-highlight">42% </span>of participants have no experience with AI image generators</p>
      <p><span className="grey-highlight">This indicates that a significant portion of bp employees currently lack experience with AI image generators.</span></p>
      <br />
      <p><span className="lime-highlight">100% </span>of participants use images within their work</p>
      <p><span className="grey-highlight">This number shows that every single participant would have a use case for an AI image generator.</span></p>
      <br />
      <p><span className="lime-highlight">36% </span> of participants already integrate AI image generators into their work at bp</p>
      <p><span className="grey-highlight">Since bp doesn't have an approved internal tool, some employees might unintentionally be using bp's data to train AI models without realizing it.</span></p>
      <br />
      <p>The <span className="lime-highlight">top 3 purposes of images </span> are for presentations, infographics, and design</p>
      <p>The <span className="lime-highlight">top 2 style of images </span> are stock images (primarily photography) and illustrations</p>
    </div>
  </div>
);

// Qualitative Data Component
const QualitativeData = () => (
  <div className="container">
    <h2>Qualitative Data</h2>
    <h1>I organized 6 user interviews with designers at bp</h1>
    <h2>I conducted these interviews 1 on 1, recording each of them so I would be able to reference them later</h2>
    <br />
    <div className="image-container">
      <div className="bullet-image">
        <img src="./src/assets/bp/1.png" alt="User Journey" />
      </div>
    </div>
  </div>
);

// Affinity Mapping Section
const AffinityMapping = () => (
  <div className="container">
    <h2>Affinity Mapping</h2>
    <h1>Using these interviews, I was able to start affinity mapping</h1>
    <h3>These are the 6 most important themes I gathered from my user interviews</h3>
    <div className="quote-grid">
      <div className="quote-cell">
        <h2>Current resources are lacking</h2>
        <p className="quote-text">"BP's Image library is incredibly corporate and focused on more of our facilities."</p>
      </div>
      <div className="quote-cell">
        <h2>Various designers gain value</h2>
        <p className="quote-text">"We need imagery to tell our stories and show that people are at the heart of our business."</p>
      </div>
      <div className="quote-cell">
        <h2>Increasing speed</h2>
        <p className="quote-text">"It would save me from that three-week waiting time from the photography teams to capture those images."</p>
      </div>
      <div className="quote-cell">
        <h2>Generating concepts</h2>
        <p className="quote-text">"In enterprise environments, we often lack the creativity to explain an idea without absolutely delivering the definition of it."</p>
      </div>
      <div className="quote-cell">
        <h2>Current experiences</h2>
        <p className="quote-text">"You have to massage it about 50 times to get what you need."</p>
      </div>
      <div className="quote-cell">
        <h2>Concerns</h2>
        <p className="quote-text">"We should have a note to let people know that this is not realistic."</p>
      </div>
    </div>
    <div className="section-divider"></div>
    <div className="image-box">
      <img src="./src/assets/bp/2.png" alt="Features" className="image-box" />
    </div>
  </div>
);

// App Component to include all sections
const App = () => (
  <div className="app">
    <Header />
    <Grid />
    <ExecutiveSummary />
    <div className="section-divider"></div>
    <ProblemStatement />
    <div className="section-divider"></div>
    <Value />
    <div className="section-divider"></div>
    <Empathize />
    <div className="section-divider"></div>
    <QuantitativeData />
    <div className="section-divider"></div>
    <QualitativeData />
    <div className="section-divider"></div>
    <AffinityMapping />
  </div>
);

export default App;