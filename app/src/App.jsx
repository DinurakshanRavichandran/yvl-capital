import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import TeamPage from "./pages/team";
import AboutPage from "./pages/about";
import StudioPage from "./pages/studio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/studio" element={<StudioPage />} />
      </Routes>
    </Router>
  );
}

export default App;
