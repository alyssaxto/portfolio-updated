import React from 'react';
import "./About.css";
import { motion } from 'framer-motion';

const images = [
  "../src/assets/gal/1.png",
  "../src/assets/gal/12.png",
  "../src/assets/gal/3.png",
  "../src/assets/gal/5.png",
  "../src/assets/gal/9.png",
  "../src/assets/gal/8.png",
  "../src/assets/gal/13.png",
  "../src/assets/gal/6.png",
  "../src/assets/gal/10.png",
  "../src/assets/gal/7.png",
  "../src/assets/gal/11.png",
  "../src/assets/gal/2.png"
];

const Carousel = () => {
  return (
    <div className="carousel-container overflow-hidden py-10">
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
