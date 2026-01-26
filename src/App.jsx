import { Routes, Route } from "react-router-dom";
import React from "react";
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
import Bp3 from "./bp3.jsx";
import Footer from "./Footer.jsx";

import CustomCursor from "./CustomCursor";

function App() {
  return (
    <>
      {/* Floating custom cursor */}
      <CustomCursor />

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
        <Route path="/bp3" element={<Bp3 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
