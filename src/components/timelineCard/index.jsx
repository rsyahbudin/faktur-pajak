// timelineCard.js
import React, { useState } from "react";
import { ArrowForwardIos, BorderColorOutlined } from "@mui/icons-material";
import CustomModal from "../Modal"; // Import the CustomModal component

function timelineCard({ transaction }) {
   let buttonText;
   if (transaction.status === "Sudah Dibuat") {
      buttonText = "Close";
   } else {
      buttonText = "Open";
   }

   // State to manage the modal's visibility
   const [isOpen, setIsOpen] = useState(false);

   // Function to handle the icon click and open the modal
   const handleOpen = () => setIsOpen(true);

   // Function to handle the modal close
   const handleClose = () => setIsOpen(false);

   return (
      <div className="max-w-sm mx-auto bg-slate-900 border border-black rounded-xl shadow-lg overflow-hidden md:max-w-2xl m-4 relative">
         <div className="p-8">
            {/* Wrap the icon with a click handler */}
            <BorderColorOutlined fontSize="small" className="mr-2" />
            <span className="text-sm text-gray-900">{transaction.status}</span>
            <div className="flex justify-between items-center mt-1">
               <div className="uppercase tracking-wide text-md text-red-500 font-semibold mr-4">
                  ID Transaksi: {transaction.id}
               </div>
               <ArrowForwardIos
                  fontSize="small"
                  className="cursor-pointer"
                  onClick={handleOpen}
               />
            </div>
            <p className="mt-2 text-gray-500 text-sm">
               Tanggal: {transaction.date}
            </p>
            <div className="mt-2 mx-auto">
               <button className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                  {buttonText}
               </button>
            </div>
         </div>
         {/* Use the CustomModal component */}
         <CustomModal isOpen={isOpen} onClose={handleClose} />
      </div>
   );
}

export default timelineCard;
