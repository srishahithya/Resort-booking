// import React from 'react'
// import { Link } from 'react-router-dom'


// function Lakefront() {
//   return (
//     <div>
//       <div className="flex flex-">
  
//   <img className="size-14" src="https://tse4.mm.bing.net/th?id=OIP.88saavfS6X_RqlnJALWz0AHaFe&pid=Api&P=0&h=180"></img>
//   <button className=" cursor-pointer bg-gray-50 py-3 px-16 text-emerald-700 "><Link to="/Home">Home</Link></button>
//   </div>
//   <h1 className=" font-extrabold ">Home heaven</h1>
// <h1 className="text-3xl text-emerald-700 py-14 px-7">Lakefront</h1>
// <div className="flex flex-row">
// <div className=" ml-80 flex  flex-col bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
// <img className=" size-60 object-cover rounded-l-lg mr-4" src="https://kevinhogan.com/wp-content/uploads/2020/05/Timeshare-property-tmc.jpg" alt=""></img>
// <p className="py-1 font-bold">Ideal Beach Resort,Ooty</p>
// <p className="font-medium">Lakefront</p>
// <p className="font-medium">An entire place</p>
// <p className="font-bold">₹2500 per night</p>
//  <button className="w-64 px-4 py-2 text-center text-white bg-emerald-500 hover:bg-emerald-700 rounded-b-lg">View</button>
// </div>

// <div className=" ml-80 flex  flex-col bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
// <img className=" size-60 object-cover rounded-l-lg mr-4" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/3b/06/64/lodge-of-four-seasons.jpg?w=900&h=-1&s=1" alt=""></img>
// <p className="py-1 font-bold">Trivke,Mount Road,Munnar</p>
// <p className="font-medium">Lakefront</p>
// <p className="font-medium">A Shared Room</p>
// <p className="font-bold">₹1000 per night</p>
//  <button className="w-64 px-4 py-2 text-center text-white bg-emerald-500 hover:bg-emerald-700 rounded-b-lg">View</button>
// </div>
//   </div>
//   </div>
//   )
// }

// export default Lakefront


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Lakefront = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getalllakeplaces');
        setPlaces(response.data);
      } catch (error) {
        console.error('Error fetching places:', error);
      }
    };

    fetchPlaces();
  }, []);

  return (
    <div
      className="flex flex-col items-center min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('https://www.estationery.com/files/nature/46/bottom.gif')`
      }}
    >
      <div className="flex flex-row items-center justify-between w-full p-4">
        <div className="flex items-center">
          <img className="h-14 w-14" src="https://tse4.mm.bing.net/th?id=OIP.88saavfS6X_RqlnJALWz0AHaFe&pid=Api&P=0&h=180" alt="Lakefront" />
          <Link to="/Home">
            <button className="cursor-pointer bg-gray-50 py-3 px-4 text-emerald-700 ml-2">Home</button>
          </Link>
        </div>
      </div>
      <h1 className="text-3xl text-emerald-700 py-14 px-7">Lakefront</h1>
      <div className="flex flex-wrap justify-center gap-6 px-4 pb-8 w-full">
        {places.map((place) => (
          <div key={place.id} className="flex flex-col bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
            <img className="size-60 object-cover rounded-lg" src={place.image} alt={place.name} />
            <p className="py-1 font-bold">{place.name}</p>
            <p className="font-medium">{place.description}</p>
            <p className="font-medium">{place.type}</p>
            <p className="font-bold">₹{place.price} per night</p>
            <Link to="/LakeAbt">
              <button className="w-full px-4 py-2 text-center text-white bg-emerald-500 hover:bg-emerald-700 rounded-lg">View</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lakefront;
