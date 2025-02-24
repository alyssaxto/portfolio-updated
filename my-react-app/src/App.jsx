import { Routes, Route } from "react-router-dom";
import Header from "./Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Play from "./pages/Playground.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<Play />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
