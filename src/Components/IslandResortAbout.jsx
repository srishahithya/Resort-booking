import React from 'react';
import { Link } from 'react-router-dom';

function IslandResortAbout() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Paradise Island Resort, Maldives</h2>
        <div className="flex flex-wrap">
          <img className="w-1/2 h-64 object-cover" src="https://flyandsea.com/wp-content/uploads/2019/10/Atmosphere-Lounge-Pool-600x600.jpg" alt="Paradise Island Resort 1" />
          <img className="w-1/2 h-64 object-cover" src="https://th.bing.com/th/id/OIP.FapTduPcn14N584SrrIvAwHaFj?pid=ImgDet&rs=1" alt="Paradise Island Resort 2" />
        </div>
        <div className="p-6">
          <p className="text-black font-medium text-start">Starting from ₹43000 per night</p>
          <p className="text-emerald-700 font-bold text-start">Location: Maldives</p>
          <p className="text-black font-medium text-start">Escape to the breathtaking Paradise Island Resort in the Maldives. Enjoy an entire place to yourself with luxurious accommodations, pristine beaches, and crystal-clear waters. Our prime location offers the perfect getaway for relaxation and adventure.</p>
          <h3 className="text-2xl font-semibold text-emerald-800 mb-2 text-start">Highlights:</h3>
          <div className="flex flex-col text-start">
            <p><strong>Private Beaches:</strong> Relax on the resort's private beaches with stunning views.</p>
            <p><strong>Water Sports:</strong> Engage in exciting water sports activities like snorkeling and diving.</p>
            <p><strong>Spa and Wellness:</strong> Indulge in spa treatments and wellness programs.</p>
            <p><strong>Dining:</strong> Experience exquisite dining options with international cuisines.</p>
            <p><strong>Luxury Villas:</strong> Stay in luxurious villas with ocean views and private pools.</p>
          </div>
          <h3 className="text-2xl font-semibold text-emerald-800 mb-2 text-start">Nearby Attractions:</h3>
          <div className="flex flex-col text-start">
            <p>Malé Atoll (20-minute boat ride)</p>
            <p>Baa Atoll Biosphere Reserve (1-hour seaplane ride)</p>
            <p>Vaadhoo Island (45-minute speedboat ride)</p>
          </div>
          <h3 className="text-2xl font-semibold text-emerald-800 mb-2 text-start">Reviews:</h3>
          <p className="text-start">"A paradise on earth! The resort exceeded all our expectations." - Sarah L.</p>
          <p className="text-start">"Amazing experience with top-notch service and breathtaking views." - John D.</p>
          <div className="mt-6 py-6 flex flex-row gap-11">
            <Link to="/BookedDates"><button className="inline-block bg-emerald-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">Booked dates</button></Link>
            <Link to="/BookingForm"><button className="inline-block bg-emerald-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">Book Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IslandResortAbout;
