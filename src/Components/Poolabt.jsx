import React from 'react'
import { Link } from 'react-router-dom';
function Poolabt() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Le Meridien Hotel, Coimbatore</h2>
        <div className="flex flex-wrap">
          <img className="w-1/2 h-64 object-cover" src="https://media-cdn.tripadvisor.com/media/photo-s/0e/5b/38/9b/le-meridien-coimbatore.jpg" alt="Le Meridien Hotel, Coimbatore" />
          <img className="w-1/2 h-64 object-cover" src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH71164205613694/QS1042/QS1042-Q1/3A0B4B84-1F92-462A-BA1B-2547C902E979.jpeg" alt="Le Meridien Hotel, Coimbatore" />
        </div>
        <div className="p-6">
          <p className="text-black font-medium text-start">₹9500 per night</p>
          <p className="text-emerald-700 font-bold text-start">Location: Coimbatore</p>
          <p className="text-black font-medium text-start">
            Located in the heart of Coimbatore, Le Meridien Hotel offers a luxurious stay with world-class amenities and exquisite service. This 5-star hotel provides a perfect blend of comfort and sophistication, ideal for both business and leisure travelers.
          </p>
          <h3 className="text-2xl font-semibold text-emerald-800 mb-2 text-start">Features:</h3>
          <div className="flex flex-col text-start">
            <p><strong>Elegant Rooms & Suites:</strong> Enjoy spacious and well-appointed rooms with modern amenities and beautiful city views.</p>
            <p><strong>Dining:</strong> Indulge in a variety of cuisines at our on-site restaurants, offering both local and international flavors.</p>
            <p><strong>Wellness:</strong> Rejuvenate at our full-service spa or take a refreshing swim in our outdoor pool.</p>
            <p><strong>Fitness:</strong> Maintain your fitness routine at our state-of-the-art fitness center.</p>
            <p><strong>Events:</strong> Host meetings, weddings, or special events in our versatile banquet and conference facilities.</p>
          </div>
          <h3 className="text-2xl font-semibold text-emerald-800 mb-2 text-start">Nearby Attractions:</h3>
          <div className="flex flex-col text-start">
            <p>Marudhamalai Hill Temple (20-minute drive)</p>
            <p>Gandhipuram Shopping District (15-minute drive)</p>
            <p>Perur Pateeswarar Temple (30-minute drive)</p>
            <p>VOC Park and Zoo (10-minute drive)</p>
          </div>
          <h3 className="text-2xl font-semibold text-emerald-800 mb-2 text-start">Reviews:</h3>
          <p className="text-start">"A wonderful experience! The rooms are immaculate, and the service is top-notch." - Anitha R.</p>
          <p className="text-start">"Le Meridien Coimbatore is the epitome of luxury and comfort. Highly recommended!" - Ravi K.</p>
          <div className="mt-6 py-6 flex flex-row gap-11">
            <Link to="/BookedDates">
              <button className="inline-block bg-emerald-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">Booked dates</button>
            </Link>
            <Link to="/BookingForm">
              <button className="inline-block bg-emerald-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition gap-3">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Poolabt

