
import "./Casestudy.css";
import { TextFade } from "./Components/TextFade"; // Ensure this import is correct
import ProgressBar from "./Components/ProgressBar/ProgressBar.jsx";
import ExpandableImage from './Components/ExpandImage.jsx';

// Header Component
const Header = () => (
  <TextFade direction="up">
  <header className="header">
    <h1 className="header__title">Empowering other hackathons to streamline their event management</h1>
    <h2>HackUTD Product Designer ✷ Spring - Fall 2024</h2>
    <div className="image-containy">
      <a href="https://hackportal.hackutd.co/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/hackportal.png" alt="Image 2" className="hover-image" />
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
        <a href="https://hackportal.hackutd.co/" className="purple-link" target="_blank" rel="noopener noreferrer">
          Hackportal
        </a>
        <div>
          <a href="https://hackutd.co/" className="purple-link" target="_blank" rel="noopener noreferrer">
            HackUTD
          </a>
        </div>
        <div>
          <a href="https://www.acmutd.co/" className="purple-link" target="_blank" rel="noopener noreferrer">
            ACM at UTD
          </a>
        </div>
      </div>

      <div className="grid__item">
        <h2>Skills —</h2>
        <div>Design Engineering</div>
        <div>Prototyping</div>
        <div>Figma</div>
        <div>Prototyping</div>
        <div>UI/UX Design</div>
        <div>Illustration</div>
      </div>

      <div className="grid__item">
        <h2>Timeline —</h2>
        <div>June - Nov 2024</div>
      </div>

      <div className="grid__item">
        <h2>Tools —</h2>
        <div>Figma</div>
        <div>Clip Studio Paint</div>
      </div>
    </div>
  </TextFade>
);


const Top = () => (
    <TextFade direction="up">
    <div className="summary-container">
      <div className="summary-header">
        <h2>Problem Statement        </h2>
        <div className="summary-text">
          <h1>How can we help hackathons simplify and optimize their event management?</h1>
          <p>HackPortal is a website template designed specifically for hackathons. It offers an intuitive front-end and back-end solution that simplifies user registration, enhances day-of-event operations, and provides easy access to essential information. With HackPortal, hosting a hackathon becomes more efficient and user-friendly.</p>
          <h2>Examples of users:</h2>
  <ul className="summary-text-bullets">
    <li><a href="https://viii.hackutd.co/" class="purple-link" target="_blank">HackUTD VIII</a></li>
    <li><a href="https://comethackportal.vercel.app/" class="purple-link" target="_blank">CometHack 2022</a></li>
    <li><a href="https://hacksmu.org/" class="purple-link" target="_blank">HackSMU IV</a></li>
    <li><a href="https://ix.hackutd.co/" class="purple-link" target="_blank">HackUTD IX</a></li>
</ul>
        </div>
      </div>
    </div>
        </TextFade>
);



const OG = () => (
    <div>
                <TextFade direction="up">
      <div className="summary-container">
      <div className="summary-header">
        <h2>Original
        </h2>
        <div className="summary-text">
        <h1>First Version
        </h1>
 <p>This was designed by a previous member of HackUTD </p>
 <h3> Feedback I received</h3>
 <ul className="summary-text-bullets">
    <li>Make it more colorful</li>
    <li>Turn it more "modern"</li>
    </ul>
     </div>
        </div>
        <br />
        <h3>Desktop View</h3>
        <div className="figma-embed-container-desktop">
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FaigI82SImmCQhC2ZkJvJ6Y%2FOriginal-Hackportal%3Ft%3D6Md30TFEC7aCDgx5-1%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26page-id%3D0%253A1%26node-id%3D1-28"
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
    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F50gK0wGY09O15oh6ype2QL%2FOriginal-Hackportal-Mobile%3Fnode-id%3D1-60%26t%3DZn8XlwWNzuA6ebRP-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1"
    allowFullScreen
  ></iframe>
</div>

      </div>
      </TextFade>
    </div>
  );

  
const New = () => (
    <div>
                <TextFade direction="up">
      <div className="summary-container">
      <div className="summary-header">
        <h2>Second Version
        </h2>
        <div className="summary-text">
        <h1>My redesign
        </h1>
 <p>What I changed
 </p>
 <h3> Feedback I received</h3>
 <ul className="summary-text-bullets">
    <li>Added blue with the purple</li>
    <li>Changed the font to be more bubbly</li>
    </ul>
     </div>
        </div>
        <br />
        <h3>Desktop View</h3>
        <div className="figma-embed-container-desktop">
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FaigI82SImmCQhC2ZkJvJ6Y%2FOriginal-Hackportal%3Ft%3D6Md30TFEC7aCDgx5-1%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26page-id%3D0%253A1%26node-id%3D1-28"
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
    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F50gK0wGY09O15oh6ype2QL%2FOriginal-Hackportal-Mobile%3Fnode-id%3D1-60%26t%3DZn8XlwWNzuA6ebRP-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1"
    allowFullScreen
  ></iframe>
</div>

      </div>
      </TextFade>
    </div>
  );
  const HackPortal = () => (
    <TextFade direction="up">
    <header className="header">
      <h1 className="header__title">Check out the final product!</h1>
      <h2>HackUTD Product Designer ✴ Spring - Fall 2024</h2>
      <div className="image-containy">
        <a href="https://hackportal.hackutd.co/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/hackportal.png" alt="Image 2" className="hover-image" />
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
    <OG/>
    <div className="section-divider"></div>
    <div class="divider"></div>
    <New/>
    <div className="section-divider"></div>
    <div class="divider"></div>
    <HackPortal />
        <div className="section-divider"></div>
    <div class="portfolio__btn-container">
  <button class="portfolio__btn"><a href="https://github.com/acmutd/hackportal" target="_blank">View source code</a></button>
</div>
<br/>
<div class="portfolio__btn-container">
<button class="portfolio__btn"><a href="/playground">Back to Playground</a></button>
</div>
<br/>
<br/>
  </div>
);

export default App;