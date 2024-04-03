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
   Paper,
   InputAdornment,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ReCAPTCHA from "react-google-recaptcha";
import logo from "../../assets/logo.png";
import {
   AccountBox,
   Phone,
   Receipt,
   AccountCircle,
   Email,
} from "@mui/icons-material";

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
   const [emailError, setEmailError] = React.useState(null);
   const [name, setName] = React.useState("");
   const [idTrx, setIdTrx] = React.useState("");
   const [email, setEmail] = React.useState("");
   const [phoneNumber, setPhoneNumber] = React.useState("");
   const [npwp, setNpwp] = React.useState("");

   const [nameValid, setNameValid] = React.useState(true);
   const [idTrxValid, setIdTrxValid] = React.useState(true);
   const [phoneNumberValid, setPhoneNumberValid] = React.useState(true);
   const [npwpValid, setNpwpValid] = React.useState(true);
   const [emailValid, setEmailValid] = React.useState(true);

   const isValidEmail = (email) => {
      return /\S+@\S+\.\S+/.test(email);
   };

   const handleEmailChange = (event) => {
      const emailValue = event.target.value;
      if (!isValidEmail(emailValue)) {
         setEmailError("Email is invalid");
      } else {
         setEmailError(null);
      }
      setEmail(emailValue);
   };

   const handleClickOpen = () => {
      const allFieldsValid =
         name && idTrx && email && phoneNumber && npwp && !emailError;
      if (allFieldsValid) {
         setOpen(true);
      } else {
         setNameValid(name ? true : false);
         setIdTrxValid(idTrx ? true : false);
         setEmailValid(email ? true : false);
         setPhoneNumberValid(phoneNumber ? true : false);
         setNpwpValid(npwp ? true : false);
      }
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
                           error={!nameValid}
                           helperText={
                              !nameValid ? "Please enter your name" : ""
                           }
                           style={{ width: "50%", marginBottom: "10px" }}
                           id="demo-helper-text-misaligned"
                           label="Name"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           required
                           InputProps={{
                              startAdornment: (
                                 <InputAdornment position="start">
                                    <AccountCircle />
                                 </InputAdornment>
                              ),
                           }}
                        />
                     </Grid>
                     <Grid item xs={12} className="flex justify-center">
                        <TextField
                           error={!idTrxValid}
                           helperText={
                              !idTrxValid
                                 ? "Please enter your ID Transaction"
                                 : ""
                           }
                           style={{ width: "50%", marginBottom: "10px" }}
                           // helperText="Please enter your ID Transaction"
                           id="demo-helper-text-misaligned"
                           label="ID Trx"
                           value={idTrx}
                           onChange={(e) => setIdTrx(e.target.value)}
                           required
                           InputProps={{
                              startAdornment: (
                                 <InputAdornment position="start">
                                    <Receipt />
                                 </InputAdornment>
                              ),
                           }}
                        />
                     </Grid>
                     <Grid item xs={12} className="flex justify-center">
                        <TextField
                           // error={!emailValid}
                           // helperText={
                           //    !emailValid ? "Please enter your Email" : ""
                           // }
                           // helperText={emailError ? emailError : "" && !emailValid ? "Please enter your Email" : "" }
                           helperText={emailError ? emailError : (!emailValid ? "Please enter your Email" : "")}

                           style={{ width: "50%", marginBottom: "10px" }}
                           id="demo-helper-text-misaligned"
                           label="Email"
                           value={email}
                           onChange={handleEmailChange}
                           error={!!emailError || !emailValid}
                           required
                           InputProps={{
                              startAdornment: (
                                 <InputAdornment position="start">
                                    <Email />
                                 </InputAdornment>
                              ),
                           }}
                        />
                     </Grid>
                     <Grid item xs={12} className="flex justify-center">
                        <TextField
                           error={!phoneNumberValid}
                           helperText={
                              !phoneNumberValid
                                 ? "Please enter your Phone Number"
                                 : ""
                           }
                           style={{ width: "50%", marginBottom: "10px" }}
                           id="outlined-error-helper-text"
                           label="Phone Number"
                           value={phoneNumber}
                           onChange={(e) => setPhoneNumber(e.target.value)}
                           required
                           InputProps={{
                              startAdornment: (
                                 <InputAdornment position="start">
                                    <Phone />
                                 </InputAdornment>
                              ),
                           }}
                        />
                     </Grid>
                     <Grid item xs={12} className="flex justify-center">
                        <TextField
                           error={!npwpValid}
                           helperText={
                              !npwpValid ? "Please enter your ID NPWP" : ""
                           }
                           style={{ width: "50%", marginBottom: "10px" }}
                           id="demo-helper-text-misaligned"
                           label="NPWP"
                           value={npwp}
                           onChange={(e) => setNpwp(e.target.value)}
                           required
                           InputProps={{
                              startAdornment: (
                                 <InputAdornment position="start">
                                    <AccountBox />
                                 </InputAdornment>
                              ),
                           }}
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
