import React from 'react'
import { Link } from 'react-router-dom'

function Lakeabt() {
  return (
    <div className="bg-gray-100 py-10">
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <h2 className="text-3xl font-bold text-gray-800 mb-3">Lakefront Resort</h2>
      <div className="flex flex-wrap">
        <img className="w-1/2 h-64 object-cover" src="https://webmedia.westgateresorts.com/prometheus/getImage?id=40137" alt="Lakefront Resort 1" />
        <img className="w-1/2 h-64 object-cover" src="https://i.pinimg.com/originals/49/ca/6b/49ca6b1618b2911a4240f5a177d65d1d.jpg" alt="Lakefront Resort 2" />
      </div>
      <div className="p-6">
        <p className="text-black font-medium text-start">₹2000 per day</p>
        <p className="text-emerald-700 font-bold text-start">Location: Kerala</p>
        <p className="text-black font-medium text-start">Nestled on the serene banks of Kerala, Lakefront Resort offers an exquisite escape with luxurious amenities and picturesque lake views. Our resort combines modern elegance with nature's tranquility, making it the ideal spot for relaxation and exploration.</p>
        <h3 className="text-2xl font-semibold text-emerald-800 mb-2 text-start">Features:</h3>
        <div className="flex flex-col text-start">
          <p><strong>Luxury Accommodations:</strong> Enjoy spacious rooms with private balconies overlooking the lake.</p>
          <p><strong>Gourmet Dining:</strong> Indulge in local and international cuisine at our lakeside restaurant.</p>
          <p><strong>Spa & Wellness:</strong> Treat yourself to a range of spa services for ultimate relaxation.</p>
          <p><strong>Recreational Activities:</strong> Take part in kayaking, fishing, and nature walks.</p>
          <p><strong>Event Spaces:</strong> Host memorable events with stunning lake views.</p>
        </div>
        <h3 className="text-2xl font-semibold text-emerald-800 mb-2 text-start">Nearby Attractions:</h3>
        <div className="flex flex-col text-start">
          <p>Periyar Wildlife Sanctuary (30-minute drive)</p>
          <p>Vembanad Lake (10-minute drive)</p>
          <p>Kumarakom Bird Sanctuary (15-minute drive)</p>
          <p>Backwater Cruises (available on-site)</p>
        </div>
        <h3 className="text-2xl font-semibold text-emerald-800 mb-2 text-start">Reviews:</h3>
        <p className="text-start">"A tranquil paradise! The views are breathtaking, and the service is top-notch." - Anjali R.</p>
        <p className="text-start">"The perfect getaway. Beautiful location and excellent amenities." - Rajesh K.</p>
        <div className="mt-6 py-6 flex flex-row gap-11">
          <Link to="/BookedDates"><button className="inline-block bg-emerald-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">Booked dates</button></Link>
          <Link to="/BookingForm"><button className="inline-block bg-emerald-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">Book Now</button></Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Lakeabt
