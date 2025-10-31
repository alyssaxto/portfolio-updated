import { useEffect, useState } from "react";
import "./CustomCursor.css";
 
const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia("(hover: none)").matches || window.innerWidth <= 768
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button")) {
        setHoverText("[click me!]");
      }
    };
    const handleMouseOut = (e) => {
      if (e.target.closest("a, button")) {
        setHoverText("");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      className={`custom-cursor ${hoverText ? "hovered" : ""}`}
      style={{ left: position.x, top: position.y }}
    >
      {hoverText && (
        <span className="cursor-text">
          <span className="bracket">[</span>click me!
          <span className="bracket">]</span>
        </span>
      )}
    </div>
  );
};

export default CustomCursor;
