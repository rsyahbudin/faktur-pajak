import React from "react";
import Sidebar from "../../components/sidebar";
import TransactionCard from "../../components/timelineCard";

const transactions = [
   { id: "12345", date: "2024-04-01", status: "Sudah Dibuat"},
   { id: "12345", date: "2024-04-01", status: "Sudah Dibuat"},
   { id: "12345", date: "2024-04-01", status: "Belum Dibuka"},
   { id: "12345", date: "2024-04-01", status: "Sudah Dibuat"},
   { id: "12345", date: "2024-04-01", status: "Sudah Dibuat"},
   { id: "12345", date: "2024-04-01", status: "Belum Dibuka"},
   { id: "12345", date: "2024-04-01", status: "Sudah Dibuat"},
   { id: "12345", date: "2024-04-01", status: "Belum Dibuka 3 Hari"},
];

const timeline = () => {
   return (
      <div className="flex">
         <Sidebar />
         <div className="flex-grow p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 justify-center items-center">
               {transactions.map((transaction) => (
                  <TransactionCard
                     key={transaction.id}
                     transaction={transaction}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default timeline;
