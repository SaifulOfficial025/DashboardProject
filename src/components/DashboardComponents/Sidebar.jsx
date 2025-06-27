import React, { useState } from 'react';
import {
  Home,
  BarChart3,
  Calendar,
  CreditCard,
  User,
  Users,
  UserPlus,
  HelpCircle
} from 'lucide-react';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: BarChart3, label: 'Tables' },
    { icon: Calendar, label: 'Billing' },
    { icon: CreditCard, label: 'RTL' }
  ];

  const accountItems = [
    { icon: User, label: 'Profile' },
    { icon: Users, label: 'Sign In' },
    { icon: UserPlus, label: 'Sign Up' }
  ];

  const handleItemClick = (label) => {
    setActiveItem(label);
  };

  return (
    <div className="w-64 sticky top-4 bottom-4 h-[calc(100vh-2rem)] relative">
      {/* Main container with Vision UI styling */}
      <div className="flex flex-col h-full bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 rounded-2xl relative overflow-hidden">
        
        {/* Transparent gradient shade on right side */}
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white/8 via-blue-400/10 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 p-6 h-full flex flex-col">
          {/* Logo */}
          <div className="text-center mb-6">
            <h1 className="text-white text-sm font-semibold tracking-widest opacity-90">
              VISION UI FREE
            </h1>
          </div>

          {/* Menu Items */}
          <div className="space-y-1 mb-6">
            {menuItems.map((item, index) => (
              <div
                key={index}
                onClick={() => handleItemClick(item.label)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeItem === item.label
                    ? 'bg-blue-500/15 text-blue-400'
                    : 'text-white hover:text-blue-400 hover:bg-blue-500/10'
                }`}
              >
                <item.icon className="w-5 h-5 opacity-80" />
                <span className="font-medium text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Account Pages */}
          <div className="mb-6">
            <h3 className="text-white/60 text-xs font-semibold tracking-wider uppercase mb-3 px-4">
              ACCOUNT PAGES
            </h3>
            <div className="space-y-1">
              {accountItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleItemClick(item.label)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeItem === item.label
                      ? 'bg-blue-500/15 text-blue-400'
                      : 'text-white hover:text-blue-400 hover:bg-blue-500/10'
                  }`}
                >
                  <item.icon className="w-5 h-5 opacity-80" />
                  <span className="font-medium text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Help Component */}
          <div className="mt-auto">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl relative overflow-hidden">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                style={{
                  backgroundImage: "url('/src/assets/SidebarImage.png')"
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <HelpCircle className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">Need help?</h4>
                <p className="text-white/80 text-xs mb-3">Please check our docs</p>
                <button className="bg-white/20 hover:bg-white/30 border border-white/30 text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors duration-200 tracking-wide uppercase">
                  DOCUMENTATION
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;