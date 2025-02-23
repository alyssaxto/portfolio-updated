import { useState } from "react";
import "./index.css"; // Ensure your CSS file is correctly linked

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
        <div className="navbar__hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Menu items */}
        <ul className={`navbar__menu ${menuOpen ? "active" : ""}`}>
          <li className="navbar__item">
            <a href="#home" className="navbar__links">HOME</a>
          </li>
          <li className="navbar__item">
            <a href="#play" className="navbar__links">PLAY</a>
          </li>
          <li className="navbar__item">
            <a href="#about" className="navbar__links">ABOUT</a>
          </li>
          <li className="navbar__item">
            <a href="#resume" className="navbar__links">RESUME</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

