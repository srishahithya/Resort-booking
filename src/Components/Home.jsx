// import React from 'react'
// import { Link } from 'react-router-dom'
// import Beachfront from './Beachfront'


// function Home() {
//   return (
//     <div>
     
//   <img className="size-14" src="https://tse4.mm.bing.net/th?id=OIP.88saavfS6X_RqlnJALWz0AHaFe&pid=Api&P=0&h=180"></img>
//   <h1 className="left-7">Home heaven</h1>


// <div className="relative">
//   <img className="w-full size-64" src="https://tse3.mm.bing.net/th?id=OIP.8KA2QfAOfjQB4eWsgMkVswHaE8&pid=Api&P=0&h=180" ></img>
//   <div className="absolute top-0 left-0 py-5 px-32 text-white">
//     <p className="text-2xl font-bold">Welcome Home! Anywhere you roam</p>
//     <p className="text-2xl font-bold">Stay in the moment. Make your memories</p>
//   </div>
// </div>
// <div className="flex flex-col items-center">
// <h1 className="text-4xl font-semibold text-emerald-600 ">Explore Categories</h1>
// <p>Explore our wide range of vacation rentals that cater to all types of travelers</p>
// <p>Immerse yourself in the local culture.enjoy the comforts of home, and create</p>
// <p className="px-20">unforgettable memories in your dream destination</p></div>
// <div className="flex flex-row gap-10 justify-center ">
// <div className="relative">
//   <img className="size-40 mt-14" src="https://i.pinimg.com/originals/cc/c1/c5/ccc1c5c5d52a2dbc1be00ccb81268e08.jpg"></img>
//   <Link to = "/Beachfront"><button className="absolute top-0 left-0 cursor-pointer bg-gray-50 bg-opacity-50 py-32 px-8 ml-0 text-black text-xl">
//     Beachfront
//   </button></Link>
// </div>
// <div className="relative">
//   <img className="size-40 mt-14" src="https://lake123.com/wp-content/uploads/2018/04/WMC_LazyFalls_NOBOY.jpg"></img>
//   <button className="absolute top-0 left-0 cursor-pointer bg-gray-50 bg-opacity-50 py-32 px-9 ml-0 text-black text-xl">
//   <Link to="/Lakefront">Lakefront</Link>
//   </button>
// </div>
// <div className="relative">
//   <img className="size-40 mt-14" src="https://tse3.mm.bing.net/th?id=OIP.Hg5hC7sZLY9oXbmwf77YSgHaE-&pid=Api&P=0&h=180"></img>
//   <button className="absolute top-0 left-0 cursor-pointer bg-gray-50 bg-opacity-50 py-32 px-6 ml-0 text-black text-xl">
//   <Link to="/Iconiccities">Iconic cities</Link>
//   </button>
// </div>
// <div className="relative">
//   <img className="size-40 mt-14" src="https://th.bing.com/th/id/OIP.mCXCqVQa0CDbYyL8S-2RQAHaFj?rs=1&pid=ImgDetMain"></img>
//   <button className="absolute top-0 left-0 cursor-pointer bg-gray-50 bg-opacity-50 py-32 px-8 ml-0 text-black text-xl">
//   <Link to="/Hillside">Hills Side</Link>
//   </button>
// </div></div>
// <div className="flex flex-row gap-10 justify-center">
// <div className="relative">
//   <img className="size-40 mt-14" src="https://tse2.mm.bing.net/th?id=OIP.O_nhV27SCWeVi15q20zErgHaEp&pid=Api&P=0&h=180"></img>
//   <button className="absolute top-0 left-0 cursor-pointer bg-gray-50 bg-opacity-50 py-32 px-3.5 ml-0 text-black text-xl">
//   <Link to="/Amazingpools">Amazing pools</Link>
//   </button>
// </div>
// <div className="relative">
//   <img className="size-40 mt-14" src="https://tse1.mm.bing.net/th?id=OIP.FapTduPcn14N584SrrIvAwHaFj&pid=Api&P=0&h=180"></img>
//   <button className="absolute top-0 left-0 cursor-pointer bg-gray-50 bg-opacity-50 py-32 px-16 ml-0 text-black text-xl">
//   <Link to="/Island">Islands</Link>
//   </button>
// </div></div>
//     </div>
//   )
// }

