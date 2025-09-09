import { useState } from "react";
import "./App.css";
import Navbar from "./Pages/Navbar";
import Slider from "./Pages/Slider";
import Hero from "./Pages/Hero";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Slider />
      <Hero />
    </div>
  );
}

export default App;
