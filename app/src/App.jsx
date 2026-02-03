import React from "react";
import AboutUs from "./components/aboutus";
import WhyUs from "./components/whyus"
import WhatWeBack from "./components/whatweback";

function App() {
  return (
    <>
    <div>
      {/* Other sections/components */}
      <AboutUs />
    </div>
    <div>
      <WhyUs/>
    </div>
    <div>
      <WhatWeBack/>
    </div>
    </>
    
  );
}

export default App;
