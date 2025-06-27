import React from 'react';
import { 
  TrendingUp,
  Users,
  UserPlus,
  BarChart3,
  ArrowUpRight,
  MoreHorizontal
} from 'lucide-react';

const DashboardMain = () => {
  const stats = [
    {
      title: "Today's Money",
      value: "$53,000",
      change: "+55%",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Today's Users",
      value: "2,300",
      change: "+3%",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      )
    },
    {
      title: "New Clients",
      value: "+3,052",
      change: "-2%",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
        </svg>
      )
    },
    {
      title: "Total Sales",
      value: "$173,000",
      change: "+8%",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      )
    }
  ];

  const projects = [
    {
      name: "Chakra Soft UI Version",
      users: 4,
      budget: "$14,000",
      completion: 60
    },
    {
      name: "Add Progress Track",
      users: 3,
      budget: "$3,000",
      completion: 10
    },
    {
      name: "Fix Platform Errors",
      users: 2,
      budget: "Not set",
      completion: 100
    },
    {
      name: "Launch our Mobile App",
      users: 5,
      budget: "$32,000",
      completion: 100
    },
    {
      name: "Add the New Pricing Page",
      users: 3,
      budget: "$400",
      completion: 25
    }
  ];

  const orders = [
    {
      title: "$2400, Design changes",
      time: "22 DEC 7:20 PM",
      status: "done"
    },
    {
      title: "New order #1832412",
      time: "21 DEC 11 PM",
      status: "done"
    },
    {
      title: "Server payments for April",
      time: "21 DEC 9:34 PM",
      status: "done"
    },
    {
      title: "New card added for order #4395133",
      time: "20 DEC 2:20 AM",
      status: "done"
    },
    {
      title: "Unlock packages for development",
      time: "18 DEC 4:54 AM",
      status: "error"
    },
    {
      title: "New order #9583120",
      time: "17 DEC 1:12 AM",
      status: "done"
    }
  ];

  return (
    <main className="flex-1 p-6 overflow-auto relative min-h-screen bg-gray-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      
      <div className="relative z-10">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 text-white relative overflow-hidden"
              style={{
                background: 'linear-gradient(to right, #050f2c, #0d204a)'
              }}
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              
              {/* Content */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="space-y-2">
                  <p className="text-blue-200 text-sm font-medium">{stat.title}</p>
                  <div className="flex items-end gap-2">
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                    <span className={`text-sm font-semibold mb-1 ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                
                {/* Icon */}
                <div className="bg-blue-500 rounded-xl p-3">
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Welcome Section and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Welcome Card */}
          <div className="lg:col-span-2 rounded-2xl p-6 relative overflow-hidden min-h-[200px]">
            {/* Background gradient as fallback */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600"></div>
            
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30"></div>
            
            {/* Content */}
            <div className="relative z-10 flex items-center justify-between h-full">
              <div>
                <p className="text-white/80 text-sm mb-1">Welcome back,</p>
                <h2 className="text-white text-3xl font-bold mb-2">Mark Johnson</h2>
                <p className="text-white/80 text-sm mb-1">Glad to see you again!</p>
                <p className="text-white/80 text-sm mb-4">Ask me anything.</p>
                
                <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm flex items-center gap-2">
                  Tap to record
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Side Stats */}
          <div className="space-y-6">
            {/* Referral Tracking */}
            <div 
              className="rounded-2xl p-6 text-white relative overflow-hidden"
              style={{
                background: 'linear-gradient(to right, #050f2c, #0d204a)'
              }}
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white text-lg font-semibold">Referral Tracking</h3>
                  <MoreHorizontal className="text-gray-400 w-5 h-5" />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-blue-200 text-sm">Invited</p>
                    <p className="text-white text-2xl font-bold">145 people</p>
                  </div>
                  
                  <div>
                    <p className="text-blue-200 text-sm">Bonus</p>
                    <p className="text-white text-2xl font-bold">1,465</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety Score */}
            <div 
              className="rounded-2xl p-6 text-white relative overflow-hidden"
              style={{
                background: 'linear-gradient(to right, #050f2c, #0d204a)'
              }}
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white text-lg font-semibold">Safety</h3>
                  <MoreHorizontal className="text-gray-400 w-5 h-5" />
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="relative w-24 h-24">
                    {/* Background circle */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="35"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        className="text-gray-600"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="35"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={`${2.199 * 93} ${2.199 * (100 - 93)}`}
                        className="text-green-400"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-white text-2xl font-bold">9.3</span>
                      <span className="text-blue-200 text-xs">Total Score</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sales Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Sales Chart */}
          <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700">
            <h3 className="text-white text-lg font-semibold mb-4">Sales overview</h3>
            <p className="text-gray-400 text-sm mb-4">Last 7 days</p>
            <div className="h-32 flex items-end space-x-1">
              {[30, 40, 35, 50, 45, 60, 55].map((height, index) => (
                <div 
                  key={index} 
                  className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t" 
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Satisfaction Rate */}
          <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700">
            <h3 className="text-white text-lg font-semibold mb-4">Satisfaction Rate</h3>
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-700"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2.51 * 93} ${2.51 * (100 - 93)}`}
                    className="text-green-400"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">9.3</span>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm">based on likes</p>
          </div>

          {/* Additional metric placeholder */}
          <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700">
            <h3 className="text-white text-lg font-semibold mb-4">Revenue</h3>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">$42,000</div>
              <div className="text-green-400 text-sm flex items-center justify-center gap-1">
                <ArrowUpRight className="w-4 h-4" />
                +12% this month
              </div>
            </div>
          </div>
        </div>

        {/* Projects and Orders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Projects */}
          <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-lg font-semibold">Projects</h3>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400 text-sm">✓</span>
                <span className="text-gray-400 text-sm">30 done this month</span>
              </div>
            </div>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-white font-medium">{project.name}</h4>
                    <div className="flex items-center space-x-4 mt-1">
                      <div className="flex -space-x-2">
                        {[...Array(project.users)].map((_, i) => (
                          <div key={i} className="w-6 h-6 bg-blue-500 rounded-full border-2 border-gray-800"></div>
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm">{project.budget}</span>
                      <span className="text-gray-400 text-sm">{project.completion}%</span>
                    </div>
                  </div>
                  <MoreHorizontal className="text-gray-400 w-5 h-5" />
                </div>
              ))}
            </div>
          </div>

          {/* Orders Overview */}
          <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-lg font-semibold">Orders overview</h3>
              <div className="flex items-center space-x-2">
                <ArrowUpRight className="text-green-400 w-4 h-4" />
                <span className="text-green-400 text-sm">+30%</span>
                <span className="text-gray-400 text-sm">this month</span>
              </div>
            </div>
            <div className="space-y-4">
              {orders.map((order, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${order.status === 'done' ? 'bg-green-400' : 'bg-red-400'}`}></div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">{order.title}</h4>
                    <p className="text-gray-400 text-sm">{order.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardMain;