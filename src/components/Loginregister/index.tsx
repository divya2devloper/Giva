"use client";

import React, { useState } from 'react';

const Loginregister = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="bg-gray-50 font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          {isLogin ? (
            <div className="p-8 rounded-2xl bg-white shadow">
              <h2 className="text-gray-800 text-center text-2xl font-bold">Log in</h2>
              <form className="mt-8 space-y-4">
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">User name</label>
                  <div className="relative flex items-center">
                    <input name="username" type="text" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-black" placeholder="Enter user name" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                      <circle cx="10" cy="7" r="6"></circle>
                      <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"></path>
                    </svg>
                  </div>
                </div>

                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Password</label>
                  <div className="relative flex items-center">
                    <input name="password" type="password" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-black" placeholder="Enter password" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                      <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"></path>
                    </svg>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="javascript:void(0);" className="text-pink-500 hover:underline font-semibold">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div className="!mt-8">
                  <button type="button" className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-red-200 hover:bg-pink-500 blue-700 focus:outline-none">
                    Sign in
                  </button>
                </div>
                <p className="text-gray-800 text-sm !mt-8 text-center">Don't have an account? <a href="javascript:void(0);" onClick={handleToggle} className="text-pink-500 hover:underline ml-1 whitespace-nowrap font-semibold">Register here</a></p>
              </form>
            </div>
          ) : (
            <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
              <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
                <div className="text-center mb-12"></div>

                <form>
                  <div className="space-y-6">
                  <h2 className="text-gray-800 text-center text-2xl font-bold">Sign Up</h2>
                    <div>
                        
                      <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                      <input name="email" type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-black" placeholder="Enter email" />
                    </div>
                    <div>
                      <label className="text-gray-800 text-sm mb-2 block">Password</label>
                      <input name="password" type="password" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-black" placeholder="Enter password" />
                    </div>
                    <div>
                      <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
                      <input name="cpassword" type="password" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-black" placeholder="Enter confirm password" />
                    </div>

                    <div className="flex items-center">
                      <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-black focus:ring-black border-gray-300 rounded" />
                      <label htmlFor="remember-me" className="text-gray-800 ml-3 block text-sm">
                        I accept the <a href="javascript:void(0);" className="text-pink-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
                      </label>
                    </div>
                  </div>

                  <div className="!mt-12">
                    <button type="button" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-red-200 hover:bg-pink-500 focus:outline-none">
                      Create an account
                    </button>
                  </div>
                  <p className="text-gray-800 text-sm mt-6 text-center">Already have an account? <a href="javascript:void(0);" onClick={handleToggle} className="text-pink-500 font-semibold hover:underline ml-1">Login here</a></p>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Loginregister;
