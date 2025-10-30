import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // detect if device is touch-based
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(hover: none)").matches || window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // don't track on mobile
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isMobile]);

  if (isMobile) return null; // hide component entirely on mobile

  return (
    <div
      className="custom-cursor"
      style={{ left: position.x, top: position.y }}
    />
  );
};

export default CustomCursor;
