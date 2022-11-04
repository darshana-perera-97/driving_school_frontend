import React from "react";
import Button from "@mui/material/Button";
import { coppyRightText, clrs } from "../DataSheet";

export default function Footer() {
  return (
    <div
      style={{
        background: clrs[0],
        padding: "10px 0px",
        position: "fixed",
        bottom: "0",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <p
        style={{
          color: clrs[1],
          opacity: "0.6",
          marginLeft: "30px",
          paddingTop: "10px",
        }}
      >
        {coppyRightText}
      </p>
      <div style={{ marginRight: "30px" }}>
        <Button variant="contained">Want a help</Button>
      </div>
    </div>
  );
}
