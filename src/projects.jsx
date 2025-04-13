import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bpImage from "/assets/bp/6.png";
import rippleImage from "/assets/ripple.png";
import manageImage from "/assets/icanmanage/c3.png";
import stemuliImage from "/assets/stemuli/s17.png";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageContainer from "./Components/ImageContainer/ImageContainer";
import { LettersPullUp } from "./Components/letters-pull-up";
import "./projects.css";
import peekaboo from "/assets/peekaboo.png"
import { TextFade } from "./Components/TextFade"; // Ensure this import is correct


const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Track small screen state
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1350);

  // Detect if screen width is under 1200px
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1200);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initially

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjust scroll range based on screen width
  const x = useTransform(scrollYProgress, [0, 1], ["30%", isSmallScreen ? "-100%" : "-60%"]);

  // Toggle state for grid view
  const [isGridActive, setIsGridActive] = useState(false);
  const carouselRef = useRef(null);

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
      {!isSmallScreen && !isGridActive && (
        <div className="carousel" ref={carouselRef}>
          <div className="contentContainer">
            <motion.div className="images" style={{ x }}>
              <Link to="/Password">
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
                    description={"Developing and designing the website for the biggest 24-hour hackathon in North America hosted by HackUTD."}
                  />
                </motion.div>
              </Link>
              <Link to="/Password2">
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
              <img
    src={peekaboo}
    alt="Peekaboo"
    className="peekaboo-image"
  />
            </motion.div>
          </div>
        </div>
      )}

      {/* Grid View */}
      {(isGridActive || isSmallScreen) && (
                    <TextFade direction="up">
        <div className="Projects">
        <br/>
        <br/>
          <div className="Projects__wrapper index">
            <a href="/Password" className="Projects__card">
              <img src={bpImage} alt="AI Image Generator" />
              <h2>AI Image Generator 🔒</h2>
              <p>Designing an accessible way for bp employees to quickly create the images they need</p>
            </a>
            <a href="/HackUTD11" className="Projects__card">
              <img src={rippleImage} alt="HackUTD Website" />
              <h2>HackUTD Website</h2>
              <p>Developing and designing the website for the biggest 24-hour hackathon in North America hosted by HackUTD</p>
            </a>
            <a href="/Password2" className="Projects__card">
              <img src={manageImage} alt="I Can Manage Cancer" />
              <h2>I Can Manage Cancer 🔒</h2>
              <p>An educational platform designed to assist head and neck cancer patients through treatment.</p>
            </a>
            <a href="/Stemuli" className="Projects__card">
              <img src={stemuliImage} alt="Stemuli" />
              <h2>Stemuli</h2>
              <p>A desktop and mobile app for students interested in product design to explore more about the career through VR.</p>
            </a>
          </div>
        </div>
        </TextFade>
      )}
    </div>

    
  );
};

export default HorizontalScroll;
