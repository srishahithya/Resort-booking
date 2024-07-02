// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function BookingForm() {
//   const [booking, setBooking] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     roomType: 'none',
//     checkInDate: '',
//     checkOutDate: '',
//     checkInTime: '',
//     checkOutTime: '',
//     guests: '1'
//   });
//   const [totalPrice, setTotalPrice] = useState(0);
//   const pricePerDay = 1500;

//   useEffect(() => {
//     if (booking.checkInDate && booking.checkOutDate) {
//       const checkIn = Date.parse(booking.checkInDate);
//       const checkOut = Date.parse(booking.checkOutDate);
//       const diffTime = checkOut - checkIn;
//       const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//       setTotalPrice(diffDays * pricePerDay);
//     } else {
//       setTotalPrice(0);
//     }
//   }, [booking.checkInDate, booking.checkOutDate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBooking({ ...booking, [name]: value });
//   };

//   const handleBooking = async () => {
//     try {
//       const response = await axios.post('http://localhost:4000/addbookings', booking);
//       alert('Booking confirmed successfully');
//       setBooking({
//         firstName: '',
//         lastName: '',
//         email: '',
//         roomType: 'none',
//         checkInDate: '',
//         checkOutDate: '',
//         checkInTime: '',
//         checkOutTime: '',
//         guests: '1'
//       });
//     } catch (error) {
//       console.error('Error confirming booking:', error.response ? error.response.data : error.message);
//       alert(`Error confirming booking: ${error.response ? error.response.data.message : error.message}`);
//     }
//   };

//   return (
//     <div className="relative flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560347876-aeef00ee58a1')" }}>
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="relative bg-white rounded-lg shadow-lg p-10 max-w-lg w-full">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Hotel Booking Form</h2>
//         <form>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Name *</label>
//             <div className="flex space-x-4">
//               <input
//                 type="text"
//                 name="firstName"
//                 value={booking.firstName}
//                 onChange={handleChange}
//                 className="w-1/2 p-2 border rounded"
//                 placeholder="First"
//               />
//               <input
//                 type="text"
//                 name="lastName"
//                 value={booking.lastName}
//                 onChange={handleChange}
//                 className="w-1/2 p-2 border rounded"
//                 placeholder="Last"
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">E-mail *</label>
//             <input
//               type="email"
//               name="email"
//               value={booking.email}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               placeholder="ex: my@gmail.com"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Room Type *</label>
//             <select
//               name="roomType"
//               value={booking.roomType}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//             >
//               <option value="none">None</option>
//               <option value="standard">Standard</option>
//               <option value="deluxe">Deluxe</option>
//               <option value="suite">Suite</option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Check In & Time *</label>
//             <div className="flex space-x-4">
//               <input
//                 type="date"
//                 name="checkInDate"
//                 value={booking.checkInDate}
//                 onChange={handleChange}
//                 className="w-1/2 p-2 border rounded"
//               />
//               <input
//                 type="time"
//                 name="checkInTime"
//                 value={booking.checkInTime}
//                 onChange={handleChange}
//                 className="w-1/2 p-2 border rounded"
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Check Out & Time *</label>
//             <div className="flex space-x-4">
//               <input
//                 type="date"
//                 name="checkOutDate"
//                 value={booking.checkOutDate}
//                 onChange={handleChange}
//                 className="w-1/2 p-2 border rounded"
//               />
//               <input
//                 type="time"
//                 name="checkOutTime"
//                 value={booking.checkOutTime}
//                 onChange={handleChange}
//                 className="w-1/2 p-2 border rounded"
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Number of Guests *</label>
//             <select
//               name="guests"
//               value={booking.guests}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//             >
//               <option value="1">01</option>
//               <option value="2">02</option>
//               <option value="3">03</option>
//               <option value="4">04</option>
//               <option value="5">05</option>
//               <option value="6">06</option>
//             </select>
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 mb-2">Total Price</label>
//             <p className="text-gray-800">₹{totalPrice}</p>
//           </div>
//           <div className="text-center">
//             <button
//               type="button"
//               onClick={handleBooking}
//               className="bg-orange-600 text-white px-6 py-2 rounded shadow hover:bg-orange-700 transition duration-300"
//             >
//               BOOK NOW
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function BookingForm() {
  const [booking, setBooking] = useState({
    firstName: '',
    lastName: '',
    email: '',
    roomType: 'none',
    checkInDate: '',
    checkOutDate: '',
    checkInTime: '',
    checkOutTime: '',
    guests: '1'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
  };

  const handleBooking = async () => {
    try {
      const response = await axios.post('http://localhost:4000/addbookings', booking);
      alert('Booking confirmed successfully');
      setBooking({
        firstName: '',
        lastName: '',
        email: '',
        roomType: 'none',
        checkInDate: '',
        checkOutDate: '',
        checkInTime: '',
        checkOutTime: '',
        guests: '1'
      });
    } catch (error) {
      console.error('Error confirming booking:', error.response ? error.response.data : error.message);
      alert(`Error confirming booking: ${error.response ? error.response.data.message : error.message}`);
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560347876-aeef00ee58a1')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white rounded-lg shadow-lg p-10 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Hotel Booking Form</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name *</label>``
            <div className="flex space-x-4">
              <input
                type="text"
                name="firstName"
                value={booking.firstName}
                onChange={handleChange}
                className="w-1/2 p-2 border rounded"
                placeholder="First"
              />
              <input
                type="text"
                name="lastName"
                value={booking.lastName}
                onChange={handleChange}
                className="w-1/2 p-2 border rounded"
                placeholder="Last"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">E-mail *</label>
            <input
              type="email"
              name="email"
              value={booking.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="@gmail.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Room Type *</label>
            <select
              name="roomType"
              value={booking.roomType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="none">None</option>
              <option value="standard">Standard</option>
              <option value="deluxe">Deluxe</option>
              <option value="suite">Suite</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Check In & Time *</label>
            <div className="flex space-x-4">
              <input
                type="date"
                name="checkInDate"
                value={booking.checkInDate}
                onChange={handleChange}
                className="w-1/2 p-2 border rounded"
              />
              <input
                type="time"
                name="checkInTime"
                value={booking.checkInTime}
                onChange={handleChange}
                className="w-1/2 p-2 border rounded"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Check Out & Time *</label>
            <div className="flex space-x-4">
              <input
                type="date"
                name="checkOutDate"
                value={booking.checkOutDate}
                onChange={handleChange}
                className="w-1/2 p-2 border rounded"
              />
              <input
                type="time"
                name="checkOutTime"
                value={booking.checkOutTime}
                onChange={handleChange}
                className="w-1/2 p-2 border rounded"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Number of Guests *</label>
            <select
              name="guests"
              value={booking.guests}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="1">01</option>
              <option value="2">02</option>
              <option value="3">03</option>
              <option value="4">04</option>
              <option value="5">05</option>
              <option value="6">06</option>
            </select>
          </div>
          <div className="text-center">
            <button
              type="button"
              onClick={handleBooking}
              className="bg-orange-600 text-white px-6 py-2 rounded shadow hover:bg-orange-700 transition duration-300"
            >
              BOOK NOW
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
