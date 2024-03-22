import React from "react";
import Sidebar from "../../components/Sidebar";
import { TextField, Button, Container, Grid, Typography } from "@mui/material";

const index = () => {
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
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Button variant="contained" color="primary">
                  Kirim
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
};

export default index;
