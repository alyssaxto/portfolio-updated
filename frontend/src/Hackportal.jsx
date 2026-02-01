
import "./Casestudy.css";
import { TextFade } from "./Components/TextFade.tsx"; // Ensure this import is correct
import ProgressBar from "./Components/ProgressBar/ProgressBar.jsx";
import ExpandableImage from './Components/ExpandImage.jsx';


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
// Header Component
const Header = ({ bgColor = "#F1EAFF" }) => (
  <TextFade direction="up">
    <header className="header">

      <div
        className="image-containy"
        style={{ backgroundColor: bgColor }}
      >
        <div className="image-wrapper">
          <a
            href="https://hackportal.hackutd.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/hacky.png"
              alt="Hackportal"
              className="hover-image"
            />
          </a>
        </div>
      </div>

      <h1 className="header__title">
        Empowering other hackathons to streamline their event management
      </h1>

      <h2 className="header__subtitle">
        HackUTD Product Designer ✷ Spring – Fall 2024
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
            href="https://hackportal.hackutd.co/"
            className="purple-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hackportal
          </a>
        </div>

        <div className="grid__content">
          <a
            href="https://hackutd.co/"
            className="purple-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            HackUTD
          </a>
        </div>

        <div className="grid__content">
          <a
            href="https://www.acmutd.co/"
            className="purple-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACM at UTD
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
        <div className="grid__content">June – Nov 2024</div>
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
      height: "600px", // Set a default height
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
            <h2>Second Version</h2>
            <div className="summary-text">
              <h1>My redesign</h1>
              <p>What I changed</p>
              <h3>Feedback I received</h3>
              <ul className="summary-text-bullets">
                <li>Added blue with the purple</li>
                <li>Changed the font to be more bubbly</li>
              </ul>
            </div>
          </div>
  
          <br />
          <h3>Desktop Redesign</h3>
          <div className="figma-embed-container-desktop">
            <iframe
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
              width="800"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FkozwC837rWpcUMEpj7lgtW%2FUntitled%3Fnode-id%3D0-187%26t%3DvgnqwgcVMLwNiO72-1%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26page-id%3D0%253A1"
              allowFullScreen
            ></iframe>
          </div>
  
          <br />
          <h3>Mobile Redesign</h3>
          <div className="figma-embed-container">
            <iframe
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
                width: "100%",
                height: "600px",
              }}
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0yxImzqbLzxQUxkWCgpP3n%2FHackportal-Mobile%3Fnode-id%3D0-309%26t%3DzPL45OFmYlsadt7y-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1"
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
      <h2>HackUTD Product Designer ✷ Spring - Fall 2024</h2>
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
    <div class="divider"></div>
    <OG/>
    <div class="divider"></div>
    <New/>
    <div class="divider"></div>
    <HackPortal />
        <div className="section-divider"></div>
<div class="portfolio__btn-container">
  <a href="https://github.com/acmutd/hackportal" target="_blank" class="portfolio__btn">
    View source code
  </a>
</div>

<br/>
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