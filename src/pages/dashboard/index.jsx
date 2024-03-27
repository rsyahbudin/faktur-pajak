import React from 'react';
import Sidebar  from '../../components/sidebar';
import { StatusCard } from '../../components/card';

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4 flex items-center justify-center">
        <StatusCard />
        {/* Tambahkan lebih banyak StatusCard sesuai kebutuhan */}
      </div>
    </div>
  );
}

export default Dashboard;
