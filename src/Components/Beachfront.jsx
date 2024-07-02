// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom'
// import Home from './Home'
// import BeachAbt from './BeachAbt'

// const Beachfront = () => {
  
//   return (
//     <div>
//        < div className="flex flex-row">
  
//   <img className="size-14" src="https://tse4.mm.bing.net/th?id=OIP.88saavfS6X_RqlnJALWz0AHaFe&pid=Api&P=0&h=180"></img>
//   <Link to = "/Home"><button className=" cursor-pointer bg-gray-50 py-3 px-16 text-emerald-700 ">Home</button></Link>
//   </div>
//   <h1 className=" font-extrabold ">Home heaven</h1>
// <h1 className="text-3xl text-emerald-700 py-14 px-7">Beachfront</h1>
// <div className="flex flex-row">
// <div className=" ml-80 flex  flex-col bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
// <img className=" size-60 object-cover rounded-l-lg mr-4" src="https://dxtu9lzukmhux.cloudfront.net/deals/March2019/57ObHhn8f7XYJLfMj3CS.jpg" alt=""></img>
// <p className="py-1 font-bold">Marari Beach Resort,Allappey</p>
// <p className="font-medium">Bechfront</p>
// <p className="font-medium">A Shared Room</p>
// <p className="font-bold">₹1500 per night</p>
// <Link to = "/BeachAbt"><button className="w-64 px-4 py-2 text-center text-white bg-emerald-500 hover:bg-emerald-700 rounded-b-lg">View</button></Link>
// </div>
// <div className=" ml-80 flex  flex-col bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
// <img className=" size-60 object-cover rounded-l-lg mr-4" src="https://th.bing.com/th/id/R.3e834fc3195054d8be88371419d917e7?rik=pq6Gj%2fxv7UFpXA&riu=http%3a%2f%2fwww.idesignarch.com%2fwp-content%2fuploads%2fBeachfront-Estate-Maui_23.jpg&ehk=4zGh9ZpA5JzpLsN1dRmPs3VNUD1skZ4t3NwLtdrBwTU%3d&risl=&pid=ImgRaw&r=0" alt=""></img>
// <p className="py-1 font-bold">Palette,East Coast Road,Chennai</p>
// <p className="font-medium">Bechfront</p>
// <p className="font-medium">An entire place</p>
// <p className="font-bold">₹3500 per night</p>
//  <button className="w-64
//   px-4 py-2 text-center text-white bg-emerald-500 hover:bg-emerald-700 rounded-b-lg">View</button>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default Beachfront
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Beachfront = () => {
  const [beaches, setBeaches] = useState([]);

  useEffect(() => {
    const fetchBeaches = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getallbeaches');
        setBeaches(response.data);
      } catch (error) {
        console.error('Error fetching beaches:', error);
      }
    };

    fetchBeaches();
  }, []);

  return (
    <div
      className="flex flex-col items-center min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('https://static.thehoneycombers.com/wp-content/uploads/sites/2/2017/05/luxury-holiday-vacation-the-residence-resort-the-maldives-relax-MAIN-IMAGE.gif')`
      }}
    >
      <div className="flex flex-row items-center justify-between w-full p-4">
        <div className="flex items-center">
          <img className="h-14 w-14" src="https://tse4.mm.bing.net/th?id=OIP.88saavfS6X_RqlnJALWz0AHaFe&pid=Api&P=0&h=180" alt="Beachfront" />
          <Link to="/Home">
            <button className="cursor-pointer bg-gray-50 py-3 px-4 text-emerald-700 ml-2">Home</button>
          </Link>
        </div>
      </div>
      <h1 className="text-3xl text-emerald-700 py-14 px-7">Beachfront</h1>
      <div className="flex flex-wrap justify-center gap-6 px-4 pb-8 w-full">
        {beaches.map((beach) => (
          <div key={beach.id} className="flex flex-col bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
            <img className="size-60 object-cover rounded-lg" src={beach.image} alt={beach.name} />
            <p className="py-1 font-bold">{beach.name}</p>
            <p className="font-medium">{beach.description}</p>
            <p className="font-medium">Beachfront</p>
            <p className="font-bold">₹{beach.price} per night</p>
            <Link to="/BeachAbt">
              <button className="w-full px-4 py-2 text-center text-white bg-emerald-500 hover:bg-emerald-700 rounded-lg">View</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Beachfront;
