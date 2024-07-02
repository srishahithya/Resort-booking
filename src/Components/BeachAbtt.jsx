import React from 'react'

function BeachAbtt() {
  return (
    <div className="bg-gray-100 py-10">
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <h2 className="text-3xl font-bold text-gray-800 mb-3">Palette,East Coast Road,Chennai</h2>
      <div className="flex flex-wrap">
        <img className="w-1/2 h-64 object-cover" src="https://th.bing.com/th/id/R.3e834fc3195054d8be88371419d917e7?rik=pq6Gj%2fxv7UFpXA&riu=http%3a%2f%2fwww.idesignarch.com%2fwp-content%2fuploads%2fBeachfront-Estate-Maui_23.jpg&ehk=4zGh9ZpA5JzpLsN1dRmPs3VNUD1skZ4t3NwLtdrBwTU%3d&risl=&pid=ImgRaw&r=0" alt="Beach Front Resort 3" />
        <img className="w-1/2 h-64 object-cover" src="https://i.pinimg.com/originals/fb/44/47/fb44479603d03126007b02e9907e7fc2.jpg" alt="Beach Front Resort 4" />
      </div>
      <div className="p-6">
      <p className="text-black font-medium text-start">₹3500 per day</p>
        
        <p className="text-emerald-700 font-bold text-start">Location: Palette,East Coast Road,Chennai</p>
        <p className="text-black font-medium text-start">Located along the stunning shores of Allappey, Marari Beach Resort offers an unparalleled beachfront experience with luxurious amenities and breathtaking ocean views. Our 5-star resort is known for its modern design, impeccable service, and prime location, making it the perfect destination for both relaxation and adventure.</p>
        <h3 className="text-2xl font-semibold text-emerald-800 mb-2 text-start">Features:</h3>
        <div className="flex flex-col text-start">
          <p><strong>Elegant Rooms & Suites:</strong> Experience comfort and style with rooms that offer panoramic views of the ocean.</p>
          <p><strong>Dining:</strong> Savor exquisite dishes at our beachfront restaurant or enjoy a drink at the sunset bar.</p>
          <p><strong>Wellness:</strong> Relax and rejuvenate at our full-service spa offering a variety of treatments.</p>
          <p><strong>Activities:</strong> Engage in water sports, take a dip in our infinity pool, or unwind on our private beach.</p>
          <p><strong>Events:</strong> Host your special events in our versatile venues with stunning ocean backdrops.</p>
        </div>
        <h3 className="text-2xl font-semibold text-emerald-800 mb-2 text-start">Nearby Attractions:</h3>
        <div className="flex flex-col text-start">
          <p>Malibu Pier (5-minute drive)</p>
          <p>Santa Monica Pier (20-minute drive)</p>
          <p>Zuma Beach (15-minute drive)</p>
          <p>Malibu Wine Safari (25-minute drive)</p>
        </div>
        <h3 className="text-2xl font-semibold text-emerald-800 mb-2 text-start">Reviews:</h3>
        <p className="text-start">"A truly magical place! The service is exceptional. Perfect for a romantic getaway." - Sarah L.</p>
        <p className="text-start">"Absolutely loved our stay! The resort offers everything you need for a relaxing and enjoyable vacation." - John D.</p>
        <div className="mt-6 py-6 flex flex-row gap-11">
        <Link to ="/BookedDates"><button className="inline-block bg-emerald-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">Booked dates</button></Link>
        <Link to = "/BookingForm"><button className="inline-block bg-emerald-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition gap-3">Book Now</button></Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BeachAbtt
