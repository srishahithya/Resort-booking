import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

function Sign() {
  return (
    <div>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  <img className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover" src="https://lakelurelogcabinrental.com/wp-content/uploads/2014/10/DSC_0186_copy-e1413906898123.jpg" alt="Background image"></img>

  <div className="relative bg-white px-4 py-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <h1 className="text-3xl text-center font-bold">SIGN UP</h1>

    <form className="mt-8 space-y-6">
      <div className="flex flex-col">
        <label htmlFor="username" className="text-xl text-gray-700 font-medium mb-2">Username</label>
        <input type="text" id="username" name="username" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1"></input>
      </div>

      <div className="flex flex-col">
        <label htmlFor="password" className="text-xl text-gray-700 font-medium mb-2">Password</label>
        <input type="password" id="password" name="password" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1"></input>
      </div>

      <div className="flex items-center justify-between">
        
      </div>

      <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <Link to = "/Login">Sign in</Link>
      </button>
    </form>
  </div>
    </div>
    </div>
  )
}

export default Sign

