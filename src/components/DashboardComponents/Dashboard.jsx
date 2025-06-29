import React, { useContext } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import DashboardMain from './DashboardMain';
import { MenuContext, MenuProvider } from '../../context/MenuContext';
import Tables from './Tables';
import Billing from './Billing';
import RTL from './RTL';
import Profile from './Profile';

import SignIn from '../LoginPage';
import SignUp from '../Signup';

const DashboardContent = () => {
  const { activeComponent } = useContext(MenuContext);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <DashboardMain />;
      case 'Tables':
        return <Tables />;
      case 'Billing':
        return <Billing />;
      case 'RTL':
        return <RTL />;
      case 'Profile':
        return <Profile />;
      case 'Sign In':
        return <SignIn />;
      case 'Sign Up':
        return <SignUp />;
      default:
        return <DashboardMain />;
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{
          backgroundImage: "url('/src/assets/DashboardScreen.png')"
        }}
      ></div>

      {/* Optional overlay for better readability */}
      <div className="absolute inset-0 bg-black/30 hidden md:block"></div>

      {/* Main layout */}
      <div className="relative z-10 flex flex-col md:flex-row h-screen">
        {/* Sidebar */}
        <div className="block overflow-y-auto max-h-1/3 md:max-h-full">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
          <Navbar />

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            {renderComponent()}
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <MenuProvider>
      <DashboardContent />
    </MenuProvider>
  );
};

export default Dashboard;
