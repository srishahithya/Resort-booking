import React from 'react';
import { Link } from 'react-router-dom';

const Amazingpools = () => {
  return (
    <div
      className="flex flex-col items-center min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('https://media.giphy.com/media/szRF782TCfFbG/giphy.gif')` 
      }}
    >
      <div className="flex flex-row items-center justify-between w-full p-4">
        <div className="flex items-center">
          <img className="h-14 w-14" src="https://tse4.mm.bing.net/th?id=OIP.88saavfS6X_RqlnJALWz0AHaFe&pid=Api&P=0&h=180" alt="" />
          <Link to="/Home">
            <button className="cursor-pointer bg-gray-50 py-3 px-4 text-emerald-700 ml-2">Home</button>
          </Link>
        </div>
      </div>
      <h1 className="text-3xl text-emerald-700 py-14 px-7">Amazing Pools</h1>
      <div className="flex flex-wrap justify-center gap-6 px-4 pb-8 w-full">
        <div className="flex flex-col bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
          <img className="w-60 h-40 object-cover rounded-t-lg" src="https://media-cdn.tripadvisor.com/media/photo-s/0e/5b/38/9b/le-meridien-coimbatore.jpg" alt="Lemerdian Hotel,Coimbatore" />
          <p className="py-1 font-bold">Lemerdian Hotel,Coimbatore</p>
          <p className="font-medium">A luxury Hotel</p>
          <p className="font-medium">A single room</p>
          <p className="font-bold">₹9500 per night</p>
          <Link to="/Poolabt">
            <button className="w-full px-4 py-2 text-center text-white bg-emerald-500 hover:bg-emerald-700 rounded-b-lg mt-2">View</button>
          </Link>
        </div>
        <div className="flex flex-col bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
          <img className="w-60 h-40 object-cover rounded-t-lg" src="https://www.worldrainbowhotels.com/wp-content/uploads/2023/04/Park-Hyatt-Chennai-22.jpg" alt="Park Hyatt,Chennai" />
          <p className="py-1 font-bold">Park Hyatt,Chennai</p>
          <p className="font-medium">5 Star Hotel</p>
          <p className="font-medium">A single room</p>
          <p className="font-bold">₹15000 per night</p>
          <Link to="/Poolabt">
            <button className="w-full px-4 py-2 text-center text-white bg-emerald-500 hover:bg-emerald-700 rounded-b-lg mt-2">View</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Amazingpools;
