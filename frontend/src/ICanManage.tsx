import React, { useState } from 'react';
import "./Casestudy.css";
import { TextFade } from "./Components/TextFade.tsx";
import ProgressBar from "./Components/ProgressBar/ProgressBar.jsx";
import ExpandableImage from './Components/ExpandImage.jsx';

interface HeaderProps {
  bgColor?: string;
}

const Header: React.FC<HeaderProps> = ({ bgColor = "#BBE3FF" }) => (
  <TextFade direction="up">
    <header className="header">
      <div className="image-containy" style={{ backgroundColor: bgColor }}>
        <div className="image-wrapper">
          <a href="https://www.utsouthwestern.edu/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/icanmanage/transparent.png" alt="ArtSciLab Project" className="hover-image" />
          </a>
        </div>
      </div>
      <h1 className="header__title">
        Designing a solution to help cancer patients complete their treatment
      </h1>
      <h2 className="header__subtitle">
        ArtSciLab Product Designer ✷ Spring 2024 - Summer 2025
      </h2>
    </header>
  </TextFade>
);

const Grid: React.FC = () => (
  <TextFade direction="up">
    <div className="grid">
      <div className="grid__item">
        <h2 className="grid__heading">Company —</h2>
        <div className="grid__content">
          <a href="https://www.utsouthwestern.edu/" className="blue-link" target="_blank" rel="noopener noreferrer">UTSouthWestern</a>
        </div>
        <div className="grid__content">
          <a href="https://artscilab.utdallas.edu/" className="blue-link" target="_blank" rel="noopener noreferrer">ArtSciLab</a>
        </div>
      </div>
      <div className="grid__item">
        <h2 className="grid__heading">Skills —</h2>
        <div className="grid__content">Figma</div>
        <div className="grid__content">Prototyping</div>
        <div className="grid__content">UI/UX Design</div>
        <div className="grid__content">Visual Design</div>
      </div>
      <div className="grid__item">
        <h2 className="grid__heading">Timeline —</h2>
        <div className="grid__content">Jan 2024 - June 2025</div>
      </div>
      <div className="grid__item">
        <h2 className="grid__heading">Tools —</h2>
        <div className="grid__content">Figma</div>
      </div>
    </div>
  </TextFade>
);

const Top: React.FC = () => (
  <TextFade direction="up">
    <div className="summary-container">
      <div className="summary-header">
        <h2>Introduction</h2>
        <div className="summary-text">
          <h1>Summary</h1>
          <h3>A short description of why I began to work on this project</h3>
          <p>In spring 2024, I had the opportunity to work at a research lab, <a href="https://artscilab.utdallas.edu/" className="blue-link" target="_blank" rel="noopener noreferrer">ArtSciLab</a>, as a UX Designer. My main project was to redesign an existing program known as <a href="https://icanmanage.ca/login/index.php" className="blue-link" target="_blank" rel="noopener noreferrer">ICanManage.ca</a> to be easier for cancer patients to access.</p>
          <p>This is a case study about designing an educational program meant to provide head and neck cancer patients at UT Southwestern with effective strategies for optimizing their treatment process</p>
        </div>
      </div>
    </div>
  </TextFade>
);

