import React, { useRef } from "react";
import Hackportal from "../src/assets/hackportal.png";
import Gravebound from "../src/assets/gb/15.png";
import BpxGA from "../src/assets/GA/7.png";
import MVP from "../src/assets/mvp/5.png";
import BB from "../src/assets/budgetbuddy.png";
import pink from "../src/assets/thinkpink/tp10.png";
import "./Components/HorizontalScroll/horizontalScroll.css";
import { motion, useScroll, useTransform } from 'framer-motion';
import ImageContainer from './Components/ImageContainer/ImageContainer';
import { LettersPullUp } from "./Components/letters-pull-up"; 
import { Link } from "react-router-dom";


const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <div className="carousel" ref={targetRef}>
      {/* Playground title outside of the carousel */}
      <div className="playgroundTitleContainer">
        <LettersPullUp text="Playground" className="Playground" />
      </div>

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
        </motion.div>
        
      </div>
    </div>
  );
};

export default HorizontalScroll;
