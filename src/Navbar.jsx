import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css"; // Ensure your CSS file is correctly linked
import Resume from "/assets/AlyssaTo_Resume.pdf";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu visibility on hamburger click
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Hamburger icon */}
        <div 
          className={`navbar__hamburger ${menuOpen ? "active" : ""}`} 
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Menu items */}
        <ul className={`navbar__menu ${menuOpen ? "active" : ""}`}>
          <li className="navbar__item">
            <Link to="/" className="navbar__links" onClick={() => setMenuOpen(false)}>HOME</Link>
          </li>
          <li className="navbar__item">
            <Link to="/playground" className="navbar__links" onClick={() => setMenuOpen(false)}>PLAY</Link>
          </li>
          <li className="navbar__item">
            <Link to="/about" className="navbar__links" onClick={() => setMenuOpen(false)}>ABOUT</Link>
          </li>
          <li className="navbar__item">
            <a href={Resume} className="navbar__links" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>RESUME</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
