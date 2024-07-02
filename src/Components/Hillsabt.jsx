import React from 'react'
import { Link } from 'react-router-dom'



function Hillsabt() {
  return (
    <div className="bg-gray-100 py-10">
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <h2 className="text-3xl font-bold text-gray-800 mb-3">Lilies Valley Resort</h2>
      <div className="flex flex-wrap">
        <img className="w-1/2 h-64 object-cover" src="https://th.bing.com/th/id/OIP.iShcU-rAWJS8tFbSaHRQDgHaE0?rs=1&pid=ImgDetMain" alt="Hillside Resort 1" />
        <img className="w-1/2 h-64 object-cover" src="https://image3.mouthshut.com/images/imagesp/925591511s.png" alt="Hillside Resort 2" />
      </div>
      <div className="p-6">
        <p className="text-black font-medium text-start">₹4500 per day</p>
        <p className="text-emerald-700 font-bold text-start">Location: Kodaikanal</p>
        <p className="text-black font-medium text-start">Nestled in the picturesque hills of Manali, Hillside Haven Resort offers a serene retreat with breathtaking mountain views, luxurious accommodations, and unparalleled service. Whether you're seeking adventure or relaxation, our resort is the perfect destination.</p>
        <h3 className="text-2xl font-semibold text-emerald-800 mb-2 text-start">Features:</h3>
        <div className="flex flex-col text-start">
          <p><strong>Luxurious Rooms & Suites:</strong> Enjoy spacious rooms with stunning views of the surrounding hills.</p>
          <p><strong>Gourmet Dining:</strong> Indulge in gourmet cuisine at our on-site restaurant, featuring local and international dishes.</p>
          <p><strong>Spa & Wellness:</strong> Rejuvenate with a variety of treatments at our full-service spa.</p>
          <p><strong>Outdoor Activities:</strong> Explore the great outdoors with guided hikes, biking trails, and more.</p>
          <p><strong>Event Venues:</strong> Host your events in our elegant spaces with panoramic mountain views.</p>
        </div>
        <h3 className="text-2xl font-semibold text-emerald-800 mb-2 text-start">Nearby Attractions:</h3>
        <div className="flex flex-col text-start">
          <p>Solang Valley (20-minute drive)</p>
          <p>Rohtang Pass (1-hour drive)</p>
          <p>Old Manali (15-minute drive)</p>
          <p>Hadimba Temple (10-minute drive)</p>
        </div>
        <h3 className="text-2xl font-semibold text-emerald-800 mb-2 text-start">Reviews:</h3>
        <p className="text-start">"A tranquil escape with breathtaking views! The perfect place to unwind." - Priya S.</p>
        <p className="text-start">"Exceptional service and beautiful surroundings. Highly recommend!" - Rahul K.</p>
        <div className="mt-6 py-6 flex flex-row gap-11">
          <Link to="/BookedDates"><button className="inline-block bg-emerald-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">Booked dates</button></Link>
          <Link to="/BookingForm"><button className="inline-block bg-emerald-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">Book Now</button></Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hillsabt
