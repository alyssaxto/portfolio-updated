import { Routes, Route } from "react-router-dom";
import Header from "./Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Play from "./pages/Playground.jsx";
import BPIntern from "./pages/bpIntern.jsx";  // Import the new BPIntern component
import HackUTD from "../src/HackUTD11.jsx";
import ScrollToTop from './ScrollToTop';
import ICanManage from './ICanManage.jsx';
import Stemuli from './Stemuli.jsx';
import Hackportal from './Hackportal.jsx';
import Gravebound from './Gravebound.jsx';




function App() {
  return (
    <>
      <Header />
      <ScrollToTop /> {/* Add this here so it will run on every route change */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Playground" element={<Play />} />
        <Route path="/about" element={<About />} />
        <Route path="/HackUTD11" element={<HackUTD />} />
        <Route path="/Hackportal" element={<Hackportal />} />
        <Route path="/ICanManage" element={<ICanManage />} />
        <Route path="/Stemuli" element={<Stemuli />} />
        <Route path="/Gravebound" element={<Gravebound />} />
        <Route path="/bpIntern" element={<BPIntern />} />  {/* Add the new route */}
      </Routes>
    </>
  );
}

export default App;