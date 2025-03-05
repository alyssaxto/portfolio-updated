import { useState } from "react";
import "../Casestudy.css";

const ExpandableImage = ({ src, alt }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Overlay container for expanded image */}
      <div
        className={`expanded-image ${isExpanded ? "active" : ""}`}
        onClick={toggleExpanded}
      >
        <img src={src} alt={alt} />
      </div>

      {/* Regular image that expands when clicked */}
      <img
        src={src}
        alt={alt}
        className="summary-image"
        onClick={toggleExpanded}
      />
    </>
  );
};

export default ExpandableImage;
