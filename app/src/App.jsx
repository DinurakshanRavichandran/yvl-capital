import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/homepage";
import TeamPage from "./pages/team";
import AboutPage from "./pages/about";
import StudioPage from "./pages/studio";
import ThesisPage from "./pages/thesis";
import AllocationPage from "./pages/allocation";
import ContactPage from "./pages/contactpage";

function App() {
  return (
    <Router>
      {/* The Header is outside Routes so it stays visible on every page */}
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/studio" element={<StudioPage />} />
        <Route path="/thesis" element={<ThesisPage />} />
        <Route path="/allocation" element={<AllocationPage />} />
        <Route path="/contact" element={<ContactPage />} /> 
      </Routes>

      {/* The Footer is outside Routes so it appears at the bottom of every page */}
      <Footer />
    </Router>
  );
}

export default App;