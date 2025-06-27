import React from 'react';
import { Bell, Search, User, Settings } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Breadcrumb */}
        <div className="flex items-center space-x-1">
          <div>
            <span className="text-white/70 text-sm">Pages</span>
            <span className="text-white/70 text-sm">/</span>
            <span className="text-white text-sm font-medium">Dashboard</span>
          </div>
        </div>
        {/* Right side - Search, Icons and Profile */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Type here..."
              className="bg-transparent text-white placeholder-white/50 px-4 py-2 rounded-lg border border-white/20 focus:outline-none focus:border-blue-400 transition-all duration-300 w-48 text-sm"
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
        <h1 className="text-white text-lg font-semibold text-left">Dashboard</h1>
      </div>
    </nav>
  );
};