
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
const Header = ({ bgColor = "#CDEBFF" }) => (
  <TextFade direction="up">
    <header className="header">

      <div
        className="image-containy"
        style={{ backgroundColor: bgColor }}
      >
        <div className="image-wrapper">
          <a
            href="https://www.atec-animgames.com/game-lab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/gb/21.png"
              alt="Game UI"
              className="hover-image"
            />
          </a>
        </div>
      </div>

      <h1 className="header__title">
        Designing UI for a student-led game
      </h1>

      <h2 className="header__subtitle">
        UT Dallas UI Designer ✷ Fall 2024
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
            href="https://bass.utdallas.edu/degrees/undergraduate-degrees/arts-technology-and-emerging-communication/"
            className="blue-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            UT Dallas
          </a>
        </div>

        <div className="grid__content">
          <a
            href="https://www.atec-animgames.com/game-lab"
            className="blue-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Game Production Lab
          </a>
        </div>
      </div>


      <div className="grid__item">
        <h2 className="grid__heading">Skills —</h2>
        <div className="grid__content">UI Design</div>
        <div className="grid__content">Sketching</div>
        <div className="grid__content">Illustration</div>
      </div>


      <div className="grid__item">
        <h2 className="grid__heading">Timeline —</h2>
        <div className="grid__content">Aug – Dec 2024</div>
      </div>


      <div className="grid__item">
        <h2 className="grid__heading">Tools —</h2>
        <div className="grid__content">Unreal Engine</div>
        <div className="grid__content">Perforce</div>
        <div className="grid__content">Adobe Illustrator</div>
        <div className="grid__content">Figma</div>
      </div>

    </div>
  </TextFade>
);



const Top = () => (
    <TextFade direction="up">
    <div className="summary-container">
      <div className="summary-header">
        <h2>Project Brief        </h2>
        <div className="summary-text">
          <h1>What's this game about?</h1>
          <p>
          You are a relic hunter in search of ultimate power at an ancient mage’s burial ground. Fight against waves of simple enemies and evolve the level through in-game resources. Create unique combinations of weapons, abilities, and passives to overcome the enemy horde.</p>
        </div>
      </div>
    </div>
        </TextFade>
);

const Summary = () => (
  <TextFade direction="up">
  <div className="summary-container">
    <div className="summary-header">
      <h2>First Variations</h2>
      <div className="summary-text">
        <h1>Building some sketches</h1>
        <p>These were designed inside of Figma before implementing them into Unreal Engine        </p>
      </div>
    </div>
    <div className="BentoBox">
        <div className="BentoBox__wrapper">
        <div className="BentoBox__item">
        <ExpandableImage src="/assets/gb/14.png" alt="Image 1" />
        </div>
        <div className="BentoBox__item">
        <ExpandableImage src="/assets/gb/13.png" alt="Image 2" />
        </div>
        </div>
        <div className="BentoBox__wrapper">
        <div className="BentoBox__item">
        <ExpandableImage src="/assets/gb/3.png" alt="Image 3" />
        </div>
        <div className="BentoBox__item">
        <ExpandableImage src="/assets/gb/4.png" alt="Image 4" />
        </div>
        </div>
        <div className="BentoBox__wrapper">
        <div className="BentoBox__item">
        <ExpandableImage src="/assets/gb/5.png" alt="Image 3" />
        </div>
        <div className="BentoBox__item">
        <ExpandableImage src="/assets/gb/6.png" alt="Image 4" />
        </div>
        </div>
        </div>
  </div>
  </TextFade>
);



const Assets = () => (
  <TextFade direction="up">
  <div className="summary-container">
    <div className="summary-header">
      <h2>Second Variations</h2>
      <div className="summary-text">
        <h1>Programming the UI</h1>
        <p>I had my first variations reviewed by the rest of the team and the professors</p>
        <ul className="summary-text-bullets">
          <li>Decided to go for the 3 horizontal weapon upgrades.</li>
          <li>Added some more color.</li>
          <li>Put a custom font for the title.</li>
          <li>Color coded the icons for upgrades.</li>
          </ul>
      </div>
    </div>
    <div className="BentoBox">
        <div className="BentoBox__wrapper">
        <div className="BentoBox__item">
        <ExpandableImage src="/assets/gb/7.png" alt="Image 1" />
        </div>
        <div className="BentoBox__item">
        <ExpandableImage src="/assets/gb/8.png" alt="Image 2" />
        </div>
        </div>
        <div className="BentoBox__wrapper">
        <div className="BentoBox__item">
        <ExpandableImage src="/assets/gb/9.png" alt="Image 3" />
        </div>
        <div className="BentoBox__item">
        <ExpandableImage src="/assets/gb/10.png" alt="Image 4" />
        </div>
        </div>
        <div className="BentoBox__wrapper">
        <div className="BentoBox__item">
        <ExpandableImage src="/assets/gb/11.png" alt="Image 3" />
        </div>
        <div className="BentoBox__item">
        <ExpandableImage src="/assets/gb/12.png" alt="Image 4" />
        </div>
        </div>
        </div>
  </div>
  </TextFade>
);

const Soon = () => (
  <TextFade direction="up">
    <div className="summary-container">
      <div className="summary-header">
        <h2>Third Variation</h2>
        <div className="summary-text">
          <h1>Built upon our wireframes more to better fit the theme of the game</h1>
        </div>
      </div>
    </div>
    <div className="BentoBox">
      <div className="BentoBox__wrapper">
        <div className="BentoBox__item">
          <ExpandableImage src="/assets/gb/17.png" alt="Image 1" />
        </div>
        <div className="BentoBox__item">
          <ExpandableImage src="/assets/gb/20.png" alt="Image 2" />
        </div>
      </div>
      <div className="BentoBox__wrapper">
        <div className="BentoBox__item">
          <ExpandableImage src="/assets/gb/19.png" alt="Image 3" />
        </div>
        <div className="BentoBox__item">
          <ExpandableImage src="/assets/gb/18.png" alt="Image 4" />
        </div>
      </div>
    </div>
  </TextFade>
);

const Ending = () => (
  <TextFade direction="up">
    <div className="summary-container">
      <div className="summary-header">
        <h2>Fourth Variation</h2>
        <div className="summary-text">
          <h1>Still a work in progress!</h1>
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
    <Soon />

    <div className="section-divider"></div>
    <div class="divider"></div>
    <Ending />

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