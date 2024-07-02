import React from 'react';
import { Link } from 'react-router-dom';

function Island() {
  return (
    <div
      className="flex flex-col items-center min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('https://i.ytimg.com/vi/OvejtXssdUI/maxresdefault.jpg')` // Replace with your actual GIF URL
      }}
    >
      <div className="flex flex-row items-center justify-between w-full p-4 bg-opacity-75">
        <div className="flex items-center">
          <img className="h-14 w-14" src="https://tse4.mm.bing.net/th?id=OIP.88saavfS6X_RqlnJALWz0AHaFe&pid=Api&P=0&h=180" alt="Islands" />
          <Link to="/Home">
            <button className="cursor-pointer bg-gray-50 py-3 px-16 text-emerald-700 ml-2">Home</button>
          </Link>
        </div>
      </div>
      <h1 className="text-3xl font-mono text-emerald-700 py-14 px-7 bg-opacity-75">Islands</h1>
      <div className="flex flex-wrap justify-center gap-6 px-4 pb-8 w-full">
        <div className="flex flex-col bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
          <img className="w-60 h-40 object-cover rounded-t-lg" src="https://th.bing.com/th/id/OIP.UESxi_4-pfcodHGO4x0qgwHaFj?rs=1&pid=ImgDetMain" alt="Paradise Island Resort, Maldives" />
          <p className="py-1 font-bold">Paradise Island Resort, Maldives</p>
          <p className="font-medium">Islands</p>
          <p className="font-medium">An Entire place</p>
          <p className="font-bold">₹43000 per night</p>
          <Link to="/IslandResortAbout"> <button className="w-full px-4 py-2 text-center text-white bg-emerald-500 hover:bg-emerald-700 rounded-b-lg mt-2">View</button></Link>
        </div>
        <div className="flex flex-col bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
          <img className="w-60 h-40 object-cover rounded-t-lg" src="https://th.bing.com/th/id/OIP.HRN9lou1-rf3lZrP2b1RAgHaFN?rs=1&pid=ImgDetMain" alt="Cintacor Island Resort, Karwar" />
          <p className="py-1 font-bold">Cintacor Island Resort, Karwar</p>
          <p className="font-medium">Islands</p>
          <p className="font-medium">An Entire place</p>
          <p className="font-bold">₹13000 per night</p>
          <Link to="/IslandResortAboutt"> <button className="w-full px-4 py-2 text-center text-white bg-emerald-500 hover:bg-emerald-700 rounded-b-lg mt-2">View</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Island;
