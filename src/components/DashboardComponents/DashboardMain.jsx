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
      id: 1,
      company: "Chakra Soft UI Version",
      icon: "🎯",
      iconBg: "bg-red-500",
      members: [
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=24&h=24&fit=crop&crop=face",
      ],
      budget: "$14,000",
      completion: 60,
    },
    {
      id: 2,
      company: "Add Progress Track",
      icon: "📊",
      iconBg: "bg-blue-500",
      members: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=24&h=24&fit=crop&crop=face"
      ],
      budget: "$3,000",
      completion: 10,
    },
    {
      id: 3,
      company: "Fix Platform Errors",
      icon: "🔧",
      iconBg: "bg-gray-600",
      members: [
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=24&h=24&fit=crop&crop=face"
      ],
      budget: "Not set",
      completion: 100,
    },
    {
      id: 4,
      company: "Launch our Mobile App",
      icon: "🚀",
      iconBg: "bg-green-500",
      members: [
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1463453091185-61582044d556?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=24&h=24&fit=crop&crop=face",
      ],
      budget: "$32,000",
      completion: 100,
    },
    {
      id: 5,
      company: "Add the New Pricing Page",
      icon: "💎",
      iconBg: "bg-blue-600",
      members: [
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=24&h=24&fit=crop&crop=face",
      ],
      budget: "$400",
      completion: 25,
    },
    {
      id: 6,
      company: "Redesign New Online Shop",
      icon: "🛍️",
      iconBg: "bg-pink-500",
      members: [
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=24&h=24&fit=crop&crop=face"
      ],
      budget: "$7,600",
      completion: 40,
    },
  ];

  const orders = [
    {
      id: 1,
      icon: "🔵",
      iconBg: "bg-blue-500",
      title: "$2400, Design changes",
      time: "22 DEC 7:20 PM",
    },
    {
      id: 2,
      icon: "🔴",
      iconBg: "bg-red-500",
      title: "New order #4219423",
      time: "21 DEC 11:21 PM",
    },
    {
      id: 3,
      icon: "💳",
      iconBg: "bg-blue-400",
      title: "Server Payments for April",
      time: "21 DEC 9:28 PM",
    },
    {
      id: 4,
      icon: "💳",
      iconBg: "bg-orange-500",
      title: "New card added for order #3210145",
      time: "20 DEC 3:52 PM",
    },
    {
      id: 5,
      icon: "📦",
      iconBg: "bg-gray-600",
      title: "Unlock packages for Development",
      time: "19 DEC 11:35 PM",
    },
    {
      id: 6,
      icon: "🎯",
      iconBg: "bg-red-500",
      title: "New order #9851258",
      time: "18 DEC 4:41 PM",
    },
  ];


  return (
    <main className="flex-1 p-6">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 items-stretch">
  {/* Left Segment - Welcome Card with Image */}
  <div
    className="lg:col-span-1 rounded-2xl overflow-hidden relative p-6 text-white flex flex-col justify-between h-full"
    style={{
      backgroundImage: "url('/src/assets/DashboardIntroBg.svg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="bg-black/30 absolute inset-0 z-0" />
    <div className="relative z-10">
      <p className="text-white/70 text-sm mb-1">Welcome back,</p>
      <h2 className="text-white text-3xl font-bold mb-2">Mark Johnson</h2>
      <p className="text-white/70 text-sm mb-1">Glad to see you again!</p>
      <p className="text-white/70 text-sm mb-4">Ask me anything.</p>
      <button className="mt-45 flex items-center gap-2 text-sm font-medium bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg backdrop-blur-sm transition">
      Tap to record <span>→</span>
    </button>
    </div>
  </div>

  <div
  className="rounded-2xl p-6 text-white relative flex flex-col justify-between"
  style={{
    background: 'linear-gradient(to bottom, #041131, #081d48)'
  }}
>
  {/* Header */}
  <div className="flex items-center justify-between mb-6">
    <h3 className="text-white text-lg font-semibold">Referral Tracking</h3>
    <button className="text-white/50 hover:text-white transition">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="5" cy="12" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="19" cy="12" r="2" />
      </svg>
    </button>
  </div>

  <div className="flex justify-between items-center gap-6">
    {/* Left: Metrics */}
    <div className="space-y-4 w-1/2">
      <div className="bg-white/5 px-4 py-3 rounded-xl">
        <p className="text-white/60 text-sm mb-1">Invited</p>
        <p className="text-white text-lg font-bold">145 people</p>
      </div>
      <div className="bg-white/5 px-4 py-3 rounded-xl">
        <p className="text-white/60 text-sm mb-1">Bonus</p>
        <p className="text-white text-lg font-bold">1,465</p>
      </div>
    </div>

    {/* Right: Circular Progress */}
    <div className="w-60 h-60 relative">
  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke="#1e293b"
      strokeWidth="5"
      fill="transparent"
    />
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke="#10b981"
      strokeWidth="4"
      fill="transparent"
      strokeDasharray={`${(2 * Math.PI * 40) * 0.93} ${(2 * Math.PI * 40) * (1 - 0.93)}`}
      strokeLinecap="round"
    />
  </svg>
  <div className="absolute inset-0 flex flex-col items-center justify-center">
    <span className="text-white/60 text-sm">Safety</span>
    <span className="text-white text-3xl font-bold">9.3</span>
    <span className="text-white/60 text-sm">Total Score</span>
  </div>
</div>

  </div>
</div>

</div>


<div
  className="p-6 rounded-2xl relative overflow-hidden"
  style={{
    backgroundImage: 'linear-gradient(to top, #051641, #05255c)'
  }}>
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="absolute w-full border-t border-blue-300" style={{ top: `${20 + i * 13.33}%` }}></div>
        ))}
      </div>
      
      {/* Header */}
