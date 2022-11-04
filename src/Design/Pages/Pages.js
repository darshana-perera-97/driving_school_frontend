import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Gallery from "./Gallery";
import Contact from "./Contact";

export default function Pages() {
  return (
    <div style={{ padding: "55px 50px", height: "100%" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
