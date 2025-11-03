import Link from "next/link";

export default function Page() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Banner */}
      <div className="relative bg-black text-white rounded-2xl shadow-lg mb-16 h-[300px] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/buildings.jpg"
          alt="Hourly Chauffeur Service"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Hourly Chauffeur
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional hourly chauffeur service with fixed rates, on-time
            pickups, and premium vehicles for your convenience.
          </p>
        </div>
      </div>

      {/* 2-Column Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        {/* Content */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4">Flexibility & Comfort</h2>
          <p className="text-gray-600 mb-6">
            Whether it’s a business meeting, city shopping, or an evening out,
            our hourly chauffeur service is designed to give you maximum
            flexibility. Enjoy premium comfort, dedicated drivers, and a smooth
            travel experience on your schedule.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Flexible hourly bookings</li>
            <li>Luxury vehicles with Wi-Fi & amenities</li>
            <li>Dedicated professional chauffeurs</li>
          </ul>
          <Link
            href="/book"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-bold transition"
          >
            Reserve Now
          </Link>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://www.fastwheelslimo.com/wp-content/uploads/2024/07/banner3.png"
            alt="Hourly Chauffeur Ride"
            className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/book"
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-bold transition"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
