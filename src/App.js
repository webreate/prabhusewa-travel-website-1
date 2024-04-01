import React from "react";
import Home from "../src/pages/Home.jsx";
import Allpackeges from "./pages/Allpackeges.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Privacypolicy from "./pages/Privacypolicy.jsx";
import Termsofconditions from "./pages/Termsofconditions.jsx";
import Gallery from "./pages/Gallery.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Allpackeges" element={<Allpackeges />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Privacypolicy" element={<Privacypolicy />} />
          <Route path="/Termsofconditions" element={<Termsofconditions />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
