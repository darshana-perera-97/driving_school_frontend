import React from "react";
import LoginWindowU from "../Components/LoginWindowU";
import RegWindow from "../Components/RegWindow";

export default function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ padding: "60px 50px" }}>
        <p style={{ fontSize: "35px" }}>Welcome to</p>
        <p
          style={{
            fontSize: "45px",
            padding: "20px 0px",
            fontWeight: "600",
            color: "#008080",
          }}
        >
          Driving School <br />
          Management System
        </p>
        <p style={{ fontSize: "17px", width: "90%", padding: "20px 0px" }}>
          This will be a sample text to be displayed here. This will be a sample
          text to be displayed here. This will be a sample text to be displayed
          here. <br />
          This will be a sample text to be displayed here. This will be a sample
          text to be displayed here. This will be a sample text to be displayed
          here.
        </p>
        <div
          style={{
            display: "flex",
          }}
        >
          <LoginWindowU />
          <RegWindow />
        </div>
      </div>
      <img
        src="https://moodle.com/wp-content/uploads/2022/02/get-moodle-lms.png"
        height="400px"
        style={{ padding: "50px", paddingRight: "130px" }}
      />
    </div>
  );
}
