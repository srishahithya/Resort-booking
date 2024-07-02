import React from 'react'
import { Link } from 'react-router-dom'

function Iconicabt() {
  return (
    <div className="bg-gray-100 py-10">
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <h2 className="text-3xl font-bold text-gray-800 mb-3">FIVE Palm Jumeirah, Dubai</h2>
      <div className="flex flex-wrap">
        <img className="w-1/2 h-64 object-cover" src="https://th.bing.com/th/id/R.9b17215bee47d58c065a81a2ffa467be?rik=NdMMQi%2bxidu6yQ&riu=http%3a%2f%2fstatic1.squarespace.com%2fstatic%2f549d41a3e4b003c6ce131926%2f549da4fde4b07bee03573f24%2f58449a8a46c3c4f2f7e988c3%2f1486287298118%2fFairmontHotelVancouver.jpg%3fformat%3d1000w&ehk=Eie14rhJ%2bAuLy%2fT8LNa3kjDS6EIvGmIopGnjwikzGaI%3d&risl=&pid=ImgRaw&r=0" alt="New York City 1" />
        <img className="w-1/2 h-64 object-cover" src="https://th.bing.com/th/id/OIP.g9neYfXImuPUdIWAuU7TeQHaE8?rs=1&pid=ImgDetMain" alt="New York City 2" />
      </div>
      <div className="p-6">
        <p className="text-black font-medium text-start">Starting from $300 per night</p>
        <p className="text-emerald-700 font-bold text-start">Location: Dubai</p>
        <p className="text-black font-medium text-start">Experience the vibrant energy of New York City with luxurious accommodations, world-class dining, and iconic landmarks just steps away. Our prime location in Manhattan offers the perfect base for exploring the city's endless attractions and hidden gems.</p>
        <h3 className="text-2xl font-semibold text-emerald-800 mb-2 text-start">Highlights:</h3>
        <div className="flex flex-col text-start">
          <p><strong>Central Park:</strong> Stroll through one of the world's most famous urban parks, just minutes away.</p>
          <p><strong>Broadway Shows:</strong> Enjoy top-tier performances in the heart of the Theater District.</p>
          <p><strong>Fine Dining:</strong> Savor exquisite meals at renowned restaurants featuring diverse cuisines.</p>
          <p><strong>Shopping:</strong> Explore high-end boutiques and iconic department stores on Fifth Avenue.</p>
          <p><strong>Landmarks:</strong> Visit Times Square, the Empire State Building, and more iconic sites.</p>
        </div>
        <h3 className="text-2xl font-semibold text-emerald-800 mb-2 text-start">Nearby Attractions:</h3>
        <div className="flex flex-col text-start">
          <p>Statue of Liberty (30-minute ferry ride)</p>
          <p>Metropolitan Museum of Art (20-minute drive)</p>
          <p>Brooklyn Bridge (15-minute drive)</p>
          <p>Rockefeller Center (10-minute walk)</p>
        </div>
        <h3 className="text-2xl font-semibold text-emerald-800 mb-2 text-start">Reviews:</h3>
        <p className="text-start">"An unforgettable stay in the heart of the city! The location is unbeatable." - Emily P.</p>
        <p className="text-start">"Luxurious rooms with amazing views of the skyline. Highly recommend!" - Michael R.</p>
        <div className="mt-6 py-6 flex flex-row gap-11">
          <Link to="/BookedDates"><button className="inline-block bg-emerald-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">Booked dates</button></Link>
          <Link to="/BookingForm"><button className="inline-block bg-emerald-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">Book Now</button></Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Iconicabt
