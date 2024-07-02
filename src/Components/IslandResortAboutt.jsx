import React from 'react';
import { Link } from 'react-router-dom';

function IslandResortAboutt() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Cintacor Island Resort, Karwar</h2>
        <div className="flex flex-wrap">
          <img className="w-1/2 h-64 object-cover" src="https://imgmedia.lbb.in/media/2020/12/5fdb7712bbc185481aab679f_1608218386918.jpg" alt="Cintacor Island Resort 1" />
          <img className="w-1/2 h-64 object-cover" src="https://media-cdn.tripadvisor.com/media/photo-s/12/a4/91/bd/open-deck.jpg" alt="Cintacor Island Resort 2" />
        </div>
        <div className="p-6">
          <p className="text-black font-medium text-start">Starting from ₹13000 per night</p>
          <p className="text-emerald-700 font-bold text-start">Location: Karwar, India</p>
          <p className="text-black font-medium text-start">Escape to the serene Cintacor Island Resort in Karwar. Enjoy the exclusivity of an entire island to yourself, with luxurious accommodations, pristine beaches, and breathtaking views of the Arabian Sea. Our resort offers the perfect blend of relaxation and adventure.</p>
          <h3 className="text-2xl font-semibold text-emerald-800 mb-2 text-start">Highlights:</h3>
          <div className="flex flex-col text-start">
            <p><strong>Private Island:</strong> Experience the luxury of having an entire island to yourself.</p>
            <p><strong>Beachfront Villas:</strong> Stay in beachfront villas with stunning ocean views.</p>
            <p><strong>Outdoor Activities:</strong> Engage in outdoor activities like snorkeling, kayaking, and island hopping.</p>
            <p><strong>Dining:</strong> Enjoy delicious meals with locally sourced ingredients at our on-site restaurants.</p>
            <p><strong>Spa and Wellness:</strong> Relax and rejuvenate with a range of spa treatments.</p>
          </div>
          <h3 className="text-2xl font-semibold text-emerald-800 mb-2 text-start">Nearby Attractions:</h3>
          <div className="flex flex-col text-start">
            <p>Kurumgad Island (15-minute boat ride)</p>
            <p>Devbagh Beach (30-minute drive)</p>
            <p>Gokarna Beach (1-hour drive)</p>
          </div>
          <h3 className="text-2xl font-semibold text-emerald-800 mb-2 text-start">Reviews:</h3>
          <p className="text-start">"An unforgettable experience! The perfect blend of luxury and nature." - Lisa M.</p>
          <p className="text-start">"Absolutely stunning! The staff were incredibly friendly and attentive." - David S.</p>
          <div className="mt-6 py-6 flex flex-row gap-11">
            <Link to="/BookedDates"><button className="inline-block bg-emerald-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">Booked dates</button></Link>
            <Link to="/BookingForm"><button className="inline-block bg-emerald-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">Book Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IslandResortAboutt;
