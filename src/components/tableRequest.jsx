// src/DataGridComponent.js
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Grid } from "@mui/material";
import Chip from "@mui/material/Chip";
import DoneIcon from "@mui/icons-material/Done";
import InfoIcon from "@mui/icons-material/Info";
import ReportIcon from "@mui/icons-material/Report";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

const DataGridComponent = () => {
   const columns = [
      { field: "id", headerName: "ID Trx", width: 90 },
      { field: "name", headerName: "Name", width: 150 },
      { field: "email", headerName: "Email", width: 130 },
      {
         field: "status",
         headerName: "Status",
         width: 130,
         renderCell: (params) => {
            const status = params.value;
            let color;
            let icon;
            switch (status) {
               case "Done":
                  color = "success";
                  icon = <DoneIcon />;
                  break;
               case "Waiting":
                  color = "warning";
                  break;
               case "Process":
                  color = "primary";
                  icon = <HourglassBottomIcon />;
                  break;
               case "Error":
                  color = "error";
                  icon = <ReportIcon />;
                  break;
               default:
                  color = "default";
            }
            return (
               <Chip
                  label={status}
                  color={color}
                  icon={icon}
                  size="small"
                  className="mx-auto" // Tailwind CSS for centering
               />
            );
         },
      },
      { field: "time", headerName: "Time", width: 130 },
   ];

   const rows = [
      {
         id: 1123123,
         name: "John Doe",
         email: "john@gmail.com",
         status: "Done",
         time: "2020-01-01",
      },
      {
         id: 11231231,
         name: "John Doe",
         email: "john@gmail.com",
         status: "Error",
         time: "2020-01-01",
      },
      {
         id: 112311,
         name: "John Doe",
         email: "john@gmail.com",
         status: "Process",
         time: "2020-01-01",
      },
      // Add more rows as needed
   ];

   return (
      <Grid
         container
         className="data-grid-container mx-auto flex justify-center"
      >
         <Grid item xs={9} lg={12} className="mx-auto">
            <DataGrid rows={rows} columns={columns} pageSize={5} />
         </Grid>
      </Grid>
   );
};

export default DataGridComponent;