<div className="relative z-10 mb-20">
  <h2 className="text-white text-lg font-medium mb-2">Sales overview</h2>
  <p className="text-sm">
    <span className="text-green-400">(+5) more</span>
    <span className="text-gray-400"> in 2021</span>
  </p>
</div>
      
      {/* Y-axis labels */}
<div className="absolute left-2 top-20 bottom-15 flex flex-col justify-between text-white text-xs opacity-60">
  <span>500</span>
  <span>400</span>
  <span>300</span>
  <span>200</span>
  <span>100</span>
  <span>0</span>
</div>
      
      {/* Chart container */}
      <div className="relative h-48 ml-8 mr-4">
        {/* SVG Chart */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="areaGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.2"/>
            </linearGradient>
            <linearGradient id="areaGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#0891B2" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          
          {/* First area (darker blue) */}
          <path
            d="M0,120 Q100,90 200,95 T400,85 Q500,80 600,90 T800,100 Q900,110 1000,115 L1000,200 L0,200 Z"
            fill="url(#areaGradient1)"
          />
          
          {/* Second area (lighter blue/cyan) */}
          <path
            d="M0,40 Q100,35 200,45 T400,50 Q500,45 600,55 T800,60 Q900,65 1000,70 L1000,115 Q900,110 800,100 T600,90 Q500,80 400,85 T200,95 Q100,90 0,120 Z"
            fill="url(#areaGradient2)"
          />
          
          {/* Top line (cyan) */}
          <path
            d="M0,40 Q100,35 200,45 T400,50 Q500,45 600,55 T800,60 Q900,65 1000,70"
            stroke="#06B6D4"
            strokeWidth="2"
            fill="none"
          />
          
          {/* Bottom line (blue) */}
          <path
            d="M0,120 Q100,90 200,95 T400,85 Q500,80 600,90 T800,100 Q900,110 1000,115"
            stroke="#3B82F6"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      
      {/* X-axis labels */}
      <div className="flex justify-between text-white text-xs opacity-60 mt-4 ml-8 mr-4">
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>
        <span>Jul</span>
        <span>Aug</span>
        <span>Sep</span>
        <span>Oct</span>
        <span>Nov</span>
        <span>Dec</span>
      </div>
    </div>



        

        {/* Projects and Orders */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-5">
            {/* Projects Section */}
            <div
              className="xl:col-span-2 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              style={{
                background: "linear-gradient(135deg, #051641 0%, #05255c 100%)",
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-white text-xl font-semibold mb-1">Projects</h2>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">30 done this month</span>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-white">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1">
                {/* Header */}
                <div className="grid grid-cols-12 gap-4 px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  <div className="col-span-5">Companies</div>
                  <div className="col-span-2">Members</div>
                  <div className="col-span-2">Budget</div>
                  <div className="col-span-3">Completion</div>
                </div>

                {/* Project Rows */}
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="grid grid-cols-12 gap-4 px-4 py-4 hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <div className="col-span-5 flex items-center gap-3">
                      <div
                        className={`w-8 h-8 ${project.iconBg} rounded-lg flex items-center justify-center text-white text-sm`}
                      >
                        {project.icon}
                      </div>
                      <span className="text-white font-medium text-sm">{project.company}</span>
                    </div>

                    <div className="col-span-2 flex items-center">
                      <div className="flex -space-x-2">
                        {project.members.map((member, index) => (
                          <img
                            key={index}
                            src={member}
                            alt="Member"
                            className="w-6 h-6 rounded-full border-2 border-blue-800 object-cover"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="col-span-2 flex items-center">
                      <span className="text-white font-medium text-sm">{project.budget}</span>
                    </div>

                    <div className="col-span-3 flex items-center gap-3">
                      <span className="text-white font-medium text-sm">{project.completion}%</span>
                      <div className="flex-1 bg-black/20 rounded-full h-2">
                        <div
                          className="bg-blue-400 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.completion}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Orders Overview Section */}
            <div
              className="backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              style={{
                background: "linear-gradient(135deg, #051641 0%, #05255c 100%)",
              }}
            >
              <div className="mb-6">
                <h2 className="text-white text-xl font-semibold mb-1">Orders overview</h2>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">+30% this month</span>
                </div>
              </div>

              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 ${order.iconBg} rounded-lg flex items-center justify-center text-white text-sm flex-shrink-0`}
                    >
                      {order.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-sm leading-tight">{order.title}</p>
                      <p className="text-gray-400 text-xs mt-1">{order.time}</p>
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
