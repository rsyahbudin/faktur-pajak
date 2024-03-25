import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
   TextField,
   Button,
   Container,
   Grid,
   Typography,
   Modal,
   Backdrop,
   Box,
   Fade,
   Stack,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ReCAPTCHA from "react-google-recaptcha";
import logo from "../../assets/logo.png";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 400,
   bgcolor: "background.paper",
   border: "1px solid #e83030",
   boxShadow: 20,
   p: 4,
};

const index = () => {
   const navigate = useNavigate();
   const [open, setOpen] = React.useState(false);
   const [modalOpen, setModalOpen] = React.useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleModalOpen = () => {
      setModalOpen(true);
   };

   const handleModalClose = () => {
      setModalOpen(false);
      setOpen(false);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const handleCaptchaChange = (value) => {
      console.log("Captcha value:", value);
      // Handle the captcha value here, e.g., validate the form
   };

   const handleStatusRequest = () => {
      // Navigate to /status when the button is clicked
      navigate("/status");
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
                        style={{
                           width: "200px",
                           height: "auto",
                           objectFit: "contain",
                        }}
                        className="mt-4"
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
                           <Stack
                              direction={{ xs: "column", sm: "row" }}
                              spacing={2}
                              justifyContent="center"
                           >
                              <Button
                                 variant="contained"
                                 onClick={handleClickOpen}
                                 color="error"
                                 sx={{ marginRight: 3 }}
                              >
                                 Request Faktur Pajak
                              </Button>
                              <Button
                                 variant="contained"
                                 color="error"
                                 onClick={handleStatusRequest}
                              >
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
                                    <Button onClick={handleModalOpen} autoFocus>
                                       Yes
                                    </Button>
                                 </DialogActions>
                              </Dialog>
                              <Modal
                                 aria-labelledby="transition-modal-title"
                                 aria-describedby="transition-modal-description"
                                 open={modalOpen}
                                 onClose={handleModalClose}
                                 closeAfterTransition
                                 slots={{ backdrop: Backdrop }}
                                 slotProps={{
                                    backdrop: {
                                       timeout: 500,
                                    },
                                 }}
                              >
                                 <Fade in={modalOpen}>
                                    <Box sx={style}>
                                       <Typography
                                          id="transition-modal-title"
                                          variant="h6"
                                          component="h2"
                                       >
                                          Faktur Sudah Terkirim ke Email
                                       </Typography>
                                       <Typography
                                          id="transition-modal-description"
                                          sx={{ mt: 2 }}
                                       >
                                          No. Request : 1203213 Status Open
                                       </Typography>
                                    </Box>
                                 </Fade>
                              </Modal>
                           </Stack>
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
