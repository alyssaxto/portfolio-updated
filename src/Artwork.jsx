import React from 'react';
import "./About.css";
import { motion } from 'framer-motion';
import { LettersPullUp } from "./Components/letters-pull-up"; 

const images = [
  "/assets/gal/1.png",
  "/assets/gal/12.png",
  "/assets/gal/3.png",
  "/assets/gal/5.png",
  "/assets/gal/9.png",
  "/assets/gal/8.png",
  "/assets/gal/13.png",
  "/assets/gal/6.png",
  "/assets/gal/10.png",
  "/assets/gal/7.png",
  "/assets/gal/11.png",
  "/assets/gal/2.png"
];

const Carousel = () => {
  return (
    
    <div className="carousel-container overflow-hidden py-10">
            <div className="playgroundTitleContainer">
              <LettersPullUp text="Artwork" className="Playground" />
            </div>
      <motion.div
        className="carousel-content flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 10,
          repeat: Infinity,
          repeatType: "loop", // Ensures smooth looping
        }}
      >
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`carousel-${index}`}
            className="carousel-image"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
