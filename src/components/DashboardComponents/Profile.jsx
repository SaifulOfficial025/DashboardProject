import React, { useState } from 'react';

export default function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="flex flex-col p-6  text-white items-center">
      <h2 className="text-2xl font-bold mb-2 text-center">Edit Profile</h2>
      <div className="flex flex-1 items-center justify-center p-4 md:p-6 lg:p-10 md:w-1/2">
        <div className="w-full max-w-md px-2 md:px-0">
        
        
        
        <div className='p-0.5 rounded-[2rem] bg-gradient-to-tr from-gray-500 via-white to-gray-500 shadow-sm shadow-gray-50'>

          <form className='w-full px-6 py-6 rounded-[2rem] text-white placeholder-gray-400 focus:outline-none' style={{ background: "linear-gradient(225deg, #0f4693 0%, #05255c 100%)" }}>



            {/* Name Input */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">Name</label>
              <div className="p-[2px] rounded-[2rem] bg-gradient-to-tr from-gray-500 via-white to-gray-500">
                <input
                value={name}
                  type="text"
                  
                  onChange={(e) => setName(e.target.value)}
                  
                  className="w-full px-6 py-3 rounded-[2rem]  text-white placeholder-gray-400 focus:outline-none" style={{ background: "linear-gradient(225deg, #0f4693 0%, #05255c 100%)" }}
                />
              </div>
            </div>


            {/* Email Input */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">Email</label>
              <div className="p-[2px] rounded-[2rem] bg-gradient-to-tr from-gray-500 via-white to-gray-500">
                <input                
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  
                  className="w-full px-6 py-3 rounded-[2rem] bg-[#070b24] text-white placeholder-gray-400 focus:outline-none" style={{ background: "linear-gradient(225deg, #0f4693 0%, #05255c 100%)" }}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-300 text-sm font-semibold mb-2">Password</label>
              <div className="p-[2px] rounded-[2rem] bg-gradient-to-tr from-gray-500 via-white to-gray-500">
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                  
                  className="w-full px-6 py-3 rounded-[2rem] bg-[#070b24] text-white placeholder-gray-400 focus:outline-none" style={{ background: "linear-gradient(225deg, #0f4693 0%, #05255c 100%)" }}
                />
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-300 text-sm font-semibold mb-2">Confirm Password</label>
              <div className="p-[2px] rounded-[2rem] bg-gradient-to-tr from-gray-500 via-white to-gray-500">
                <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                  
                  className="w-full px-6 py-3 rounded-[2rem] bg-[#070b24] text-white placeholder-gray-400 focus:outline-none"style={{ background: "linear-gradient(225deg, #0f4693 0%, #05255c 100%)" }}
                />
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full mt-5 bg-[#000d24] 
           hover:bg-gradient-to-b hover:from-[#0f4693] hover:to-[#05255c]
           text-white font-bold py-3 px-4 rounded-lg 
           transition duration-200 ease-in-out"



              
            >
              Confirm Edit
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}
