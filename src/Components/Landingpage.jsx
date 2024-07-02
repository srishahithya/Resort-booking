import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import Home from './Home';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  
    return (
      <div
        onClick={() => loginWithRedirect()}
        className="cursor-pointer text-black font-bold rounded flex items-center"
      >
     
        <span className="ml-2">Log In</span>
      </div>
    );
  };
  
  const LogoutButton = () => {
    const { logout } = useAuth0();
  
    return (
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </button>
      
      
    );
  };

function Landingpage() {
  return (
    <div>
       <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-gray-800">Home Heaven</p>
          <div className="flex gap-2">
          <Link to = "/Home"><button>Home</button></Link>
          <LoginButton />
      <LogoutButton />
          </div>
        </div>
      </div>

      <div className="relative h-screen bg-cover bg-center">
        <img src="http://www.luxxu.net/blog/wp-content/uploads/2017/02/20-Incredible-Modern-Houses-Around-the-United-States-5.jpg"/>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-white text-shadow text-4xl font-bold mb-4">Welcome to Paradise</h1>
            <p className="text-gray-200 text-shadow text-lg mb-8">Book your dream vacation today</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
          <p className="text-gray-600 mt-4">Experience the ultimate in luxury and comfort</p>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Luxurious Rooms</h3>
              <p className="text-gray-600">Our rooms are designed to provide you with the utmost comfort and luxury.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Exquisite Dining</h3>
              <p className="text-gray-600">Enjoy gourmet meals prepared by world-class chefs.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Stunning Views</h3>
              <p className="text-gray-600">Experience breathtaking views from every corner of our resort.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
