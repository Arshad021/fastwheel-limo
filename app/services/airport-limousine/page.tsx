// src/app/services/airport-limousine/page.tsx

export default function AirportLimousinePage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Banner */}
      <div className="relative bg-black text-white rounded-2xl shadow-lg mb-16 h-[300px] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/pexels-pixabay-69121.jpg"
          alt="Airport Limousine"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Airport Limousine
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Luxury airport transfers designed for comfort, punctuality, and elegance.
          </p>
        </div>
      </div>

      {/* Two Column Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/air.jpg"
            alt="Luxury Airport Ride"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Stress-Free Airport Travel
          </h2>
          <p className="text-gray-700">
            FastWheels Limo provides seamless airport limousine services, ensuring your journey
            starts and ends in comfort. Whether for business or leisure, our chauffeurs are trained
            to deliver reliability and sophistication.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>On-time pickups & drop-offs</li>
            <li>Flight tracking to adjust to delays</li>
            <li>Luxury amenities for a relaxing ride</li>
            <li>Professional, courteous chauffeurs</li>
          </ul>
          <p className="text-gray-700">
            Book now and enjoy a premium travel experience from the moment you leave your door to
            the airport terminal.
          </p>
        </div>
      </div>
    </section>
  );
}
