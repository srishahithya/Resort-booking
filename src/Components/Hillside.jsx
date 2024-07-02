// import React from 'react'
// import { Link } from 'react-router-dom'


// function Hillside() {
//   return (
//     <div>
//       <div className="flex flex-">
  
//   <img className="size-14" src="https://tse4.mm.bing.net/th?id=OIP.88saavfS6X_RqlnJALWz0AHaFe&pid=Api&P=0&h=180"></img>
//   <Link to = "/Home"><button className=" cursor-pointer bg-gray-50 py-3 px-16 text-emerald-700 ">Home</button></Link>

//   <h1 className=" font-extrabold ">Home heaven</h1>
// </div>
// <h1 className="text-3xl font-mono text-emerald-700 py-14 px-7">Hills Side</h1>
// <div className="flex flex-row">
// <div className=" ml-80 flex  flex-col bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
// <img className=" size-60 object-cover rounded-l-lg mr-4" src="https://th.bing.com/th/id/OIP.BuyYIEtKbvxyMRf3Z56njAHaE6?rs=1&pid=ImgDetMain" alt=""></img>
// <p className="py-1 font-bold">Lilies Valley Resort,Kodaikanal</p>
// <p className="font-medium">Hills Side</p>
// <p className="font-medium">An entire place</p>
// <p className="font-bold">₹4000 per night</p>
//  <button className="64 px-4 py-2 text-center text-white bg-emerald-500 hover:bg-emerald-700 rounded-b-lg">View</button>
// </div>
// <div className=" ml-80 flex  flex-col bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
// <img className=" size-60 object-cover rounded-l-lg mr-4" src="https://i.ytimg.com/vi/tv1OmWXr3EE/maxresdefault.jpg" alt=""></img>
// <p className="py-1 font-bold">Camlet Resort,Munnar</p>
// <p className="font-medium">Hills Side</p>
// <p className="font-medium">An Entire place</p>
// <p className="font-bold">₹10000 per night</p>
//  <button className="64 px-4 py-2 text-center text-white bg-emerald-500 hover:bg-emerald-700 rounded-b-lg">View</button>
// </div>

//     </div>
//     </div>
//   )
// }

// export default Hillside
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Hillside = () => {
  const [hillsideResorts, setHillsideResorts] = useState([]);

  useEffect(() => {
    const fetchHillsideResorts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getallhillsideresorts');
        setHillsideResorts(response.data);
      } catch (error) {
        console.error('Error fetching hillside resorts:', error);
      }
    };

    fetchHillsideResorts();
  }, []);

  return (
    <div
      className="flex flex-col items-center min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('https://media.tenor.com/AeMJPu_TMlwAAAAC/resort-hotel.gif')` // Replace with your actual GIF URL
      }}
    >
      <div className="flex flex-row items-center justify-between w-full p-4">
        <div className="flex items-center">
          <img className="h-14 w-14" src="https://tse4.mm.bing.net/th?id=OIP.88saavfS6X_RqlnJALWz0AHaFe&pid=Api&P=0&h=180" alt="Hillside" />
          <Link to="/Home">
            <button className="cursor-pointer bg-gray-50 py-3 px-4 text-emerald-700 ml-2">Home</button>
          </Link>
        </div>
      </div>
      <h1 className="text-3xl text-emerald-700 py-14 px-7">Hillside</h1>
      <div className="flex flex-wrap justify-center gap-6 px-4 pb-8 w-full">
        {hillsideResorts.map((resort) => (
          <div key={resort.id} className="flex flex-col bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
            <img className="size-60 object-cover rounded-t-lg" src={resort.image} alt={resort.name} />
            <p className="py-1 font-bold">{resort.name}</p>
            <p className="font-medium">{resort.location}</p>
            <p className="font-medium">An entire place</p>
            <p className="font-bold">₹{resort.price} per night</p>
            <Link to={`/HillsideResort/${resort.id}`}>
              <button className="w-full px-4 py-2 text-center text-white bg-emerald-500 hover:bg-emerald-700 rounded-b-lg mt-2">View</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hillside;
