
import React from 'react';
import logo from './assets/logo.png';

const Login = () => {
  return (
    <div class=" bg-orange-100 h-screen flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div class="flex justify-center mb-8">
          <img src={logo} alt="ROF Logo" className="mx-auto mb-4" />
        </div>
        <h2 class="text-2xl font-semibold text-center mb-6">Welcome to ROF Team Portal</h2>
        <p class="text-gray-600 text-center mb-8">Use your work email to log in your team workspace</p>
        <form>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 mb-2">Email / Employee ID</label>
            <input type="email" id="email" placeholder="Enter your email address" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500" />
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-700 mb-2">Password
              <span> <a href="#" class="text-sm text-brown-600 hover:underline float-right mt-2">Forgot your password?</a></span>
            </label>
            <input type="password" id="password" placeholder="Enter your password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500" />

          </div>
          <button type="submit" class="w-full  bg-red-950  text-white py-2 rounded-md hover:bg-brown-800 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:ring-offset-2">Log in</button>
        </form>
      </div>
    </div>
  );

}
export default Login
