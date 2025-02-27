import { useState } from "react";

const ExpandableImage = ({ src, alt }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {isExpanded && <div className="overlay" onClick={toggleExpanded}></div>}
      <img
        src={src}
        alt={alt}
        className={`summary-image ${isExpanded ? "expanded" : ""}`}
        onClick={toggleExpanded}
      />
    </>
  );
};

export default ExpandableImage;
