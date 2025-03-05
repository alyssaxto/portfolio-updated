
import "./Casestudy.css";
import { TextFade } from "./Components/TextFade"; // Ensure this import is correct
import ProgressBar from "./Components/ProgressBar/ProgressBar.jsx";
import ExpandableImage from './Components/ExpandImage.jsx';

// Header Component
const Header = () => (
  <TextFade direction="up">
  <header className="header">
    <h1 className="header__title">Designing a solution to help women improve menstrual literacy</h1>
    <h2>Class Project ✴ Spring 2024</h2>
    <div className="image-containy">
      <a href="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FXz3gWChuvzFGEDTdJLklf3%2FUntitled%3Ftype%3Ddesign%26node-id%3D50-430%26t%3DLq5qWpLDcNo8pVK7-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D50%253A430%26mode%3Ddesign" target="_blank" rel="noopener noreferrer">
        <img src="/assets/thinkpink/tp10.png" alt="Image 2" className="hover-image" />
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
        <h2>Class Name —</h2>
        <div>
        Interaction Design 2
        </div>
      </div>

      <div className="grid__item">
        <h2>Skills —</h2>
        <div>Research</div>
        <div>User Personas</div>
        <div>Usability Testing</div>
        <div>Prototyping</div>
        <div>UI/UX Design</div>
      </div>

      <div className="grid__item">
        <h2>Timeline —</h2>
        <div>Jan 2024 - May 2024</div>
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
        <h2>Problem</h2>
        <div className="summary-text">
          <h1>Woman aren't able to track their periods easily          </h1>
          <h3>Through an article by the National Library of Medicine, I learned that . . .          </h3>
        <ul className="summary-text-bullets">
            <li>Period-tracking apps can contribute to a more participatory and personalized healthcare system that enables individuals to improve upon their menstrual literacy and encourage users to make informed choices about their overall health.</li>
          <li>Apps targeted towards period tracking are part of an overgrowing industry currently estimated to be valued over $60 billion.</li>
          <li>Source: <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10494721/"class="pink-link"> Missed period? The significance of period-tracking applications in a post-Roe America.</a></li>
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
      <h2>Competitive Analysis      </h2>
      <div className="summary-text">
        <h1>I looked at other period tracking apps to gain a better understanding</h1>
        <h3>I downloaded the 4 most popular tracking apps of 2024 and took a deeper look at their features
        </h3>
        <ul className="summary-text-bullets">
            <li>The apps I analyzed were Flo, Ovia Fertility App, Balance App, and Cycles Period and Cycles Tracker.</li>
          <li>I noticed top features were calendars, daily symptom trackers, and family planning.</li>
          </ul>
      </div>
    </div>
    <div className="pink-summary-image">
      <ExpandableImage src="/assets/thinkpink/tp1.png" alt="User Journey" />
    </div>
  </div>
  </TextFade>
);



const Assets = () => (
  <TextFade direction="up">
      <div className="summary-container">
      <div className="summary-header">
        <h2>Features List        </h2>
        <div className="summary-text">
        <h1>I started to brainstorm different features        </h1>
        <h3>
        I created some 2x2 graphs for different categories I considered important
        </h3>
        <ul className="summary-text-bullets">
            <li>By using 2x2 graphs categorizing user activities, technology, and business interest I learned a lot of valuable information.</li>
          <li>User engagement with "hard" tasks related to family planning, were features like fertility tracking methods, leading to a strong interest in family planning tools.</li>
          <li>However activities known as "easy" focused on avoiding pregnancy.</li>
          </ul>
      </div>
    </div>
    <div className="pink-summary-image">
      <ExpandableImage src="/assets/thinkpink/tp3.png" alt="User Journey" />
    </div>
    <br/>
    <div className="pink-summary-image">
      <ExpandableImage src="/assets/thinkpink/tp4.png" alt="User Journey" />
    </div>
    <br/>
    <div className="pink-summary-image">
      <ExpandableImage src="/assets/thinkpink/tp5.png" alt="User Journey" />
    </div>
  </div>
  </TextFade>
);

const Journey = () => (
    <TextFade direction="up">
        <div className="summary-container">
        <div className="summary-header">
          <h2>IOT Data System          </h2>
          <div className="summary-text">
          <h1>I began to think about how the app and IOT could connect          </h1>
          <p>I created a visual to imagine how wearable devices would communicate data back to the app</p>
        </div>
      </div>
      <div className="pink-summary-image">
        <ExpandableImage src="/assets/thinkpink/tp6.png" alt="User Journey" />
      </div>
    </div>
    </TextFade>
  );
  
  const Features = () => (
    <TextFade direction="up">
        <div className="summary-container">
        <div className="summary-header">
          <h2>Vision Statement          </h2>
          <div className="summary-text">
            <h1>I used all of my research and graphs to form a vision statement </h1>
            <p>By combining all of my graphs into a venn diagram, I was able to narrow down my ideas            </p>
        </div>
      </div>
      <div className="pink-summary-image">
        <ExpandableImage src="/assets/thinkpink/tp7.png" alt="User Journey" />
      </div>
      <br/>
      <div className="pink-summary-image">
        <ExpandableImage src="/assets/thinkpink/tp8.png" alt="User Journey" />
      </div>
    </div>
    </TextFade>
  );
  
  const Low = () => (
    <TextFade direction="up">
        <div className="summary-container">
        <div className="summary-header">
          <h2>User Persona          </h2>
          <div className="summary-text">
            <h1>Then designed a typical user for our app            </h1>
            <h3>After interviewing various women, I developed a persona based off of their goals and pain points
            </h3>
          <ul className="summary-text-bullets">
              <li>Claire is a woman in her early 20s. She relies on her menstrual cycle tracking app to manage her reproductive health.</li>
            <li>Each month, she logs her menstrual flow, tracks symptoms, and notes her fertile window for family planning with her partner.</li>
            <li>The app provides personalized insights and reminders. As she navigates her cycle, Claire feels confident to make informed decisions about her well-being.</li>
            </ul>
        </div>
      </div>
    </div>
    </TextFade>
  );

  const Test = () => (
    <TextFade direction="up">
        <div className="summary-container">
        <div className="summary-header">
          <h2>Style Guide          </h2>
          <div className="summary-text">
            <h1>I began to brainstorm some ideas            </h1>
          <ul className="summary-text-bullets">
              <li>I decided to make the icon a simple bow because I felt like it represented girlhood.</li>
            <li>I created a very simple four colored pink color palette.</li>
            <li>The font I chose was nunito because I wanted the app to be very readable.</li>
            </ul>
        </div>
      </div>
      <div className="pink-summary-image">
        <ExpandableImage src="/assets/thinkpink/tp9.png" alt="User Journey" />
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
 <p>I made my final prototype in Figma </p>
        </div>
        </div>
        <br />
        <br />
        <div className="figma-embed-container">
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="1000"
            height="600"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FXz3gWChuvzFGEDTdJLklf3%2FUntitled%3Ftype%3Ddesign%26node-id%3D50-430%26t%3DLq5qWpLDcNo8pVK7-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D50%253A430%26mode%3Ddesign"
            allowFullScreen
          ></iframe>
        </div>
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
    <BPPortfolio/>
    <br/>
    <br/>

<br/>
<div class="portfolio__btn-container">
<button class="portfolio__btn"><a href="/playground">Back to Playground</a></button>
</div>
<br/>
<br/>
  </div>
);

export default App;