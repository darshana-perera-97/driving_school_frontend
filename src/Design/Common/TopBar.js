import React from "react";
import { Link } from "react-router-dom";
import { clrs } from "../DataSheet";

export default function TopBar() {
  return (
    <div
      style={{
        background: clrs[0],
        padding: "10px 0px",
        position: "fixed",
        top: "0",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <p
        style={{
          fontSize: "24px",
          color: "white",
          fontWeight: "400",
          fontFamily: "Courgette",
          paddingLeft: "40px",
        }}
      >
        Driving School
      </p>
      <div style={{ paddingRight: "30px", display: "flex" }}>
        <Link to="/" id="menuBarLink">
          Home
        </Link>
        <Link to="/about" id="menuBarLink">
          About Us
        </Link>
        <Link to="/services" id="menuBarLink">
          Services
        </Link>
        <Link to="/gallery" id="menuBarLink">
          Gallery
        </Link>
        <Link to="/contact" id="menuBarLink">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
