import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bpImage from "../src/assets/bp/6.png";
import rippleImage from "../src/assets/ripple.png";
import manageImage from "../src/assets/icanmanage/c3.png";
import stemuliImage from "../src/assets/stemuli/s17.png";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageContainer from './Components/ImageContainer/ImageContainer';
import { LettersPullUp } from "./Components/letters-pull-up";
import "./projects.css";

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  // Toggle State
  const [showFirstSection, setShowFirstSection] = useState(true);
  const carouselRef = useRef(null);

  // Reset Scroll Position whenever the section is toggled
  useEffect(() => {
    if (carouselRef.current && showFirstSection) {
      // Reset the scroll position to 0 each time the section is toggled
      carouselRef.current.scrollLeft = -100;
    }
  }, [showFirstSection]); // Effect depends on the toggle state

  return (
    <div>
      {/* Title with Toggle Button */}
      <div className="title-container">
        <h1 className="projects-title">Projects</h1>
        <button
          className="toggle-button"
          onClick={() => setShowFirstSection(!showFirstSection)}
        >
          {showFirstSection ? (
            <span className="icon-grid"></span> // Grid Icon
          ) : (
            <span className="icon-scroll"></span> // Scroll Icon
          )}
        </button>
      </div>

      {/* First Projects Section (Horizontal Scroll) */}
      {showFirstSection && (
        <div className="carousel" ref={carouselRef}>
          <div className="contentContainer">
            <motion.div className="images" style={{ x }}>
              <Link to="/bpIntern">
                <motion.div className="ImageItem" initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -15 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                  <ImageContainer imageSource={bpImage} title={"AI Image Generator 🔒"} description={"Designing an accessible way for bp employees to quickly create the images they need."} />
                </motion.div>
              </Link>
              <Link to="/HackUTD11">
                <motion.div className="ImageItem" initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -15 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                  <ImageContainer imageSource={rippleImage} title={"HackUTD Website"} description={"Developing and designing the website for the biggest 24-hour hackathon in Texas hosted by HackUTD."} />
                </motion.div>
              </Link>
              <Link to="/ICanManage">
                <motion.div className="ImageItem" initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -15 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                  <ImageContainer imageSource={manageImage} title={"I Can Manage Cancer 🔒"} description={"An educational platform designed to assist head and neck cancer patients through treatment."} />
                </motion.div>
              </Link>
              <Link to="/Stemuli">
                <motion.div className="ImageItem" initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -15 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                  <ImageContainer imageSource={stemuliImage} title={"Stemuli"} description={"A desktop and mobile app for students interested in product design to explore more about the career through VR."} />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      )}

      {/* Second Projects Section (Grid View) */}
      {!showFirstSection && (
        <div className="Projects">
          <div className="Projects__wrapper index">
            <a href="hackUTDpassword.html" className="Projects__card">
              <img src={bpImage} alt="AI Image Generator" />
              <h2>AI Image Generator</h2>
              <p>Designing an accessible way for bp employees to quickly create the images they need</p>
            </a>
            <a href="hackUTDwebsite.html" className="Projects__card">
              <img src={rippleImage} alt="HackUTD Website" />
              <h2>HackUTD Website</h2>
              <p>Developing and designing the website for the biggest 24-hour hackathon in Texas hosted by HackUTD</p>
            </a>
            <a href="utswpassword.html" className="Projects__card">
              <img src={manageImage} alt="I Can Manage Cancer" />
              <h2>I Can Manage Cancer</h2>
              <p>An educational platform designed to assist head and neck cancer patients through treatment.</p>
            </a>
            <a href="Stemuli.html" className="Projects__card">
              <img src={stemuliImage} alt="Stemuli" />
              <h2>Stemuli</h2>
              <p>A desktop and mobile app for students interested in product design to explore more about the career through VR.</p>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HorizontalScroll;
