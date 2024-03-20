import React from "react";
import Home from "../src/pages/Home.jsx";
import Allpackeges from "./pages/Allpackeges.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Allpackeges" element={<Allpackeges />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
