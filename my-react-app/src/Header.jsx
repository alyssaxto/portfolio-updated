import { useState } from "react";
import "./index.css"; // Ensure your CSS file is correctly linked

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar__container">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="#" className="navbar__links">WORK</a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__links">PLAY</a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__links">ABOUT</a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__links">RESUME</a>
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div
          className={`navbar__toggle ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
