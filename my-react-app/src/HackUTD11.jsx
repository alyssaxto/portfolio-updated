import Nav from "./Navbar.jsx";
import Footer from './Footer.jsx'
import "./Casestudy.css";
import { TextFade } from "./Components/TextFade"; // Ensure this import is correct
import ProgressBar from "./Components/ProgressBar/ProgressBar.jsx";
import ExpandableImage from './Components/ExpandImage.jsx';

// Header Component
const Header = () => (
  <TextFade direction="up">
  <header className="header">
    <h1 className="header__title">Designing the website for North America's largest 24 hour hackathon!</h1>
    <h2>HackUTD Product Designer ✴ Spring - Fall 2024</h2>
    <div className="image-containy">
      <a href="https://ripple.hackutd.co/" target="_blank" rel="noopener noreferrer">
        <img src="./src/assets/ripple.png" alt="Image 2" className="hover-image" />
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
      <p>
      <div>
  <a href="https://hackutd.co/" className="blue-link" target="_blank" rel="noopener noreferrer">
    HackUTD
  </a>
</div>
<div>
  <a href="https://www.acmutd.co/" className="blue-link" target="_blank" rel="noopener noreferrer">
    ACM at UTD
  </a>
</div>

</p>

    </div>
    <div className="grid__item">
      <h2>Skills —</h2>
      <ul>
        <li>Design Engineering</li>
        <li>Prototyping</li>
        <li>Figma</li>
        <li>Prototyping</li>
        <li>UI/UX Design</li>
        <li>Illustration</li>
      </ul>
    </div>
    <div className="grid__item">
      <h2>Timeline —</h2>
      <p>June - Nov 2024</p>
    </div>
    <div className="grid__item">
      <h2>Tools —</h2>
      <ul>
        <li>Figma</li>
        <li>Clip Studio Paint</li>
      </ul>
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
          <h1>Why HackUTD?</h1>
          <p>
          In my first year of college, I really didn't find the community I was looking for. I learnt of HackUTD from a member of UX club and never looked back!
          </p>
        </div>
      </div>
    </div>
        <div className="BentoBox">
        <h3>A few of my favorite photos</h3>
        <div className="BentoBox__wrapper">
        <div className="BentoBox__item">
        <ExpandableImage src="./src/assets/hp/10.jpg" alt="Image 1" />
        </div>
        <div className="BentoBox__item">
        <ExpandableImage src="./src/assets/hp/12.jpg" alt="Image 2" />
        </div>
        </div>
        <div className="BentoBox__wrapper">
        <div className="BentoBox__item">
        <ExpandableImage src="./src/assets/hp/13.jpg" alt="Image 3" />
        </div>
        <div className="BentoBox__item">
        <ExpandableImage src="./src/assets/hp/11.png" alt="Image 4" />
        </div>
        </div>
        </div>
        </TextFade>
);

const Summary = () => (
  <TextFade direction="up">
  <div className="summary-container">
    <div className="summary-header">
      <h2>Moodboard</h2>
      <div className="summary-text">
        <h1>The design team made various moodboards</h1>
        <p>Our theme this year was "pond." Since it was a semi vague theme, we wanted to make sure everyone was on the same page</p>
        <ul className="summary-text-bullets">
          <li>Creating this moodboard also allowed us to easily create a color palette.</li>
          <li>We also decided on 4 different mascot ideas for food groups.</li>
          </ul>
      </div>
    </div>
    <div className="hack-summary-image">
      <ExpandableImage src="./src/assets/hp/5.png" alt="User Journey" />
    </div>
  </div>
  </TextFade>
);



const Assets = () => (
  <TextFade direction="up">
      <div className="summary-container">
      <div className="summary-header">
        <h2>Assets</h2>
        <div className="summary-text">
        <h1>Drawing different assets</h1>
        <p>
        I drew the assets using clip studio paint. The corgi, duck, and frog are some of the mascots we created for this year's hackathon.
        </p>
        </div>
        </div>
        </div>

        <div className="BentoBox">
  <div className="BentoBox__wrapper">
    <div className="BentoBox__item">
      <ExpandableImage src="./src/assets/hp/mascot.gif" alt="Image 1" />
    </div>
    <div className="BentoBox__item">
      <ExpandableImage src="./src/assets/hp/duck.gif" alt="Image 2" />
    </div>
  </div>
  <div className="BentoBox__wrapper">
    <div className="BentoBox__item">
      <ExpandableImage src="./src/assets/hp/frog.GIF" alt="Image 3" />
    </div>
    <div className="BentoBox__item">
      <ExpandableImage src="./src/assets/hp/8.png" alt="Image 4" />
    </div>
  </div>
  <div className="BentoBox__wrapper">
    <div className="BentoBox__item">
      <ExpandableImage src="./src/assets/hp/ducks in a row.GIF" alt="Image 3" />
    </div>
    <div className="BentoBox__item">
      <ExpandableImage src="./src/assets/hp/95 koi.gif" alt="Image 4" />
    </div>
  </div>
  <div className="hack-summary-image">
      <ExpandableImage src="./src/assets/hp/9.png" alt="User Journey" />
    </div>
</div>

  </TextFade>
);

