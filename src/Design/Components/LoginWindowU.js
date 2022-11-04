import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function LoginWindowU() {
  const [open, setOpen] = React.useState(false);
  const [usr, setUsr] = React.useState("");
  const [psw, setPsw] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const reset = () => {
    setPsw("");
    setUsr("");
  };

  const handleClose = () => {
    setOpen(false);
  };
  const msj = () => {
    window.alert("Login to System Successfully");
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
            value={usr}
            autoFocus
            margin="dense"
            id="name"
            label="User Name"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setUsr(e.target.value);
            }}
          />
          <TextField
            autoFocus
            value={psw}
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setPsw(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => msj()}>Submit</Button>
          <Button onClick={() => reset()}>Reset</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
