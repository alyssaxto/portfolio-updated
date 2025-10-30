import React, { useEffect, useState } from "react";
import "./CustomCursor.css";
import cursorImg from "/assets/cursor.png"; // 👈 Import your image

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    const add = () => setHovered(true);
    const remove = () => setHovered(false);

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", add);
      el.addEventListener("mouseleave", remove);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", add);
        el.removeEventListener("mouseleave", remove);
      });
    };
  }, []);

  return (
    <img
      src={cursorImg}
      alt="custom cursor"
      className={`custom-cursor ${hovered ? "hovered" : ""}`}
      style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
    />
  );
};

export default CustomCursor;
