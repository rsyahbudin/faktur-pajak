// src/SearchComponent.js
import React, { useState } from "react";
import DataGridComponent from "./tableRequest";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { TextField, Button, Typography } from "@mui/material";

const SearchComponent = () => {
   const [searchTerm, setSearchTerm] = useState("");
   const [showDataGrid, setShowDataGrid] = useState(false);
   const navigate = useNavigate();

   const handleSearch = () => {
      setShowDataGrid(true);
   };

   const handleStatusRequest = () => {
      // Navigate to /status when the button is clicked
      navigate("/");
   };

   

   return (
      <div className="flex flex-col items-center justify-center h-screen">
         {/* Title and Logo */}
         <div className="flex flex-col items-center space-y-4 mt-10">
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
            variant="h4"
            align="center"
            gutterBottom
            style={{ marginTop: "20px" }}
         >
            Track Status Faktur Pajak
         </Typography>
         {/* Search Input and Button */}
         <div className="flex flex-col items-center justify-center space-y-4">
            <TextField
               label="ID Trx"
               variant="outlined"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="contained" color="error" onClick={handleSearch}>
               Track
            </Button>
            <Button variant="contained" color="error" onClick={handleStatusRequest}>
               Request Faktur Pajak
            </Button>
         </div>
         {showDataGrid && (
            <div className="mt-8">
                 <DataGridComponent searchTerm={searchTerm} />
            </div>
         )}
      </div>
   );
};

export default SearchComponent;
