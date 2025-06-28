import React from 'react';
import { Trash2 } from 'lucide-react';

const Tables = () => {
  const authors = [
    {
      id: 1,
      name: "Esthera Jackson",
      email: "esthera@simmmple.com",
      function: "Manager",
      subFunction: "Organization",
      status: "Online",
      employed: "14/06/21",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Alexa Liras",
      email: "alexa@simmmple.com",
      function: "Programmer",
      subFunction: "Developer",
      status: "Offline",
      employed: "14/06/21",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Laurent Michael",
      email: "laurent@simmmple.com",
      function: "Executive",
      subFunction: "Projects",
      status: "Online",
      employed: "14/06/21",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Freduardo Hill",
      email: "freduardo@simmmple.com",
      function: "Manager",
      subFunction: "Organization",
      status: "Online",
      employed: "14/06/21",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Daniel Thomas",
      email: "daniel@simmmple.com",
      function: "Programmer",
      subFunction: "Developer",
      status: "Offline",
      employed: "14/06/21",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Mark Wilson",
      email: "mark@simmmple.com",
      function: "Designer",
      subFunction: "UI/UX Design",
      status: "Offline",
      employed: "14/06/21",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=40&h=40&fit=crop&crop=face"
    }
  ];

  const projects = [
    {
      id: 1,
      name: "Chakra Soft UI Version",
      budget: "$14,000",
      status: "Working",
      completion: 60,
      icon: "Xd",
      color: "bg-pink-500"
    },
    {
      id: 2,
      name: "Add Progress Track",
      budget: "$3,000",
      status: "Canceled",
      completion: 10,
      icon: "△",
      color: "bg-blue-500"
    },
    {
      id: 3,
      name: "Fix Platform Errors",
      budget: "Not set",
      status: "Done",
      completion: 100,
      icon: "⚬",
      color: "bg-orange-500"
    },
    {
      id: 4,
      name: "Launch our Mobile App",
      budget: "$32,000",
      status: "Done",
      completion: 100,
      icon: "◉",
      color: "bg-green-500"
    },
    {
      id: 5,
      name: "Add the New Pricing Page",
      budget: "$400",
      status: "Working",
      completion: 25,
      icon: "◆",
      color: "bg-blue-600"
    }
  ];

  return (
    <div className="min-h-screen p-6">
      {/* Authors Table */}
      <div className="mb-8">
        <div className="backdrop-blur-2xl  rounded-xl p-6 border" style={{
                background: "linear-gradient(360deg, #051641 0%, #05255c 100%)",
              }}>
          <h2 className="text-white text-xl font-semibold mb-6">Authors Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-2 text-gray-300 text-sm uppercase tracking-wide">AUTHOR</th>
                  <th className="text-left py-4 px-2 text-gray-300 text-sm uppercase tracking-wide">FUNCTION</th>
                  <th className="text-left py-4 px-2 text-gray-300 text-sm uppercase tracking-wide">STATUS</th>
                  <th className="text-left py-4 px-2 text-gray-300 text-sm uppercase tracking-wide">EMPLOYED</th>
                  <th className="py-4 px-2"></th>
                </tr>
              </thead>
              <tbody>
                {authors.map((author) => (
                  <tr key={author.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-2">
                      <div className="flex items-center space-x-3">
                        <img src={author.avatar} alt={author.name} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                          <div className="text-white font-medium">{author.name}</div>
                          <div className="text-gray-400 text-sm">{author.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="text-white font-medium">{author.function}</div>
                      <div className="text-gray-400 text-sm">{author.subFunction}</div>
                    </td>
                    <td className="py-4 px-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        author.status === 'Online' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                      }`}>
                        {author.status}
                      </span>
                    </td>
                    <td className="py-4 px-2 text-white">{author.employed}</td>
                    <td className="py-4 px-2">
                      <button className="text-red-400 hover:text-red-600 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Projects Table */}
      <div>
        <div className="backdrop-blur-2xl  rounded-xl p-6 border" style={{
                background: "linear-gradient(360deg, #051641 0%, #05255c 100%)", 
              }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-white text-xl font-semibold">Projects</h2>
              <div className="flex items-center space-x-2 mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-white font-medium">30 done</span>
                <span className="text-gray-400">this month</span>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full" >
              <thead>
                <tr className="border-b border-white/20 ">
                  <th className="text-left py-4 px-2 text-gray-300 text-sm uppercase tracking-wide">COMPANIES</th>
                  <th className="text-left py-4 px-2 text-gray-300 text-sm uppercase tracking-wide">BUDGET</th>
                  <th className="text-left py-4 px-2 text-gray-300 text-sm uppercase tracking-wide">STATUS</th>
                  <th className="text-left py-4 px-2 text-gray-300 text-sm uppercase tracking-wide">COMPLETION</th>
                  <th className="py-4 px-2"></th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-2">
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 ${project.color} rounded flex items-center justify-center text-white text-xs font-bold`}>
                          {project.icon}
                        </div>
                        <span className="text-white font-medium">{project.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-2 text-white font-medium">{project.budget}</td>
                    <td className="py-4 px-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Done' 
                          ? 'bg-green-500/20 text-green-400' 
                          : project.status === 'Working'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="py-4 px-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-white font-medium">{project.completion}%</span>
                        <div className="flex-1 bg-gray-700 rounded-full h-2 w-20">
                          <div 
                            className={`h-2 rounded-full ${project.completion === 100 ? 'bg-green-500' : 'bg-blue-500'}`}
                            style={{ width: `${project.completion}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <button className="text-red-400 hover:text-red-600 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
