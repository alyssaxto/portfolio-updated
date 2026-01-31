
import "./Casestudy.css";
import { TextFade } from "./Components/TextFade.tsx"; // Ensure this import is correct
import ProgressBar from "./Components/ProgressBar/ProgressBar.jsx";
import ExpandableImage from './Components/ExpandImage.jsx';

const Header = ({ bgColor = "#DCFDFF" }) => (
  <TextFade direction="up">
    <header className="header">
      <div
        className="image-containy"
        style={{ backgroundColor: bgColor }}
      >
        <div className="image-wrapper">
          <a
            href="https://ripple.hackutd.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/ripv2.png"
              alt="HackUTD Logo"
              className="hover-image"
            />
          </a>
        </div>
      </div>

      <h1 className="header__title">
        Designing the website for North America's largest 24 hour hackathon!
      </h1>
      <h2 className="header__subtitle">
        HackUTD Product Designer ✷ Spring - Fall 2024
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
            href="https://hackutd.co/"
            className="blue-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            HackUTD
          </a>
        </div>
        <div className="grid__content">
          <a
            href="https://www.acmutd.co/"
            className="blue-link"
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
        <div className="grid__content">June - Nov 2024</div>
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
        <h2>Introduction</h2>
        <div className="summary-text">
          <h1>Why HackUTD?</h1>
          <p>
I’ve always loved building and creating, and I wanted to share that passion with others. Organizing HackUTD gave me the chance not only to inspire fellow students to bring their projects to life, but also to connect with other like-minded peers.</p>
        </div>
      </div>
        <h2 className="img-subtitle">A few of my favorite photos</h2>
        <div className="BentoBox">
        <div className="BentoBox__wrapper">
        <div className="BentoBox__item">
        <ExpandableImage src="/assets/hp/10.jpg" alt="Image 1" />
        </div>
        <div className="BentoBox__item">
        <ExpandableImage src="/assets/hp/12.jpg" alt="Image 2" />
        </div>
        </div>
        <div className="BentoBox__wrapper">
        <div className="BentoBox__item">
        <ExpandableImage src="/assets/hp/13.jpg" alt="Image 3" />
        </div>
        <div className="BentoBox__item">
        <ExpandableImage src="/assets/hp/11.png" alt="Image 4" />
        </div>
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
      <ExpandableImage src="/assets/hp/5.png" alt="User Journey" />
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
            I drew the assets using clip studio paint.
          </p>
                  <ul className="summary-text-bullets">
          <li> The corgi, duck, and frog are some of the mascots we created for this year's hackathon.</li>
<li>Other items were prizes for specific tracks, which I illustrated myself to maintain a consistent visual style.</li>
          </ul>
        </div>
      </div>

      <div className="bento-assets">
        {/* Left full image */}
        <div className="bento-left">
          <ExpandableImage src="/assets/hp/9.png" alt="User Journey" />
        </div>

        {/* Right 2-column, 3-row grid */}
        <div className="bento-right">
          <ExpandableImage src="/assets/hp/mascot.GIF" alt="Image 1" />
          <ExpandableImage src="/assets/hp/duck.GIF" alt="Image 2" />
          <ExpandableImage src="/assets/hp/frog.GIF" alt="Image 3" />
          <ExpandableImage src="/assets/hp/8.png" alt="Image 4" />
          <ExpandableImage src="/assets/hp/ducks in a row.GIF" alt="Image 5" />
          <ExpandableImage src="/assets/hp/95 koi.gif" alt="Image 6" />
              <ExpandableImage src="/assets/hp/14.png" alt="Image 3" />
          <ExpandableImage src="/assets/hp/15.png" alt="Image 4" />
          <ExpandableImage src="/assets/hp/16.png" alt="Image 5" />
          <ExpandableImage src="/assets/hp/17.png" alt="Image 6" />
        </div>
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
      <ExpandableImage src="/assets/hp/4.png" alt="User Journey" />
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
            <ExpandableImage src="/assets/hp/1.png" alt="User Journey" />
          </div>
          <br />
          <h3>First Version</h3>
          <div className="summary-image">
            <ExpandableImage src="/assets/hp/2.png" alt="User Journey" />
          </div>
          <br />
          <h3>After Feedback</h3>
          <div className="summary-image">
            <ExpandableImage src="/assets/hp/3.png" alt="User Journey" />

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
      height: "600px", // Set a default height
    }}
    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0a0ZHhOrI7UbzdZI91GGOh%2FUntitled%3Fnode-id%3D0-137%26t%3DZgyO0yoaySR58Zc3-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1"
    allowFullScreen
  ></iframe>
</div>

      </div>
      </TextFade>
    </div>
  );

  

// Header Component
const HackUTD = () => (
  <TextFade direction="up">
  <header className="header">
    <h1 className="header__title">Check out the final product!</h1>
    <h2>HackUTD Product Designer ✷ Spring - Fall 2024</h2>
    <div className="image-containy">
      <a href="https://ripple.hackutd.co/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/ripple.png" alt="Image 2" className="hover-image" />
      </a>
    </div>
          <div className="summary-container">
      <h4 className="img-subtitle">If you'd like to sponsor the next HackUTD, feel free to contact the team at <a href="mailto:Hello@hackutd.co" class="blue-link" target="_blank">hello@hackutd.co</a></h4>
      </div>
  </header>
  </TextFade>
);
const Bonus = () => (
  <TextFade direction="up">
  <div className="summary-container">
    <div className="summary-header">
    <h2>Bonus</h2>
    <div className="summary-text">
    <h1>Designing collectible pins</h1>
    <p>I drew some pins myself using Clip Studio Paint. The animal is the mascot we created for this year's hackathon.​</p>
    <br/>
    </div>
    </div>
    <h3>My pins on the merch table!</h3>
          <div className="summary-image">
            <ExpandableImage src="/assets/hp/1.jpg" alt="User Journey" />
          </div>
          <br />
          <div className="summary-image">
            <ExpandableImage src="/assets/hp/2.jpg" alt="User Journey" />
          </div>
          <br />
              <h3>Some of the other ideas I sketched</h3>
          <div className="summary-image">
            <ExpandableImage src="/assets/hp/12.png" alt="User Journey" />
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
    <div class="divider"></div>
    <Bonus />
    <br/>
    <br/>
<div class="portfolio__btn-container">
  <a href="https://github.com/hackutd/hackutd-24-site" target="_blank" class="portfolio__btn">
    View source code
  </a>
</div>

<br/>
<div class="portfolio__btn-container">
  <a href="/" class="portfolio__btn">Back to Portfolio</a>
</div>


<br/>
<br/>
  </div>
);

export default App;