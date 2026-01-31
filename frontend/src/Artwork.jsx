import React, { useState } from "react";
import "./bentobox.css";

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
  "/assets/gal/2.png",
];

const Artwork = () => {
  const [expanded, setExpanded] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (src) => {
    setLightboxImage(src);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = "auto";
  };

  const columns = 4;
  const initialRows = 2;

  // Always render all images
  const displayedImages = images;

  return (
    <div className="AllDrawingsPage">
      <h2 className="projects-title">Artwork</h2>

      {/* Grid */}
      <div
        className={`AllDrawings__grid ${expanded ? "expanded" : "collapsed"}`}
        style={{ "--columns": columns }}
      >
        {displayedImages.map((src, index) => (
          <div
            className={`AllDrawings__item ${
              !expanded && index >= columns * initialRows ? "hidden" : ""
            }`}
            key={index}
            onClick={() => openLightbox(src)}
          >
            <img src={src} alt={`artwork-${index}`} />
          </div>
        ))}

        {/* View More overlay */}
        {!expanded && (
          <div className="AllDrawings__fadeOverlay" onClick={() => setExpanded(true)}>
            <span className="overlay-text carousel-link-wrapper">
              <a className="AllDrawings__toggle-btn">View More ↓</a>
            </span>
          </div>
        )}
      </div>

      {/* Collapse button */}
      {expanded && (
        <div className="AllDrawings__toggle-btn-wrapper">
          <button
            className="AllDrawings__toggle-btn"
            onClick={() => setExpanded(false)}
          >
            Collapse ↑
          </button>
        </div>
      )}

      {/* Lightbox */}
      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={lightboxImage} alt="Expanded" className="lightbox-image" />
        </div>
      )}
    </div>
  );
};

export default Artwork;
