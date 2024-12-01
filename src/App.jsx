import React from "react";
import Portfolio from "./MainPage/Portfolio";
import CursorEffect from "./Component/CursorEffect";
import EyomnCS from "./MainPage/Case Studies/EyomnCS";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";

function App() {
  return (
    <div className="bg-bg-dark">
      <Router>
        <NavBar />
        <CursorEffect />
        <section>
          <Routes>
            <Route path="/" element={<Portfolio scrollTo="home" />} />
            <Route
              path="/projects"
              element={<Portfolio scrollTo="projects" />}
            />
            <Route path="/about" element={<Portfolio scrollTo="about" />} />
            <Route path="/contact" element={<Portfolio scrollTo="contact" />} />
            <Route path="/eyomn" element={<EyomnCS />} />
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
