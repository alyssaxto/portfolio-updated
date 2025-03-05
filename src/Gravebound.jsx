
import "./Casestudy.css";
import { TextFade } from "./Components/TextFade"; // Ensure this import is correct
import ProgressBar from "./Components/ProgressBar/ProgressBar.jsx";
import ExpandableImage from './Components/ExpandImage.jsx';

// Header Component
const Header = () => (
  <TextFade direction="up">
  <header className="header">
    <h1 className="header__title">Designing UI for a student-led game</h1>
    <h2>Ut Dallas UI Designer ✴ Fall 2024</h2>
    <div className="image-containy">
      <a href="https://www.atec-animgames.com/game-lab" target="_blank" rel="noopener noreferrer">
        <img src="/assets/gb/15.png" alt="Image 2" className="hover-image" />
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
          <a href="https://bass.utdallas.edu/degrees/undergraduate-degrees/arts-technology-and-emerging-communication/" className="blue-link" target="_blank" rel="noopener noreferrer">
            UT Dallas
          </a>
        </div>
        <div>
          <a href="https://www.atec-animgames.com/game-lab" className="blue-link" target="_blank" rel="noopener noreferrer">
            Game Production Lab
          </a>
        </div>
      </div>

      <div className="grid__item">
        <h2>Skills —</h2>
        <div>UI Design</div>
        <div>Sketching</div>
        <div>Illustration</div>
      </div>

      <div className="grid__item">
        <h2>Timeline —</h2>
        <div>Aug - Dec 2024</div>
      </div>

      <div className="grid__item">
        <h2>Tools —</h2>
        <div>Unreal Engine</div>
        <div>Perforce</div>
        <div>Adobe Illustrator</div>
        <div>Figma</div>
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
    <Ending />

<br/>
<div class="portfolio__btn-container">
<button class="portfolio__btn"><a href="/playground">Back to Playground</a></button>
</div>
<br/>
<br/>
  </div>
);

export default App;