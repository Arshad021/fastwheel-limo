import Link from "next/link";

export default function Page() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Hero Banner */}
      <div className="relative bg-black text-white rounded-2xl shadow-lg mb-16 h-[300px] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/night-out.jpg"
          alt="Night Out Limo Service"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Night Out Ride Limousine
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Arrive in style for your special night out. Luxury limousines, 
            professional chauffeurs, and unforgettable experiences.
          </p>
        </div>
      </div>

      {/* 2-Column Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4">Make Your Night Unforgettable</h2>
          <p className="text-gray-600 mb-6">
            From dinner dates and parties to concerts and clubs, our night out limousine
            service ensures you travel in luxury and safety. Leave the driving to us 
            while you enjoy your evening to the fullest.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Luxury stretch limos & SUVs</li>
            <li>Professional, discreet chauffeurs</li>
            <li>Safe & stylish night travel</li>
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
            src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/pexels-mauricio-mascaro-801863.jpg"
            alt="Night Out Limousine"
            className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
          />
        </div>
      </div>

      {/* Bottom CTA */}
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
