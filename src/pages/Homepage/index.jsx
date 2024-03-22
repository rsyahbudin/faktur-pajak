import * as React from "react";
import { TextField, Button, Container, Grid, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ReCAPTCHA from "react-google-recaptcha";
import logo from "../../assets/logo.png";

const index = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    // Handle the captcha value here, e.g., validate the form
  };
  return (
    <>
      <div
        className="flex items-center justify-center h-full"
        style={{ minHeight: "100vh" }}
      >
        <div className="flex-grow">
          <Container>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{ width: "200px", height: "auto", objectFit: "contain" }}
              />
            </div>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              style={{ marginTop: "20px" }}
            >
              Faktur Pajak Trans Retail Indonesia
            </Typography>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} className="flex justify-center">
                <TextField
                  style={{ width: "50%", marginBottom: "10px" }}
                  helperText="Please enter your name"
                  id="demo-helper-text-misaligned"
                  label="Name"
                />
              </Grid>
              <Grid item xs={12} className="flex justify-center">
                <TextField
                  style={{ width: "50%", marginBottom: "10px" }}
                  helperText="Please enter your ID Transaction"
                  id="demo-helper-text-misaligned"
                  label="ID Trx"
                />
              </Grid>
              <Grid item xs={12} className="flex justify-center">
                <TextField
                  style={{ width: "50%", marginBottom: "10px" }}
                  helperText="Please enter your Email"
                  id="demo-helper-text-misaligned"
                  label="Email"
                />
              </Grid>
              <Grid item xs={12} className="flex justify-center">
                <TextField
                  style={{ width: "50%", marginBottom: "10px" }}
                  helperText="Please enter your Phone Number"
                  id="demo-helper-text-misaligned"
                  label="Phone Number"
                />
              </Grid>
              <Grid item xs={12} className="flex justify-center">
                <TextField
                  style={{ width: "50%", marginBottom: "10px" }}
                  helperText="Please enter your NPWP"
                  id="demo-helper-text-misaligned"
                  label="NPWP"
                />
              </Grid>

              <Grid item xs={12}>
                <div className="form_group_recaptcha">
                  <ReCAPTCHA
                    sitekey="Your_Client_Site_Key" // Replace with your actual site key
                    onChange={handleCaptchaChange}
                  />
                </div>
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <React.Fragment>
                  <Button
                    variant="contained"
                    onClick={handleClickOpen}
                    color="error"
                    sx={{ marginRight: 3 }}
                  >
                    Request Faktur Pajak
                  </Button>
                  <Button variant="contained" color="error">
                    Cek Status Request
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Apakah Email sudah benar ?"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Karena Faktur akan dikirim melalui email
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>No</Button>
                      <Button onClick={handleClose} autoFocus>
                        Yes
                      </Button>
                    </DialogActions>
                  </Dialog>
                </React.Fragment>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
};

export default index;
