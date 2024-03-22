import * as React from "react";
import Sidebar from "../../components/Sidebar";
import { TextField, Button, Container, Grid, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ReCAPTCHA from "react-google-recaptcha";

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
        <Sidebar />
        <div className="flex-grow">
          <Container>
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
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="ID Trx"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="No Telpon"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="NPWP"
                  fullWidth
                  variant="outlined"
                  margin="normal"
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
                    sx={{ marginRight: 3 }}
                  >
                    Request Faktur Pajak
                  </Button>
                  <Button variant="contained">Cek Status Request</Button>
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
