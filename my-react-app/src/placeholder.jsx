import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Hackportal from "../src/assets/hackportal.png";
import Gravebound from "../src/assets/gb/15.png";
import BpxGA from "../src/assets/GA/7.png";
import MVP from "../src/assets/mvp/5.png";
import BB from "../src/assets/budgetbuddy.png";
import pink from "../src/assets/thinkpink/tp10.png";

import { motion, useScroll, useTransform } from "framer-motion";
import ImageContainer from "./Components/ImageContainer/ImageContainer";
import { LettersPullUp } from "./Components/letters-pull-up";
import "./projects.css";
import peekaboo from "../src/assets/peekaboo.png"

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
  const x = useTransform(scrollYProgress, [0, 1], ["10%", isSmallScreen ? "-150%" : "-75%"]);

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
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="title-container">
        <LettersPullUp text="Playground" className="projects-title" />
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
            <Link to="/Hackportal">
                <motion.div
                  className="ImageItem"
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -15 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <ImageContainer
                    imageSource={Hackportal}
                    title={"Hackportal"}
                    description={"Designing an accessible website template for other hackathons to use to promote their event."}
                  />
                </motion.div>
              </Link>
              <Link to="/Gravebound">
                <motion.div
                  className="ImageItem"
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -15 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <ImageContainer
                    imageSource={Gravebound}
                    title={"Gravebound"}
                    description={"Creating and developing UI for a first-person shooter developed entirely by students."}
                  />
                </motion.div>
              </Link>

              <Link to="/bpxGA">
          <motion.div
            className="ImageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -15 }}  
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <ImageContainer
              imageSource={BpxGA}
              title={"bp x GA Bootcamp"}
              description={"Designing badges for new grad designers to display on their profiles after completing a 12-week bootcamp."}
            />
          </motion.div>
          </Link>

          <Link to="/MVP">
          <motion.div
            className="ImageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -15 }}  
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <ImageContainer
              imageSource={MVP}
              title={"MVP Badges"}
              description={"Creating badges to recognize new grad designers for their efforts within a 12-week bootcamp."}
            />
          </motion.div>
          </Link>
          
          <Link to="/BudgetBuddy">
          <motion.div
            className="ImageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -15 }}  
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <ImageContainer
              imageSource={BB}
              title={"Budget Buddy"}
              description={"A mobile app case study that enhances financial decision-making skills among college students."}
            />
          </motion.div>
          </Link>
          <Link to="/ThinkPink">
          <motion.div
            className="ImageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -15 }}  
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <ImageContainer
              imageSource={pink}
              title={"ThinkPink"}
              description={"A mobile app case study to help women track their menstrual cycles and making more informed decisions."}
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
        <div className="Projects">
        <br/>
        <br/>
          <div className="Projects__wrapper index">
            <a href="/Hackportal" className="Projects__card">
              <img src={Hackportal} alt="Hackportal" />
              <h2>Hackportal</h2>
              <p>Designing an accessible website template for other hackathons to use to promote their event.</p>
            </a>
            <a href="/Gravebound" className="Projects__card">
              <img src={Gravebound} alt="Gravebound" />
              <h2>Gravebound</h2>
              <p>Creating and developing UI for a first-person shooter developed entirely by students.</p>
            </a>
            <a href="/bpxGA" className="Projects__card">
              <img src={BpxGA} alt="bpxGA" />
              <h2>bp x GA Bootcamp</h2>
              <p>Designing badges for new grad designers to display on their profiles after completing a 12-week bootcamp.</p>
            </a>
            <a href="/MVP" className="Projects__card">
              <img src={MVP} alt="MVP" />
              <h2>MVP Badges</h2>
              <p>Creating badges to recognize new grad designers for their efforts within a 12-week bootcamp.</p>
            </a>
            <a href="/BudgetBuddy" className="Projects__card">
              <img src={BB} alt="BudgetBuddy" />
              <h2>Budget Buddy</h2>
              <p>A mobile app case study that enhances financial decision-making skills among college students.</p>
            </a>
            <a href="/ThinkPink" className="Projects__card">
              <img src={pink} alt="ThinkPink" />
              <h2>Think Pink</h2>
              <p>A mobile app case study to help women track their menstrual cycles and making more informed decisions.</p>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HorizontalScroll;
