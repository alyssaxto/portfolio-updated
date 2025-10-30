import React, { useEffect, useState } from "react";
import customCursor from "/assets/cursor.png";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <img
      src={customCursor}
      alt="cursor"
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        width: "48px",    // bigger size
        height: "48px",   // bigger size
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;
