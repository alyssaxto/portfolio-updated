
import "./Casestudy.css";
import { TextFade } from "./Components/TextFade"; // Ensure this import is correct
import ProgressBar from "./Components/ProgressBar/ProgressBar.jsx";
import ExpandableImage from './Components/ExpandImage.jsx';

// Header Component
const Header = () => (
  <TextFade direction="up">
  <header className="header">
    <h1 className="header__title">Designing a solution to help cancer patients complete their treatment</h1>
    <h2>ArtSciLab Product Designer ✷ Spring 2024 - Summer 2025</h2>
    <div className="image-containy">
      <a href="https://www.utsouthwestern.edu/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/icanmanage/c3.png" alt="Image 2" className="hover-image" />
      </a>
    </div>
  </header>
  </TextFade>
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
  <TextFade direction="up">
    <div className="grid grid-cols-2 gap-4">
      <div className="grid__item">
        <h2>Company —</h2>
        <div>
          <a href="https://www.utsouthwestern.edu/" className="blue-link" target="_blank" rel="noopener noreferrer">
            UTSouthWestern
          </a>
        </div>
        <div>
          <a href="https://artscilab.utdallas.edu/" className="blue-link" target="_blank" rel="noopener noreferrer">
            ArtSciLab
          </a>
        </div>
      </div>

      <div className="grid__item">
        <h2>Skills —</h2>
        <div>Figma</div>
        <div>Prototyping</div>
        <div>UI/UX Design</div>
        <div>Visual Design</div>
      </div>

      <div className="grid__item">
        <h2>Timeline —</h2>
        <div>Jan 2024 - June 2025</div>
      </div>

      <div className="grid__item">
        <h2>Tools —</h2>
        <div>Figma</div>
      </div>
    </div>
  </TextFade>
);



const Top = () => (
    <TextFade direction="up">
    <div className="summary-container">
      <div className="summary-header">
        <h2>Introduction</h2>
        <div className="summary-text">
          <h1>Summary</h1>
          <h3>A short description of why I began to work on this project</h3>
          <p>In spring 2024, I had the opportunity to work at a research lab, <a href="https://artscilab.utdallas.edu/" class="blue-link" target="_blank">ArtSciLab</a>, as a UX Designer. My main project was to redesign an existing program known as <a href="https://icanmanage.ca/login/index.php" class="blue-link" target="_blank">ICanManage.ca</a> to be easier for cancer patients to access.</p>

          <p>This is a case study about designing an educational program meant to provide head and neck cancer patients at UT Southwestern with effective strategies for optimizing their treatment process
          </p>
        </div>
      </div>
        </div>
        </TextFade>
);

const Summary = () => (
  <TextFade direction="up">
  <div className="summary-container">
    <div className="summary-header">
      <h2>Problem</h2>
      <div className="summary-text">
        <h1>The existing program had a 37% completion rate</h1>
        <p>Before I began designing, multiple student researchers conducted a list of what needed to be changed about this program</p>
        <ul className="summary-text-bullets">
            <li>Although the content was great, the designs needed tons of work</li>
          <li>The student researchers believed that the clip art was ineffective and suggested using stock images.</li>
          <li>The content was divided up randomly into chapters which made it difficult to navigate to specific issues.</li>
          </ul>
      </div>
    </div>
    <div className="blue-summary-image">
      <ExpandableImage src="/assets/icanmanage/c1.png" alt="User Journey" />
    </div>
  </div>
  </TextFade>
);



const Assets = () => (
  <TextFade direction="up">
      <div className="summary-container">
      <div className="summary-header">
        <h2>Style Guide</h2>
        <div className="summary-text">
        <h1>I began to brainstorm some ideas</h1>
        <p>
        I drew the assets using clip studio paint. The corgi, duck, and frog are some of the mascots we created for this year's hackathon.
        </p>
        <ul className="summary-text-bullets">
            <li>One of the compliants from the previous designs was how many colors there were.</li>
          <li>I decided to create a calming blue color palette that consisted of only four colors.</li>
          <li>From there, I was able to go into the program and begin redesigning every single screen.</li>
          </ul>
      </div>
    </div>
    <div className="blue-summary-image">
      <ExpandableImage src="/assets/icanmanage/c2.png" alt="User Journey" />
    </div>
  </div>
  </TextFade>
);


const BPPortfolio = () => (
    <div>
                <TextFade direction="up">
      <div className="summary-container">
      <div className="summary-header">
        <h2>First Prototype
        </h2>
        <div className="summary-text">
        <h1>I spent 5 months redesigning the entire program
        </h1>
 <h3>This is only the first interation of redesigns</h3>
 <p>After seeing these designs, our team was awarded over $8,000 in grants to continue research and developing the program</p>
        </div>
        </div>
        <br />
        <h3>Desktop View</h3>
        <br />
        <div className="figma-embed-container-desktop">
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="800"
            height="450"
            src="https://embed.figma.com/proto/tApzi7pBq0KBLGsy3MTURT/I-Can-Manage-Desktop?node-id=0-22&p=f&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=0%3A22&embed-host=share" allowfullscreen></iframe>
        </div>
      </div>
      </TextFade>
    </div>
  );
  const Ending = () => (
    <TextFade direction="up">
    <div className="summary-container">
      <div className="summary-header">
        <h2>What's next?</h2>
        <div className="summary-text">
          <h1>The next steps for "I Can Manage Cancer"</h1>
          <p>Before I began designing, multiple student researchers conducted a list of what needed to be changed about this program</p>
          <ul className="summary-text-bullets">
              <li><a href="https://www.utsouthwestern.edu/" class="blue-link" target="_blank">UT Southwestern</a> will use my prototype and conduct testing on cancer patients during the summer of 2024</li>
            <li>I'll come back to work at the research lab for fall 2024 and continue to reinterate my designs.</li>
            <li>I will also start developing the mobile app meant to pair with this program!.</li>
            </ul>
        </div>
      </div>
    </div>
    </TextFade>
  );
  

// App Component to include all sections
const App = () => (
  <div className="app">
        <ProgressBar />
    <Header />
    <Grid />

    <div class="divider"></div>
    <Top />
    <div class="divider"></div>
    <Summary />
    
    <div className="section-divider"></div>
    <div class="divider"></div>
    <Assets />
    <div className="section-divider"></div>
    <div class="divider"></div>
    <BPPortfolio/>
    <div className="section-divider"></div>
    <div class="divider"></div>
    <Ending/>
<br/>
<div class="portfolio__btn-container">
<button class="portfolio__btn"><a href="/">Back to Portfolio</a></button>
</div>
<br/>
<br/>
  </div>
);

export default App;