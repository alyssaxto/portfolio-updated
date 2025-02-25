import React, { useRef } from "react";
import bpImage from "../src/assets/bp/6.png"; 
import rippleImage from "../src/assets/ripple.png";
import manageImage from "../src/assets/icanmanage/c3.png";
import stemuliImage from "../src/assets/stemuli/s17.png";
import "./Components/HorizontalScroll/horizontalScroll.css";
import {motion, useScroll, useTransform} from 'framer-motion';
import ImageContainer from './Components/ImageContainer/ImageContainer';
import "./play.css";
import { LettersPullUp } from "./Components/letters-pull-up"; 


const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <div className="carousel" ref={targetRef}>
        <div className="playgroundTitleContainer">
          <LettersPullUp text="Projects" className="Playground" />
        </div>
      <div className="contentContainer">
        <motion.div className="images" style={{ x }}>
          <motion.div
            className="ImageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -15 }}  
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <ImageContainer
              imageSource={bpImage}
              title={"AI Image Generator"}
              description={"Designing an accessible way for bp employees to quickly create the images they need."}
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
              imageSource={rippleImage}
              title={"HackUTD Website"}
              description={"Developing and designing the website for the biggest 24-hour hackathon in Texas hosted by HackUTD."}
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
              imageSource={manageImage}
              title={"I Can Manage Cancer"}
              description={"An educational platform designed to assist head and neck cancer patients through treatment."}
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
              imageSource={stemuliImage}
              title={"Stemuli"}
              description={"A desktop and mobile app for students interested in product design to explore more about the career through VR."}
            />
          </motion.div>
        </motion.div>


      </div>
    </div>
  );
};

export default HorizontalScroll;