import React, { useState } from "react";
// import {  useSelector } from "react-redux";

export function StatusCard({ title, status }) {
    const [isLoading, setIsLoading] = useState(false);
    // const stateData = useSelector((state) => state?.auth?.data);

  return (
    <>
      {isLoading ? (
        <>Loading</>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6">
            <div className="bg-[#9ca3af] rounded-xl py-6 px-6 text-white">
              <h1>Total Transaksi</h1>
              <p className="font-medium text-xl mt-2">
                0
              </p>
            </div>
            <div className="bg-[#9ca3af] rounded-xl py-6 px-6 text-white">
              <h1>Total Faktur Open</h1>
              <p className="font-medium text-xl mt-2">
                0 
              </p>
            </div>
            <div className="bg-[#9ca3af] rounded-xl py-6 px-6 text-white">
              <h1>Total Faktur Process</h1>
              <p className="font-medium text-xl mt-2">
                0
              </p>
            </div>
            <div className="bg-[#9ca3af] rounded-xl py-6 px-6 text-white">
              <h1>Total Faktur Done</h1>
              <p className="font-medium text-xl mt-2">
                0
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
