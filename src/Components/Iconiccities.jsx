// import React from 'react'
// import { Link } from 'react-router-dom'


// function Iconiccities() {
//   return (
//     <div>
//       <div className="flex flex-">
  
//   <img className="size-14" src="https://tse4.mm.bing.net/th?id=OIP.88saavfS6X_RqlnJALWz0AHaFe&pid=Api&P=0&h=180"></img>
//   <Link to = "/Home"><button className=" cursor-pointer bg-gray-50 py-3 px-16 text-emerald-700 ">Home</button></Link>
//   <h1 className=" font-extrabold ">Home heaven</h1>
// </div>
// <h1 className="text-3xl font-mono text-emerald-700 py-14 px-7">Iconic cities</h1>
// <div className="flex flex-row">
// <div className=" ml-80 flex  flex-col bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
// <img className=" size-60 object-cover rounded-l-lg mr-4" src="https://www.gannett-cdn.com/-mm-/662af3148f30bf72ccc3d81d324b42694a97749e/c=0-73-1440-887/local/-/media/2018/03/12/USATODAY/USATODAY/636564364072704147-DoubleTree-by-Hilton-San-Diego---Mission-Valley.jpg?width=3200&height=1680&fit=crop" alt=""></img>
// <p className="py-1 font-bold">Hilton Hotel and  Resort,USA</p>
// <p className="font-medium">USA</p>
// <p className="font-medium">An entire place</p>
// <p className="font-bold">$150 per night</p>
//  <button className="w-64 px-4 py-2 text-center text-white bg-emerald-500 hover:bg-emerald-700 rounded-b-lg">View</button>
// </div>
// <div className=" ml-80 flex  flex-col bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
// <img className=" size-60 object-cover rounded-l-lg mr-4" src="https://th.bing.com/th/id/OIP.wp-MMS7X6tEZNqc760iyuQHaFD?rs=1&pid=ImgDetMain" alt=""></img>
// <p className="py-1 font-bold">FIVE Palm Jumeirah, Dubai</p>
// <p className="font-medium">Luxory Hotel</p>
// <p className="font-medium">A Shared Room</p>
// <p className="font-bold">$70 per night</p>
//  <button className="w-64 px-4 py-2 text-center text-white bg-emerald-500 hover:bg-emerald-700 rounded-b-lg">View</button>
// </div>
// </div>
//     </div>
//   )
// }

// export default Iconiccities



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Iconiccities = () => {
  const [iconicCities, setIconicCities] = useState([]);

  useEffect(() => {
    const fetchIconicCities = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getalliconiccities');
        setIconicCities(response.data);
      } catch (error) {
        console.error('Error fetching iconic cities:', error);
      }
    };

    fetchIconicCities();
  }, []);

  return (
    <div
      className="flex flex-col items-center min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('https://external-preview.redd.it/u0kOblTCRmhc9hvv8dBgW45-Ytv3FPEAjuyLpup_-eg.gif?width=960&height=502.617801047&s=e2f4af8e4f34f56525611ce02e25c031d5d2c650')`
      }}
    >
      <div className="flex flex-row items-center justify-between w-full p-4">
        <div className="flex items-center">
          <img className="h-14 w-14" src="https://tse4.mm.bing.net/th?id=OIP.88saavfS6X_RqlnJALWz0AHaFe&pid=Api&P=0&h=180" alt="Iconic Cities" />
          <Link to="/Home">
            <button className="cursor-pointer bg-gray-50 py-3 px-16 text-emerald-700 ml-2">Home</button>
          </Link>
        </div>
      </div>
      <h1 className="text-3xl font-mono text-emerald-700 py-14 px-7">Iconic cities</h1>
      <div className="flex flex-wrap justify-center gap-6 px-4 pb-8 w-full">
        {iconicCities.map((city) => (
          <div key={city._id} className="flex flex-col bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
            <img className="w-60 h-40 object-cover rounded-t-lg" src={city.image} alt={city.name} />
            <div className="flex flex-col justify-between mt-4">
              <p className="py-1 font-bold">{city.name}</p>
              <p className="font-medium">{city.description}</p>
              <p className="font-medium">An entire place</p>
              <p className="font-bold">${city.price} per night</p>
              <Link to="/Iconicabt">
                <button className="w-full px-4 py-2 text-center text-white bg-emerald-500 hover:bg-emerald-700 rounded-b-lg mt-2">View</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Iconiccities;
