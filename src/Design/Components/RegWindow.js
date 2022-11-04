import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function RegWindow() {
  const [open, setOpen] = React.useState(false);
  const [usr, setUsr] = React.useState([]);
  const msj = () => {
    window.alert("Login to System Successfully");
  };
  const reset = () => {};

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        User_Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>User Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you already have an account, Login with this window.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            width="50%"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="City"
            type="email"
            width="50%"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Address"
            type="email"
            width="50%"
            variant="standard"
          />
          <br />{" "}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tel No"
            type="email"
            width="50%"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="NIC No"
            type="email"
            width="50%"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            width="50%"
            variant="standard"
          />
          <br />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="email"
            width="75%"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Confirlm Password"
            type="email"
            width="75%"
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Link to="/details">
            <Button onClick={() => msj()}>Submit</Button>
          </Link>
          <Button onClick={() => reset()}>Reset</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
