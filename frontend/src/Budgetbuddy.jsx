
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
const Header = ({ bgColor = "#E0FFF0" }) => (
  <TextFade direction="up">
    <header className="header">
      <div className="image-containy" style={{ backgroundColor: bgColor }}>
        <div className="image-wrapper">
          <a
            href="https://www.figma.com/file/iafgf5x8oYTw2NxjMQiReb/Untitled?type=design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/budgetbuddy.png"
              alt="BudgetBuddy Logo"
              className="hover-image"
            />
          </a>
        </div>
      </div>

      <h1 className="header__title">
        Helping college students improve their financial literacy
      </h1>
      <h2>Class Project ✷ Spring 2023</h2>
    </header>
  </TextFade>
);

// Grid Component for Class, Skills, Timeline, and Tools
const Grid = () => (
  <TextFade direction="up">
    <div className="grid grid-cols-2 gap-4">
      
      <div className="grid__item">
        <h2 className="grid__heading">Class —</h2>
        <div className="grid__content">
          Design Research Methods
        </div>
      </div>

      <div className="grid__item">
        <h2 className="grid__heading">Skills —</h2>
        <div className="grid__content">Research</div>
        <div className="grid__content">User Personas</div>
        <div className="grid__content">Usability Testing</div>
        <div className="grid__content">Prototyping</div>
        <div className="grid__content">UI/UX Design</div>
      </div>

      <div className="grid__item">
        <h2 className="grid__heading">Timeline —</h2>
        <div className="grid__content">Jan 2023 - May 2023</div>
      </div>

      <div className="grid__item">
        <h2 className="grid__heading">Tools —</h2>
        <div className="grid__content">Figma</div>
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
          <h1>College students are barely financially literate          </h1>
          <h3>Through a survey sent out to UTD students, we learned that          </h3>
        <ul className="summary-text-bullets">
            <li>The majority of these students rated themselves between 5 to 6 on a scale of 10.</li>
          <li>We discovered students at UTD are just barely above average when it comes to financial literacy.</li>
          </ul>
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
        <h1>We found out how financially literate UTD students are        </h1>
        <h3>Our team conducted a focus group utilizing 10 participants to rate their overall financial literacy as college students
        </h3>
        <ul className="summary-text-bullets">
            <li>Although the content was great, the designs needed tons of work</li>
          <li>The student researchers believed that the clip art was ineffective and suggested using stock images.</li>
          <li>The content was divided up randomly into chapters which made it difficult to navigate to specific issues.</li>
          </ul>
      </div>
    </div>
    <div className="summary-image">
      <ExpandableImage src="/assets/bb1.png" alt="User Journey" />
    </div>
  </div>
  </TextFade>
);



const Assets = () => (
  <TextFade direction="up">
      <div className="summary-container">
      <div className="summary-header">
        <h2>User Persona        </h2>
        <div className="summary-text">
        <h1>Then designed a typical user for our app        </h1>
        <h3>
        After interviewing various UTD students, I developed a persona based off of their goals and pain points
        </h3>
        <ul className="summary-text-bullets">
            <li>A lot of the students I interviewed spent majority of their budget eating out.</li>
          <li>They were also full time students who believed they didn't have time to budget.</li>
          </ul>
      </div>
    </div>
    <div className="summary-image">
      <ExpandableImage src="/assets/bb2.png" alt="User Journey" />
    </div>
  </div>
  </TextFade>
);

