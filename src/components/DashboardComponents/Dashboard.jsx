import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import DashboardMain from './DashboardMain';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-900 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/DashboardScreen.png')"
        }}
      ></div>
      
      {/* Optional overlay for better readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Main content */}
      <div className="relative z-10 flex w-full">
        <Sidebar />
        
        <div className="flex-1 flex flex-col">
          <Navbar />
          <DashboardMain />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;