const Summary: React.FC = () => (
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

const Assets: React.FC = () => (
  <TextFade direction="up">
    <div className="summary-container">
      <div className="summary-header">
        <h2>Style Guide</h2>
        <div className="summary-text">
          <h1>I began to brainstorm some ideas</h1>
          <p>I drew the assets using clip studio paint. The corgi, duck, and frog are some of the mascots we created for this year's hackathon.</p>
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

const BPPortfolio: React.FC = () => (
  <TextFade direction="up">
    <div className="summary-container">
      <div className="summary-header">
        <h2>First Prototype</h2>
        <div className="summary-text">
          <h1>I spent 5 months redesigning the entire program</h1>
          <p>After seeing these designs, our team was awarded over $8,000 in grants to continue research and developing the program by UT Dallas</p>
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
          src="https://embed.figma.com/proto/tApzi7pBq0KBLGsy3MTURT/I-Can-Manage-Desktop?node-id=0-22&p=f&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=0%3A22&embed-host=share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </TextFade>
);

const Ending: React.FC = () => (
  <TextFade direction="up">
    <div className="summary-container">
      <div className="summary-header">
        <h2>What's next?</h2>
        <div className="summary-text">
          <h1>The next steps for "I Can Manage Cancer"</h1>
          <p>Before I began designing, multiple student researchers conducted a list of what needed to be changed about this program</p>
          <ul className="summary-text-bullets">
            <li><a href="https://www.utsouthwestern.edu/" className="blue-link" target="_blank" rel="noopener noreferrer">UT Southwestern</a> will use my prototype and conduct testing on cancer patients during the summer of 2024</li>
            <li>I'll come back to work at the research lab for fall 2024 and continue to reinterate my designs.</li>
            <li>I will also start developing the mobile app meant to pair with this program!</li>
          </ul>
        </div>
      </div>
    </div>
  </TextFade>
);

const Mobile: React.FC = () => (
  <TextFade direction="up">
    <div className="summary-container">
      <div className="summary-header">
        <h2>Mobile App</h2>
        <div className="summary-text">
          <h1>Designing the mobile app after user testing</h1>
          <p>
            During the summer, five medical students at{" "}
            <a href="https://www.utsouthwestern.edu/" className="blue-link" target="_blank" rel="noopener noreferrer">UT Southwestern</a>{" "}
            conducted testing with cancer patients, comparing the original{" "}
            <a href="https://icanmanage.ca/login/index.php" className="blue-link" target="_blank" rel="noopener noreferrer">ICanManage.ca</a>{" "}
            to my updated, standardized designs.
          </p>
          <ul className="summary-text-bullets">
            <li>The original bulky chapters made it hard to find the exact issue a patient might be facing</li>
            <li>Every single chapter was either catergorized a learning lesson and activity</li>
            <li>Although I designed over 100 screens for all chapters, here is a short preview of what the app looks like</li>
          </ul>
        </div>
      </div>
      <br />
      <div className="mobile-section">
        <h3>Mobile View</h3>
        <div className="figma-embed-container">
          <iframe
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
              width: "100%",
              height: "600px",
            }}
            src="https://embed.figma.com/proto/P5TbdsLmtgeNA3GqpcQXqw/I-Can-Manage-Cancer-Mobile-App?scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-1056&starting-point-node-id=1%3A1056&embed-host=share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  </TextFade>
);

const Standard: React.FC = () => (
  <TextFade direction="up">
    <div className="summary-container">
      <div className="summary-header">
        <h2>Design System</h2>
        <div className="summary-text">
          <h1>I wanted to ensure the project could continue smoothly.</h1>
          <p>Before leaving the role, I built a standardized Google Slides template to help the medical students easily create new chapters while maintaining design consistency.</p>
          <ul className="summary-text-bullets">
            <li>The medical students had rich, valuable content but limited design experience.</li>
            <li>I developed a unified design system and template that allowed them to quickly add new lessons while maintaining visual consistency.</li>
            <li>This system established scalable layout rules, typography, and component standards that kept future content aligned with the app’s overall design direction.</li>
          </ul>
        </div>
      </div>
      <br />
      <h3>Google Slide Template</h3>
      <br />
      <div className="figma-embed-container-desktop">
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="800"
          height="450"
          src="https://docs.google.com/presentation/d/e/2PACX-1vRbNu3Lo9kqaxMFgAa0MqfVAr3lOL3kzsFsvSsH4Ex0NFbKjkfo_zcaNUtV1aQN0qJoUbJLYoqfYMqu/pubembed?start=false&loop=false&delayms=3000"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </TextFade>
);

const ICanManagePage: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ password: password }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        setIsUnlocked(true);
        setError("");
      } else {
        setError("Invalid password! Please try again.");
        setPassword("");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred. Please try again later.");
    }
  };

  if (!isUnlocked) {
    return (
      <div className="Password" id="Password">
        <TextFade direction="up">
          <h1>What's the secret password?</h1>
          <div className="Subtitle">
            <p>Email me at alyssaxto@gmail.com for the password!</p>
          </div>
        </TextFade>

        <div className="login-container">
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password to Proceed"
              required
            />
            <button type="submit">Submit</button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
        <img src="/assets/4k.png" alt="Decor" className="login-image" />
      </div>
    );
  }

  return (
    <div className="app">
      <ProgressBar />
      <Header />
      <Grid />
      <div className="divider"></div>
      <Top />
      <div className="divider"></div>
      <Summary />
      <div className="section-divider"></div>
      <div className="divider"></div>
      <Assets />
      <div className="section-divider"></div>
      <div className="divider"></div>
      <BPPortfolio />
      <div className="section-divider"></div>
      <div className="divider"></div>
      <Ending />
      <div className="section-divider"></div>
      <div className="divider"></div>
      <Mobile />
      <div className="section-divider"></div>
      <div className="divider"></div>
      <Standard />
      <br />
      <div className="portfolio__btn-container">
        <a href="/" className="portfolio__btn">Back to Portfolio</a>
      </div>
      <br />
      <br />
    </div>
  );
};

export default ICanManagePage;