const Journey = () => (
    <TextFade direction="up">
        <div className="summary-container">
        <div className="summary-header">
          <h2>User Journey          </h2>
          <div className="summary-text">
          <h1>We mapped out how users might interact with our app          </h1>
          <ul className="summary-text-bullets">
              <li>By mapping out these user journeys, we were able to identify pain points, opportunities for improvement, and moments where the app could deliver exceptional value
.</li>
            <li>From there, the team collaborated on a features list that would address the pain points we found through research.</li>
            </ul>
        </div>
      </div>
      <div className="summary-image">
        <ExpandableImage src="./assets/bb3.png" alt="User Journey" />
      </div>
    </div>
    </TextFade>
  );
  
  const Features = () => (
    <TextFade direction="up">
        <div className="summary-container">
        <div className="summary-header">
          <h2>Features</h2>
          <div className="summary-text">
            <h1>We tested our features using a survey  </h1>
          <ul className="summary-text-bullets">
              <li>Our team compiled a roster of potential features for our app and presented them to a diverse group of UTD students for evaluation.</li>
            <li>We discovered the most beneficial functions based on their preferences and integrated the top three selected features into our app.</li>
            <li>These features included income index, credit card comparison, and spendings tracker of individual utilities.</li>
            </ul>
        </div>
      </div>
      <div className="summary-image">
        <ExpandableImage src="/assets/bb4.png" alt="User Journey" />
      </div>
    </div>
    </TextFade>
  );
  
  const Low = () => (
    <TextFade direction="up">
        <div className="summary-container">
        <div className="summary-header">
          <h2>Low Fidelity Wireframes          </h2>
          <div className="summary-text">
            <h1>We mapped out how users might interact with our app            </h1>
            <h3>Our team created a paper-based prototype for initial app testing purposes
            </h3>
          <ul className="summary-text-bullets">
              <li>We formulated a list of 5 actions to evaluate the user's ability in accomplish basic functions within this design framework.</li>
            <li>This low-fidelity prototype had seven distinct pages and utilized cutouts, which we strategically substituted when the tester engaged with specific buttons, emulating interactive responses.</li>
            </ul>
        </div>
      </div>
      <div className="summary-image">
        <ExpandableImage src="/assets/bb5.jpg" alt="User Journey" />
      </div>
    </div>
    </TextFade>
  );

  const Test = () => (
    <TextFade direction="up">
        <div className="summary-container">
        <div className="summary-header">
          <h2>Testing          </h2>
          <div className="summary-text">
            <h1>Next we conducted testing on our prototype            </h1>
            <h3>"The bottom task bar is kinda confusing. I can't understand what the symbols on the bottom mean based on intuition."            </h3>
          <ul className="summary-text-bullets">
              <li>We engaged a student from UTD to test the prototype and gained feedback from her.</li>
            <li>The participant found the overall user experience to be intuitive and easy to comprehend.</li>
            <li>However, she did encounter some confusion with the toolbar at the bottom of the interface.</li>
            <li>As a solution, we included descriptive subtitles accompanying the symbols to enhance clarity.</li>
            </ul>
        </div>
      </div>
    </div>
    </TextFade>
  );

  const High = () => (
    <TextFade direction="up">
        <div className="summary-container">
        <div className="summary-header">
          <h2>High Fidelity Wireframes          </h2>
          <div className="summary-text">
            <h1>Creating a better wireframe            </h1>
        </div>
      </div>
      <br/>
      <br/>
      <h3>Homepage and Credit Card Infographics     </h3>
      <div className="summary-image">
        <ExpandableImage src="/assets/bb6.png" alt="User Journey" />
      </div>
      <br/>
      <h3>Making a Monthly Budget      </h3>
      <div className="summary-image">
        <ExpandableImage src="/assets/bb7.png" alt="User Journey" />
      </div>
      <br/>
      <h3>Creating Savings Goals      </h3>
      <div className="summary-image">
        <ExpandableImage src="/assets/bb8.png" alt="User Journey" />
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
 <p>Our team used Figma to design our final screens </p>
        </div>
        </div>
        <br />
        <br />
        <div className="figma-embed-container">
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="1000"
            height="600"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fiafgf5x8oYTw2NxjMQiReb%2FUntitled%3Ftype%3Ddesign%26t%3DDLiub0o2a3aXTPnW-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26node-id%3D0-3%26starting-point-node-id%3D0%253A3%26mode%3Ddesign"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="video-container">
          <iframe
            width="1000"
            height="600"
            src="https://www.youtube.com/embed/cGhMtu95JqI?si=AqxUYtEu4E9dLBqm"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
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
    <div class="divider"></div>
    <Summary />
    
    <div className="section-divider"></div>
    <div class="divider"></div>
    <Assets />
    <div className="section-divider"></div>
    <div class="divider"></div>
    <Journey />
    <div className="section-divider"></div>
    <div class="divider"></div>
    <Features />
    <div className="section-divider"></div>
    <div class="divider"></div>
    <Low />
    <div className="section-divider"></div>
    <div class="divider"></div>
    <Test />
    <div className="section-divider"></div>
    <div class="divider"></div>
    <High />
    <div className="section-divider"></div>
    <div class="divider"></div>
    <BPPortfolio/>
    <br/>
    <br/>

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