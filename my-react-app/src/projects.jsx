import React, { useRef } from "react";
import bpImage from "../src/assets/bp/6.png"; 
import rippleImage from "../src/assets/ripple.png";
import manageImage from "../src/assets/icanmanage/c3.png";
import stemuliImage from "../src/assets/stemuli/s17.png";
import "./Components/HorizontalScroll/horizontalScroll.css";
import {motion, useScroll, useTransform} from 'framer-motion';
import ImageContainer from './Components/ImageContainer/ImageContainer';


const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const {scrollYProgress} = useScroll({target: targetRef});
  const x = useTransform(scrollYProgress, [0, 1],["0%" , "-55%"]);
  return (
    <div className="carousel" ref={targetRef}>
      <div className="contentContainer">
        <motion.div className="images" style={{ x }}>
          
          {/* Image 1 */}
          <motion.div
            className="ImageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <ImageContainer imageSource={bpImage}
            description={"AI Image Generator"} 
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            className="ImageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <ImageContainer imageSource={rippleImage}
            description={"AI Image Generator"} />
          </motion.div>

          {/* Image 3 */}
          <motion.div
            className="ImageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <ImageContainer imageSource={manageImage}
            description={"AI Image Generator"} />
          </motion.div>

          {/* Image 4 */}
          <motion.div
            className="ImageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <ImageContainer imageSource={stemuliImage}
            description={"AI Image Generator"} />
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScroll; 
