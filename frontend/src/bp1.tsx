import React, { useState } from 'react';
import "./Casestudy.css";
import { TextFade } from "./Components/TextFade.tsx";
import ProgressBar from "./Components/ProgressBar/ProgressBar.jsx";
import ExpandableImage from './Components/ExpandImage.jsx';
import { Link } from "react-router-dom";


interface HeaderProps {
  bgColor?: string;
}

const Header: React.FC<HeaderProps> = ({ bgColor = "#D5F3CC" }) => (
  <TextFade direction="up">
    <header className="header">
      <div className="image-containy" style={{ backgroundColor: bgColor }}>
        <div className="image-wrapper">
          <a href="https://www.bp.com/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/bp/11.png" alt="BP Logo" className="hover-image" />
          </a>
        </div>
      </div>
      <h1 className="header__title">
        Designing an accessible way for bp employees to create the images they need
      </h1>
      <h2>bp Product Design Internship ✷ Summer 2024</h2>
    </header>
  </TextFade>
);

const Grid: React.FC = () => (
  <TextFade direction="up">
    <div className="grid grid-cols-2 gap-4">
      <div className="grid__item">
        <h2 className="grid__heading">Company —</h2>
        <div className="grid__content">
          <a href="https://www.bp.com/" className="green-link" target="_blank" rel="noopener noreferrer">bp</a>
        </div>
      </div>
      <div className="grid__item">
        <h2 className="grid__heading">Skills —</h2>
        <div className="grid__content">User Research</div>
        <div className="grid__content">User Personas</div>
        <div className="grid__content">Usability Testing</div>
        <div className="grid__content">Prototyping</div>
        <div className="grid__content">UI/UX Design</div>
        <div className="grid__content">Design Thinking</div>
        <div className="grid__content">AI Tool Usage</div>
      </div>
      <div className="grid__item">
        <h2 className="grid__heading">Timeline —</h2>
        <div className="grid__content">May - August 2024</div>
      </div>
      <div className="grid__item">
        <h2 className="grid__heading">Tools —</h2>
        <div className="grid__content">Sketch</div>
        <div className="grid__content">Mural</div>
      </div>
    </div>
  </TextFade>
);

const ExecutiveSummary: React.FC = () => (
  <TextFade direction="up">
    <div className="summary-container">
      <div className="summary-header">
        <h2>Executive Summary</h2>
        <div className="summary-text">
          <h1>How are bp employees currently sourcing images?</h1>
          <p>
            At the beginning of my internship, my mentor and I discussed several potential summer projects. 
            I was particularly drawn to the idea of developing a tool that would empower users to easily create or discover images.
          </p>
        </div>
      </div>
      <div className="summary-image">
        <ExpandableImage src="/assets/bp/10.png" alt="User Journey" />
      </div>
    </div>
  </TextFade>
);

// ... (Other static sections like ProblemStatement, Value, Empathize, etc. remain logically the same)

const BPPortfolio: React.FC = () => (
  <div>
    <TextFade direction="up">
      <div className="summary-container">
        <div className="summary-header">
          <h2>Prototype</h2>
          <div className="summary-text">
            <h1>First iteration of high fidelity wireframes</h1>
            <h3>While the original prototypes were designed in Sketch, I converted them into a clickable Figma file...</h3>
          </div>
        </div>
        <div className="figma-embed-container-desktop">
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="800"
            height="500"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fmq1WIFQLOCskfwMsxBv9g8%2FAI-Image-Generator-Prototype%3Fnode-id%3D2-3"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </TextFade>
  </div>
);

// --- Main Secured Page Component ---

const BP1Page: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Logic mirrored from Admin.tsx example
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

  // If not unlocked, show the Login UI from PasswordProtected.jsx
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

  // If unlocked, show the full Case Study
  return (
    <div className="app">
      <ProgressBar />
      <Header />
      <Grid />
      <div className="divider"></div>
      <ExecutiveSummary />
      {/* Add other sections as needed */}
      <BPPortfolio />
      <div className="portfolio__btn-container">
        <a href="/" className="portfolio__btn">Back to Portfolio</a>
      </div>
      <br /><br />
    </div>
  );
};

export default BP1Page;