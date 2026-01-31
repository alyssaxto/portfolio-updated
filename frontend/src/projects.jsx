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
  <a href="#projects" style={{ textDecoration: "none", color: "inherit" }}>
    <LettersPullUp text="Projects  " className="projects-title" />
  </a>        {!isSmallScreen && (  // Only render the toggle button on screens larger than 1000px
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
              <Link to="/bpProject">
                <motion.div
                  className="ImageItem"
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -15 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <ImageContainer
                    imageSource={bpImage}
                    title={"Making Image Creation Faster, Safer, & Smarter"}
                    description={"bp product design internship summer 2024"}
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
                    title={"Bringing North America’s largest 24-hour hackathon to life"}
                    description={"hackUTD product design role spring - fall 2024"}
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
                    title={"Empowering cancer patients to complete their treatment journey"}
                    description={"artscilab design internship spring 2024 - summer 2025"}
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
                    title={"Making Work Experience Accessible for College Students"}
                    description={"stemuli product design class spring 2024"}
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
      <br />
      <br />
      <div className="Projects__wrapper index">
        <a href="/Password" className="Projects__card">
          <img src={bpImage} alt="AI Image Generator" />
          <h2 className="grid-project-title">Making Image Creation Faster, Safer, & Smarter</h2>
          <p>bp product design internship summer 2024</p>
        </a>

        <a href="/HackUTD11" className="Projects__card">
          <img src={rippleImage} alt="HackUTD Website" />
          <h2 className="grid-project-title">Bringing North America’s largest 24-hour hackathon to life</h2>
          <p>hackUTD product design role spring - fall 2024</p>
        </a>

        <a href="/Password2" className="Projects__card">
          <img src={manageImage} alt="I Can Manage Cancer" />
          <h2 className="grid-project-title">Empowering cancer patients to complete their treatment journey</h2>
          <p>artscilab design internship spring 2024 - summer 2025</p>
        </a>

        <a href="/Stemuli" className="Projects__card">
          <img src={stemuliImage} alt="Stemuli" />
          <h2 className="grid-project-title">Making Work Experience Accessible for College Students</h2>
          <p>stemuli product design class spring 2024</p>
        </a>
      </div>
    </div>
  </TextFade>
)}
    </div>

    
  );
};

export default HorizontalScroll;
