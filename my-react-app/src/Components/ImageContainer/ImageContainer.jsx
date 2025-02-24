import React from "react";
import "./imagecontainer.css"; // Make sure to style the title and description here

const ImageContainer = ({ imageSource, title, description }) => {
  return (
    <div className="image-container">
      <img className="image" src={imageSource} alt={description} />
      {/* Add Title */}
      <h2 className="title">{title}</h2> {/* Title with different styling */}
      {/* Add Description */}
      <p className="description">{description}</p> {/* Description styling */}
    </div>
  );
};

export default ImageContainer;
