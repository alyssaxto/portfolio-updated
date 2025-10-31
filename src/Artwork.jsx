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
  const [currentDot, setCurrentDot] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update mobile state on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Triple images for infinite effect
  const loopImages = [...images, ...images, ...images];

  // Drag/Swipe handlers
  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollStart(scrollRef.current.scrollLeft);
  };
  const onMouseLeave = () => onMouseUp();
  const onMouseUp = () => setIsDragging(false);
  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const delta = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollStart - delta;
  };

  // Infinite loop logic
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollWidth = container.scrollWidth / 3;
    container.scrollLeft = scrollWidth; // start in the middle

    const loop = () => {
      if (container.scrollLeft >= scrollWidth * 2) container.scrollLeft -= scrollWidth;
      else if (container.scrollLeft <= 0) container.scrollLeft += scrollWidth;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }, []);

  // Arrow button handlers (scroll one item at a time)
  const scrollByItem = (direction = "next") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const item = container.querySelector(".carousel-item");
    if (!item) return;

    const style = getComputedStyle(item);
    const marginRight = parseInt(style.marginRight);
    const itemWidth = item.offsetWidth + marginRight;
    const scrollAmount = direction === "next" ? itemWidth : -itemWidth;

    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleArrowKeys = (e) => {
      if (!isMobile) {
        if (e.key === "ArrowRight") scrollByItem("next");
        if (e.key === "ArrowLeft") scrollByItem("prev");
      }
    };
    window.addEventListener("keydown", handleArrowKeys);
    return () => window.removeEventListener("keydown", handleArrowKeys);
  }, [isMobile]);

  // Update current dot based on scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const item = container.querySelector(".carousel-item");
      if (!item) return;
      const style = getComputedStyle(item);
      const itemWidth = item.offsetWidth + parseInt(style.marginRight);
      const index = Math.round(container.scrollLeft / itemWidth) % images.length;
      setCurrentDot(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to a dot when clicked
  const scrollToDot = (index) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const item = container.querySelector(".carousel-item");
    if (!item) return;
    const style = getComputedStyle(item);
    const itemWidth = item.offsetWidth + parseInt(style.marginRight);

    container.scrollTo({
      left: container.scrollWidth / 3 + index * itemWidth, // offset middle copy
      behavior: "smooth"
    });
  };

  return (
    <div className="carousel-container">
      <div className="playgroundTitleContainer">
        <LettersPullUp text="Doodles" className="projects-title" />
        <p className="carousel-subtitle">
          {isMobile
            ? "Swipe left or right!"
            : "Use the arrows below!"}{" "}
          <span className="no-break text-emoji">(⊃｡•́‿•̀｡)⊃ ⟷</span>
        </p>
      </div>

<div
  className={`carousel-scroll`}
  ref={scrollRef}
  {...(isMobile
    ? {
        onMouseDown: (e) => onMouseDown(e),
        onMouseUp: onMouseUp,
        onMouseLeave: onMouseLeave,
        onMouseMove: (e) => onMouseMove(e),
        onTouchStart: (e) => onMouseDown(e.touches[0]),
        onTouchMove: (e) => onMouseMove(e.touches[0]),
        onTouchEnd: onMouseUp,
      }
    : {})}
>
  {loopImages.map((src, index) => (
    <div className="carousel-item" key={index}>
      <img src={src} alt={`carousel-${index}`} className="carousel-image" />
    </div>
  ))}
</div>


      {/* Dots */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentDot ? "active" : ""}`}
            onClick={() => scrollToDot(index)}
          />
        ))}
      </div>

      {/* Arrow buttons */}
      <div className="carousel-controls">
        <button className="carousel-arrow" onClick={() => scrollByItem("prev")}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="carousel-arrow" onClick={() => scrollByItem("next")}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
