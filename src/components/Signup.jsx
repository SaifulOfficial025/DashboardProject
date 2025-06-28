import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';
import { Link, useLocation } from "react-router-dom";
import backgroundImage from '../assets/LoginPage.svg';

export default function Signup() {
  const { login } = useContext(AuthContext);
  const history = useHistory();

  const location = useLocation(); 
  const from = location.state?.from?.pathname || '/dashboard'; 

  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    const result = await login(email, password);
    if (result.success) {
        history.push(from);
        // or any protected route
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#070B24]"> {/* Main container with dark background */}
      {/* Left Division - Background Image with Overlay Text */}
      <div 
        className="hidden lg:flex w-1/2 items-end p-10 relative overflow-hidden" 
        style={{ 
          backgroundImage: `url(${backgroundImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for text and potential subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
        
        {/* Text over the image */}
        <div className="relative z-10 text-white pb-8"> {/* Added padding bottom for better spacing */}
          
          
        </div>
      </div>

      

      

      {/* Right Division - Login Form */}
      <div className="flex flex-1 items-center justify-center p-6 sm:p-10 lg:w-1/2 ">
        <div className="w-full max-w-md ">
          <h2 className="text-white text-3xl font-bold mb-3 text-center">Welcome!</h2>
          <p className="text-white text-lg mb-8 text-center">Use this awesome forms to login or create new account in your project for free.</p>
        
        
        
        <div className='p-0.5 rounded-[2rem] bg-gradient-to-tr from-gray-500 via-white to-gray-500 shadow-sm shadow-gray-50'>

          <form className='w-full px-6 py-6 rounded-[2rem] bg-[#070b24] text-white placeholder-gray-400 focus:outline-none'>


            {/* Name Input */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">Name</label>
              <div className="p-[2px] rounded-[2rem] bg-gradient-to-tr from-gray-500 via-white to-gray-500">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full px-6 py-3 rounded-[2rem] bg-[#070b24] text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>


            {/* Email Input */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">Email</label>
              <div className="p-[2px] rounded-[2rem] bg-gradient-to-tr from-gray-500 via-white to-gray-500">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-6 py-3 rounded-[2rem] bg-[#070b24] text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-300 text-sm font-semibold mb-2">Password</label>
              
              <div className="p-[2px] rounded-[2rem] bg-gradient-to-tr from-gray-500 via-white to-gray-500">
                <input
                  type="email"
                  placeholder="Your Password"
                  className="w-full px-6 py-3 rounded-[2rem] bg-[#070b24] text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center mb-8">
                  <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600" />
                          <label htmlFor="rememberMe" className="ml-2 text-gray-300 text-sm">Remember me</label>
                        </label>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-[#422AFB] mt-5 hover:bg-[#341FC3] text-white font-bold py-3 px-4 rounded-lg transition duration-200 ease-in-out"
            >
              SIGN UP
            </button>
          </form>
        </div>

          {/* Don't have an account? Sign up */}
          <p className="text-center text-gray-400 text-sm mt-8">
            Don't have an account?{' '}
            <Link to="/" className="text-[#422AFB] hover:underline font-bold">Sign In</Link>

          </p>
        </div>
      </div>
    </div>
  );
}
