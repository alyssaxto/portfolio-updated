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

// Import doodle images
import doodle1 from "/assets/doodle1.png";
import doodle2 from "/assets/doodle2.png";
import doodle3 from "/assets/doodle3.png";

const doodles = [doodle1, doodle2, doodle3];

function App() {
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      // Ignore clicks inside navbar, login container, buttons, links, and inputs
      if (e.target.closest(".navbar, .login-container, button, a, input, textarea"))
        return;

      const doodle = doodles[Math.floor(Math.random() * doodles.length)];
      const newClick = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        image: doodle,
      };

      setClicks((prev) => [...prev, newClick]);

      setTimeout(() => {
        setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
      }, 600); // snappy animation duration
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {/* Doodle click layer (behind interactive elements) */}
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
