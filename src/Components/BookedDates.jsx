// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function BookedDates() {
//   const [dates, setdates] = useState([]);

//   useEffect(() => {
//     const fetchDates = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/getalldates');
//         setdates(response.data);
//       } catch (error) {
//         console.error('Error fetching dates:', error);
//       }
//     };

//     fetchDates();
//   }, []);

//   return (
//     <div className="flex flex-col items-center ">
//       <h1 className="text-2xl font-bold my-4">Booked Dates</h1>
//       <div className="flex flex-wrap justify-center gap-6">
//         {dates.map((date) => (
//           <div key={date.date} className="border text-black p-4 rounded-lg w-60">
//          <p>{date.date}</p>
            
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function BookedDates() {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const fetchDates = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getalldates');
        setDates(response.data);
      } catch (error) {
        console.error('Error fetching dates:', error);
      }
    };

    fetchDates();
  }, []);

  const extractDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold my-4">Booked Dates</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {dates.map((date) => (
          <div key={date.date} className="border text-black p-4 rounded-lg w-60">
            <p>{extractDate(date.date)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
