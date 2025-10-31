import React, { useRef, useState, useEffect } from "react";
import "./projects copy.css";
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

const InfiniteCarousel = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const momentumRef = useRef(null);

  // triple the images for smooth infinite loop
  const loopImages = [...images, ...images, ...images];

  // drag handling
  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollStart(scrollRef.current.scrollLeft);
    if (momentumRef.current) cancelAnimationFrame(momentumRef.current);
  };

  const onMouseLeave = () => onMouseUp();
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const delta = (x - startX) * 2; // drag speed
    const newScroll = scrollStart - delta;
    setVelocity(newScroll - scrollRef.current.scrollLeft);
    scrollRef.current.scrollLeft = newScroll;
  };

  // infinite loop logic
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth / 3;
    container.scrollLeft = scrollWidth; // start in the middle copy

    const loop = () => {
      if (container.scrollLeft >= scrollWidth * 2) {
        container.scrollLeft -= scrollWidth;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += scrollWidth;
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }, []);

  // momentum smoothing
  useEffect(() => {
    const applyMomentum = () => {
      if (isDragging) return;
      if (Math.abs(velocity) < 0.1) return;

      scrollRef.current.scrollLeft += velocity;
      setVelocity(velocity * 0.92); // friction
      momentumRef.current = requestAnimationFrame(applyMomentum);
    };
    momentumRef.current = requestAnimationFrame(applyMomentum);
    return () => cancelAnimationFrame(momentumRef.current);
  }, [velocity, isDragging]);

  // Arrow key handling
  useEffect(() => {
    const handleArrowKeys = (e) => {
      if (!scrollRef.current) return;
      const scrollAmount = 300; // pixels per arrow press
      if (e.key === "ArrowRight") {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } else if (e.key === "ArrowLeft") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handleArrowKeys);
    return () => window.removeEventListener("keydown", handleArrowKeys);
  }, []);

  return (
    <div className="carousel-container">
      <div className="playgroundTitleContainer">
  <LettersPullUp text="Doodles" className="projects-title" />
        <p className="carousel-subtitle">Use the left and right arrows! <span className="no-break">(⊃｡•́‿•̀｡)⊃ 🡨 🡪</span></p>
      </div>

      <div
        className={`carousel-scroll ${isDragging ? "dragging" : ""}`}
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
      >
        {loopImages.map((src, index) => (
          <div className="carousel-item" key={index}>
            <img src={src} alt={`carousel-${index}`} className="carousel-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;