// export default Home

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('https://example.com/your-background.gif')` // Replace with your actual GIF URL
      }}
    >
      <div className="flex flex-row items-center justify-between w-full p-4 bg-white bg-opacity-75">
        <img className="h-14 w-14" src="https://tse4.mm.bing.net/th?id=OIP.88saavfS6X_RqlnJALWz0AHaFe&pid=Api&P=0&h=180" alt="Home Heaven" />
      </div>

      <div className="relative">
        <img className="w-full h-64 object-cover" src="https://www.diversetravel.co.uk/wp-content/uploads/2020/01/Main-pool-and-lounging-area.jpg" alt="Banner" />
        <div className="absolute top-0 left-0 py-5 px-32 text-white bg-black bg-opacity-50">
          <p className="text-2xl font-bold">Welcome Home! Anywhere you roam</p>
          <p className="text-2xl font-bold">Stay in the moment. Make your memories</p>
        </div>
      </div>

      <div className="flex flex-col items-center py-10">
        <h1 className="text-4xl font-semibold text-emerald-600">Explore Categories</h1>
        <p>Explore our wide range of vacation rentals that cater to all types of travelers</p>
        <p>Immerse yourself in the local culture, enjoy the comforts of home, and create</p>
        <p className="px-20">unforgettable memories in your dream destination</p>
      </div>

      <div className="flex flex-row gap-10 justify-center">
        <div className="relative">
          <img className="w-60 h-40 object-cover mt-14" src="https://i.pinimg.com/originals/cc/c1/c5/ccc1c5c5d52a2dbc1be00ccb81268e08.jpg" alt="Beachfront" />
          <Link to="/Beachfront">
            <button className="w-full mt-2 cursor-pointer bg-gray-50 py-2 text-black text-xl">Beachfront</button>
          </Link>
        </div>
        <div className="relative">
          <img className="w-60 h-40 object-cover mt-14" src="https://lake123.com/wp-content/uploads/2018/04/WMC_LazyFalls_NOBOY.jpg" alt="Lakefront" />
          <Link to="/Lakefront">
            <button className="w-full mt-2 cursor-pointer bg-gray-50 py-2 text-black text-xl">Lakefront</button>
          </Link>
        </div>
        <div className="relative">
          <img className="w-60 h-40 object-cover mt-14" src="https://tse3.mm.bing.net/th?id=OIP.Hg5hC7sZLY9oXbmwf77YSgHaE-&pid=Api&P=0&h=180" alt="Iconic Cities" />
          <Link to="/Iconiccities">
            <button className="w-full mt-2 cursor-pointer bg-gray-50 py-2 text-black text-xl">Iconic cities</button>
          </Link>
        </div>
        <div className="relative">
          <img className="w-60 h-40 object-cover mt-14" src="https://th.bing.com/th/id/OIP.mCXCqVQa0CDbYyL8S-2RQAHaFj?rs=1&pid=ImgDetMain" alt="Hillside" />
          <Link to="/Hillside">
            <button className="w-full mt-2 cursor-pointer bg-gray-50 py-2 text-black text-xl">Hillside</button>
          </Link>
        </div>
      </div>

      <div className="flex flex-row gap-10 justify-center">
        <div className="relative">
          <img className="w-60 h-40 object-cover mt-14" src="https://tse2.mm.bing.net/th?id=OIP.O_nhV27SCWeVi15q20zErgHaEp&pid=Api&P=0&h=180" alt="Amazing Pools" />
          <Link to="/Amazingpools">
            <button className="w-full mt-2 cursor-pointer bg-gray-50 py-2 text-black text-xl">Amazing pools</button>
          </Link>
        </div>
        <div className="relative">
          <img className="w-60 h-40 object-cover mt-14" src="https://tse1.mm.bing.net/th?id=OIP.FapTduPcn14N584SrrIvAwHaFj&pid=Api&P=0&h=180" alt="Islands" />
          <Link to="/Island">
            <button className="w-full mt-2 cursor-pointer bg-gray-50 py-2 text-black text-xl">Islands</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

