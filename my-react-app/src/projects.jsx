import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bpImage from "../src/assets/bp/6.png";
import rippleImage from "../src/assets/ripple.png";
import manageImage from "../src/assets/icanmanage/c3.png";
import stemuliImage from "../src/assets/stemuli/s17.png";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageContainer from "./Components/ImageContainer/ImageContainer";
import { LettersPullUp } from "./Components/letters-pull-up";
import "./projects.css";

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  // Toggle State
  const [isGridActive, setIsGridActive] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Track small screen state
  const carouselRef = useRef(null);

  // Detect if the screen width is under 1000px
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000); // Adjust the width to 1000px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initially
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset Scroll Position whenever switching views
  useEffect(() => {
    if (carouselRef.current && !isGridActive) {
      carouselRef.current.scrollLeft = -100;
    }
  }, [isGridActive]);

  return (
    <div>
      {/* Title with Toggle Button */}
      <div className="title-container">
        <LettersPullUp text="Projects  " className="projects-title" />
        {!isSmallScreen && (  // Only render the toggle button on screens larger than 1000px
          <div className="toggle-button">
            <span
              className={`icon-grid ${isGridActive ? "active" : ""}`}
              onClick={() => setIsGridActive(true)}
            ></span>
            <span
              className={`icon-scroll ${!isGridActive ? "active" : ""}`}
              onClick={() => setIsGridActive(false)}
            ></span>
          </div>
        )}
      </div>

      {/* Horizontal Scroll View */}
      {!isSmallScreen && !isGridActive && ( // Only enable the horizontal scroll if screen width is larger than 1000px and grid view is inactive
        <div className="carousel" ref={carouselRef}>
          <div className="contentContainer">
            <motion.div className="images" style={{ x }}>
              <Link to="/bpIntern">
                <motion.div
                  className="ImageItem"
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -15 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <ImageContainer
                    imageSource={bpImage}
                    title={"AI Image Generator 🔒"}
                    description={"Designing an accessible way for bp employees to quickly create the images they need."}
                  />
                </motion.div>
              </Link>
              <Link to="/HackUTD11">
                <motion.div
                  className="ImageItem"
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -15 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <ImageContainer
                    imageSource={rippleImage}
                    title={"HackUTD Website"}
                    description={"Developing and designing the website for the biggest 24-hour hackathon in Texas hosted by HackUTD."}
                  />
                </motion.div>
              </Link>
              <Link to="/ICanManage">
                <motion.div
                  className="ImageItem"
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -15 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <ImageContainer
                    imageSource={manageImage}
                    title={"I Can Manage Cancer 🔒"}
                    description={"An educational platform designed to assist head and neck cancer patients through treatment."}
                  />
                </motion.div>
              </Link>
              <Link to="/Stemuli">
                <motion.div
                  className="ImageItem"
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -15 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <ImageContainer
                    imageSource={stemuliImage}
                    title={"Stemuli"}
                    description={"A desktop and mobile app for students interested in product design to explore more about the career through VR."}
                  />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      )}

      {/* Grid View */}
      {(isGridActive || isSmallScreen) && // Display grid on small screens and when grid view is active
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
      }
    </div>
  );
};

export default HorizontalScroll;
