import React, { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { Bell, Search, User, Settings } from 'lucide-react';

export default function Navbar() {
  const { activeComponent } = useContext(MenuContext);
  return (
    <nav className="px-4 py-3 md:px-6 md:py-4 sticky top-0 bg-gray-900/50 backdrop-blur-sm z-20">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left side - Breadcrumb */}
<div className="flex items-center space-x-1">
  <div>
    <span className="text-white/70 text-sm">Pages</span>
    <span className="text-white/70 text-sm">/</span>
    <span className="text-white text-sm font-medium">{activeComponent}</span>
  </div>
</div>
        {/* Right side - Search, Icons and Profile */}
        <div className="flex items-center space-x-2 md:space-x-4 mt-2 md:mt-0">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Type here..."
              className="bg-transparent text-white placeholder-white/50 px-3 py-1 md:px-4 md:py-2 rounded-lg border border-white/20 focus:outline-none focus:border-blue-400 transition-all duration-300 w-40 md:w-48 text-xs md:text-sm"
            />
          </div>
          {/* Profile Section */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors duration-200">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="text-white/70 text-sm">Sign In</span>
          </div>
          {/* Icons */}
          <Bell className="text-white/70 hover:text-white w-5 h-5 cursor-pointer transition-colors duration-200" />
          <Settings className="text-white/70 hover:text-white w-5 h-5 cursor-pointer transition-colors duration-200" />
        </div>
      </div>
      <div className="">
        <h1 className="text-white text-lg font-semibold text-left">{activeComponent}</h1>
      </div>
    </nav>
  );
};
