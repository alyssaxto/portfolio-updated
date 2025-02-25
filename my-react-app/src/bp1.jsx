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

const SixthToEighthSections = () => (
    <div>
      <div className="container">
        <h2>User Personas</h2>
        <h1>I developed 3 different personas using the research I conducted</h1>
        <h2>These user personas were meant to identify the different needs and wants of various roles</h2>
        <br />
        <div className="bullets">
          <p>Due to time constraints, I wasn't able to interview any non-designers officially</p>
          <p>However, I did user interviews with various designers to gain more diverse opinions</p>
          <p>I focused on which roles would have the highest use cases for my user personas​</p>
        </div>
        <div className="image-container">
          <h3>Regular bp employee</h3>
          <h2>(Non-designer)</h2>
          <div className="bullet-image">
            <img src="./src/assets/bp/Slide14.jpg" alt="User Journey" />
          </div>
          <h3>Content designer</h3>
          <div className="bullet-image">
            <img src="./src/assets/bp/Slide12.jpg" alt="User Journey" />
          </div>
          <h3>Service designer</h3>
          <div className="bullet-image">
            <img src="./src/assets/bp/Slide13.jpg" alt="User Journey" />
          </div>
        </div>
      </div>

      {/* Seventh Section */}
      <div className="container">
        <h2>Ideate</h2>
        <h1>Feature prioritization 2x2 matrix</h1>
        <h2>Recognizing that I can't tackle everything at once, I created this 2x2 matrix to help identify and prioritize the most important tasks.</h2>
        <div className="image-container">
          <div className="bullet-image">
            <img src="./src/assets/bp/3.png" alt="Features" />
          </div>
          <h2>Based off of this, I didn't include:</h2>
          <div className="bullets">
            <p>Light and dark mode</p>
            <p>Randomize button for specific purposes</p>
          </div>
        </div>
      </div>

      {/* Eighth Section */}
      <div className="container">
        <h2>Mid fidelity wireframes​</h2>
        <h1>By referencing the most important features, I was able to begin sketching</h1>
        <h2>Testing out different formats using Sketch</h2>
        <div className="image-container">
          <div className="bullet-image">
            <img src="./src/assets/bp/5.png" alt="User Journey" />
          </div>
        </div>
      </div>

      <div className="container">
        <h2>User flow diagram​</h2>
        <h1>Allowing stakeholders to see how the user would interact with this product​</h1>
        <h2>I created 3 different pathways depending on the user's current skills</h2>
        <div className="image-container">
          <div className="bullet-image">
            <img src="./src/assets/bp/4.png" alt="User Journey" />
          </div>
        </div>
      </div>
    </div>
);

const BPPortfolio = () => (
    <div>
      <div className="container">
        <h2>Prototype</h2>
        <h1>First iteration of high fidelity wireframes</h1>
        <h2>
          While the original prototypes were designed in Sketch, I converted them into a clickable Figma file to embed in this portfolio
        </h2>
        <br />
        <div className="figma-embed-container-desktop">
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fmq1WIFQLOCskfwMsxBv9g8%2FAI-Image-Generator-Prototype%3Fnode-id%3D2-3%26t%3DkOCzTyuvzuhXOwfd-1%26scaling%3Dcontain%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A3"
            allowFullScreen
          ></iframe>
        </div>
        <div className="section-divider"></div>
        <div className="video-container">
          <iframe
            width="1000"
            height="auto"
            src="https://www.youtube.com/embed/WFFLXDZYfOo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
      <div className="container">
        <h2>Usability testing</h2>
        <h1>I conducted usability testing with 5 participants</h1>
        <h2>I interviewed both designers and non-design employees</h2>
        <br />
        <div className="image-container">
          <h3>Assisted image prompter</h3>
          <div className="bullet-image"><img src="./src/assets/bp/Slide22.jpg" alt="User Journey" /></div>
          <br />
          <h3>Side bar</h3>
          <div className="bullet-image"><img src="./src/assets/bp/Slide23.jpg" alt="User Journey" /></div>
          <br />
          <h3>Regenerator tool</h3>
          <div className="bullet-image"><img src="./src/assets/bp/Slide24.jpg" alt="User Journey" /></div>
        </div>
        <br />
        <h3>Download button</h3>
        <div className="bullet-image"><img src="./src/assets/bp/Slide26.jpg" alt="User Journey" /></div>
      </div>

      <div className="container">
        <h2>Conclusion</h2>
        <h1>Final Prototype</h1>
        <h2>The final prototype was created using Sketch</h2>
        <br />
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IvIMcV9LiLA?si=lazEPzXBTWd9M0GA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <br />
        <div className="portfolio__btn-container">
          <button className="portfolio__btn">
            <a href="https://www.sketch.com/s/c9b990dc-07b7-475c-bc85-7f25983cddba/prototype/0BA96799-2455-47F0-B616-F78B30FCBFCE/a/0BA96799-2455-47F0-B616-F78B30FCBFCE" target="_blank">
              Clickable Sketch Prototype
            </a>
          </button>
        </div>
      </div>

      <div className="container">
        <h2>Summary</h2>
        <h1>A summer at bp</h1>
        <h2>
          I am immensely grateful to have had the opportunity to intern at such an incredible company! I want to extend my heartfelt thanks to the entire design and change management team for their mentorship and warm welcome. Everyone's support and guidance have been invaluable.
        </h2>
        <br />
        <h3>A few of my favorite photos</h3>
        <div className="Gallery__wrapper">
          <div className="Gallery__item"><img src="./bp/4.jpg" alt="Image 1" /></div>
          <div className="Gallery__item"><img src="img/bp/2.jpg" alt="Image 2" /></div>
        </div>
        <div className="Gallery__wrapper">
          <div className="Gallery__item"><img src="img/bp/3.jpg" alt="Image 3" /></div>
          <div className="Gallery__item"><img src="img/bp/1.jpg" alt="Image 4" /></div>
        </div>
      </div>

      <div className="container">
        <h2>Despite only having 12 weeks, I also created other products!</h2>
        <h1>Check out the other projects I worked on at bp</h1>
        <div className="Gallery__wrapper">
          <div className="Gallery__item">
            <a href="bpxGA.html"><img src="img/GA/7.png" alt="Project 1" /></a>
          </div>
          <div className="Gallery__item">
            <a href="mvp.html"><img src="img/mvp/5.png" alt="Project 2" /></a>
          </div>
        </div>
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
    <div className="section-divider"></div>
    <SixthToEighthSections/>
    <div className="section-divider"></div>
    <BPPortfolio/>
  </div>
);

export default App;