const Soon = () => (
  <TextFade direction="up">
  <div className="summary-container">
    <div className="summary-header">
    <h2>Coming soon</h2>
    <div className="summary-text">
    <h1>Designing the coming soon page</h1>
<p>We wanted to show off the hero without giving too much away
</p>
         </div>
         </div>
    <div className="summary-image">
      <ExpandableImage src="./src/assets/hp/4.png" alt="User Journey" />
    </div>
  </div>
  </TextFade>
);

// New Section for Empathize
const Hero = () => (
  <TextFade direction="up">
  <div className="summary-container">
    <div className="summary-header">
    <h2>Hero</h2>
    <div className="summary-text">
    <h1>Designing the Hero</h1>
    <h3>I drew the hero myself using Clip Studio Paint. The two animals are some of the mascots we created for this year's hackathon.​</h3>
    <br/>
    </div>
    </div>
    <h3>Sketch</h3>
          <div className="summary-image">
            <ExpandableImage src="./src/assets/hp/1.png" alt="User Journey" />
          </div>
          <br />
          <h3>First Version</h3>
          <div className="summary-image">
            <ExpandableImage src="./src/assets/hp/2.png" alt="User Journey" />
          </div>
          <br />
          <h3>After Feedback</h3>
          <div className="summary-image">
            <ExpandableImage src="./src/assets/hp/3.png" alt="User Journey" />

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
 <p>I used Figma to design the final website
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
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlP8oEPZvwknIoq8PQ9d7Ic%2FHackUTD%3Fnode-id%3D180-9734%26t%3DG2k9WtIaBYSyzykU-1%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26page-id%3D0%253A1"
            allowFullScreen
          ></iframe>
        </div>
<br/>
<h3>Mobile View</h3>
        <div className="figma-embed-container">
  <iframe
    style={{
      border: "1px solid rgba(0, 0, 0, 0.1)",
      width: "100%",  // Make iframe take full width of the container
      height: "450px", // Set a default height
    }}
    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0a0ZHhOrI7UbzdZI91GGOh%2FUntitled%3Fnode-id%3D0-137%26t%3DZgyO0yoaySR58Zc3-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1"
    allowFullScreen
  ></iframe>
</div>

      </div>
      </TextFade>

      <div className="container">
      <h3>If you'd like to sponsor the next HackUTD, feel free to contact the team at <a href="mailto:Hello@hackutd.co" class="blue-link" target="_blank">hello@hackutd.co</a></h3>
      </div>
    </div>
  );

  

// Header Component
const HackUTD = () => (
  <TextFade direction="up">
  <header className="header">
    <h1 className="header__title">Check out the final product!</h1>
    <h2>HackUTD Product Designer ✴ Spring - Fall 2024</h2>
    <div className="image-containy">
      <a href="https://ripple.hackutd.co/" target="_blank" rel="noopener noreferrer">
        <img src="./src/assets/ripple.png" alt="Image 2" className="hover-image" />
      </a>
    </div>
  </header>
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
    <div className="section-divider"></div>
    <div class="divider"></div>
    <Summary />
    
    <div className="section-divider"></div>
    <div class="divider"></div>
    <Assets />
    <div className="section-divider"></div>
    <div className="section-divider"></div>
    <div class="divider"></div>
    <Hero />
    <div className="section-divider"></div>
    <div class="divider"></div>
    <Soon />
    <div className="section-divider"></div>
    <div class="divider"></div>
    <div className="section-divider"></div>
    <div className="section-divider"></div>
    <BPPortfolio/>
    <div className="section-divider"></div>
    <div class="divider"></div>
    <HackUTD/>
    <div className="section-divider"></div>
    <div class="portfolio__btn-container">
  <button class="portfolio__btn"><a href="https://github.com/hackutd/hackutd-24-site" target="_blank">View source code</a></button>
</div>
<br/>
<div class="portfolio__btn-container">
<button class="portfolio__btn"><a href="/">Back to Portfolio</a></button>
</div>
    <Footer/>
  </div>
);

export default App;