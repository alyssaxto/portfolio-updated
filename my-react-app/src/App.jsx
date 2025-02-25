import { Routes, Route } from "react-router-dom";
import Header from "./Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Play from "./pages/Playground.jsx";
import BPIntern from "./pages/bpIntern.jsx";  // Import the new BPIntern component



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Playground" element={<Play />} />
        <Route path="/about" element={<About />} />
        <Route path="/bpIntern" element={<BPIntern />} />  {/* Add the new route */}
      </Routes>
    </>
  );
}

export default App;
