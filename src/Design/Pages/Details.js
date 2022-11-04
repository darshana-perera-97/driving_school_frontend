import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";

export default function Details() {
  return (
    <div>
      <p
        style={{
          fontSize: "28px",
          padding: "20px 0px",
          fontWeight: "600",
          color: "teal",
        }}
      >
        Details for Documents
      </p>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField id="outlined-basic" label="Address" variant="outlined" />
        <br />
        <TextField id="outlined-basic" label="Birthday" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Class of Vehicle"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <br />
        <TextField id="outlined-basic" label="Tel No" variant="outlined" />
        <TextField id="outlined-basic" label="NIC No" variant="outlined" />
        <TextField id="outlined-basic" label="Gender" variant="outlined" />
        <br />
        <p
          style={{
            fontSize: "28px",
            padding: "20px 0px",
            fontWeight: "600",
            color: "teal",
          }}
        >
          Upload Bellow Documents
        </p>
        <Button variant="contained" component="label">
          Photo
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <Button variant="contained" component="label">
          Birth Certificate
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <Button variant="contained" component="label">
          NIC
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <br />
        <Button variant="contained" component="label">
          Medical Report
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <br />
      </Box>
      <div style={{ display: "flex" }}>
        <Radio
          value="a"
          name="radio-buttons"
          inputProps={{ "aria-label": "A" }}
        />
        <p style={{ marginTop: "10px" }}>
          Prove that above entered details are rights and ....
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <Button variant="contained" component="label" color="success">
          Submit
        </Button>
        <div style={{ width:"20px" }}></div>
        <Button variant="contained" component="label" color="error">
          Reset
        </Button>
      </div>
    </div>
  );
}
