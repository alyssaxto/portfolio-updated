import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "./Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Play from "./pages/Playground.jsx";
import BPIntern from "./pages/bpIntern.jsx";
import HackUTD from "../src/HackUTD11.jsx";
import ScrollToTop from "./ScrollToTop";
import ICanManage from "./ICanManage.jsx";
import Stemuli from "./Stemuli.jsx";
import Hackportal from "./Hackportal.jsx";
import Gravebound from "./Gravebound.jsx";
import Bp2 from "./bp2.jsx";
import MVP from "./MVP.jsx";
import Budgetbuddy from "./Budgetbuddy.jsx";
import ThinkPink from "./ThinkPink.jsx";
import Password from "./PasswordProtected.jsx";
import Password2 from "./PasswordProtected2.jsx";
import Footer from "./Footer.jsx";

import CustomCursor from "./CustomCursor";

// Doodle images
import doodle1 from "/assets/doodle1.png";
import doodle2 from "/assets/doodle2.png";
import doodle3 from "/assets/doodle3.png";

const doodles = [doodle1, doodle2, doodle3];

function App() {
  const [clicks, setClicks] = useState([]);
  const [doodleIndex, setDoodleIndex] = useState(0); // Track next doodle in order

  useEffect(() => {
    const handleClick = (e) => {
      // Ignore clicks inside navbar, login container, buttons, links, inputs
      if (e.target.closest(".navbar, .login-container, button, a, input, textarea"))
        return;

      const doodle = doodles[doodleIndex];
      const newClick = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        image: doodle,
      };

      setClicks((prev) => [...prev, newClick]);

      // Move to next doodle in order
      setDoodleIndex((prev) => (prev + 1) % doodles.length);

      setTimeout(() => {
        setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
      }, 400); // match fast animation
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [doodleIndex]);

  return (
    <>
      {/* Floating custom cursor */}
      <CustomCursor />

      {/* Doodle click layer */}
      <div id="doodle-layer">
        {clicks.map((click) => (
          <img
            key={click.id}
            src={click.image}
            alt="doodle"
            className="click-doodle"
            style={{
              left: click.x,
              top: click.y,
            }}
          />
        ))}
      </div>

      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Playground" element={<Play />} />
        <Route path="/about" element={<About />} />
        <Route path="/Password" element={<Password />} />
        <Route path="/Password2" element={<Password2 />} />
        <Route path="/HackUTD11" element={<HackUTD />} />
        <Route path="/Hackportal" element={<Hackportal />} />
        <Route path="/bpxGA" element={<Bp2 />} />
        <Route path="/ThinkPink" element={<ThinkPink />} />
        <Route path="/MVP" element={<MVP />} />
        <Route path="/Budgetbuddy" element={<Budgetbuddy />} />
        <Route path="/ICanManage" element={<ICanManage />} />
        <Route path="/Stemuli" element={<Stemuli />} />
        <Route path="/Gravebound" element={<Gravebound />} />
        <Route path="/bpProject" element={<BPIntern />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
