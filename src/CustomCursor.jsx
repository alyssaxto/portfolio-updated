import { useEffect, useState } from "react";
import "./CustomCursor.css";

const colors = ["#82EEEC", "#F7BB3B", "#FD9CA7"];

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverText, setHoverText] = useState("");

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(hover: none)").matches || window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Cursor move + sparkle
  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      createSparkle(e.clientX, e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isMobile]);

  // Hover text on links/buttons
  useEffect(() => {
    if (isMobile) return;

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button")) setHoverText("[click me!]");
    };
    const handleMouseOut = (e) => {
      if (e.target.closest("a, button")) setHoverText("");
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isMobile]);

  // Generate a random star clip-path
  const generateStarClip = (points) => {
    let path = "";
    const angle = (2 * Math.PI) / points;
    for (let i = 0; i < points; i++) {
      const outer = {
        x: 50 + 50 * Math.cos(i * angle),
        y: 50 + 50 * Math.sin(i * angle)
      };
      const inner = {
        x: 50 + 25 * Math.cos(i * angle + angle / 2),
        y: 50 + 25 * Math.sin(i * angle + angle / 2)
      };
      path += `${outer.x}% ${outer.y}%, ${inner.x}% ${inner.y}%, `;
    }
    return `polygon(${path.slice(0, -2)})`;
  };

  // Create sparkle
  const createSparkle = (x, y) => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";

    const size = Math.random() * 8 + 6; // 6px to 14px
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    // 4-6 point stars
    const points = Math.floor(Math.random() * 3) + 4; // 4, 5, or 6
    sparkle.style.clipPath = generateStarClip(points);

    const xOffset = (Math.random() - 0.5) * 40 + "px";
    const yOffset = (Math.random() - 1) * 40 + "px";
    sparkle.style.setProperty("--x", xOffset);
    sparkle.style.setProperty("--y", yOffset);

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 800);
  };

  if (isMobile) return null;

  return (
    <div
      className={`custom-cursor ${hoverText ? "hovered" : ""}`}
      style={{ left: position.x, top: position.y }}
    >
      {hoverText && (
        <span className="cursor-text">
          <span className="bracket">[</span> click me!
          <span className="bracket"> ]</span>
        </span>
      )}
    </div>
  );
};

export default CustomCursor;
