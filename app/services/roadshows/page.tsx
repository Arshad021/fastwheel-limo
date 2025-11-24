import Link from "next/link";

export default function Page() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Hero Banner */}
      <div className="relative bg-black text-white rounded-2xl shadow-lg mb-16 h-[300px] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://www.fastwheelslimo.com/wp-content/uploads/2024/07/Luxury-Airport-Transfer-Service-in-Miami-1.jpg"
          alt="Roadshow Limousine Service"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Roadshows</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional roadshow limousine service with reliable scheduling, 
            luxury vehicles, and experienced chauffeurs to keep you on track.
          </p>
        </div>
      </div>

      {/* 2-Column Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        {/* Content */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4">Seamless Corporate Roadshows</h2>
          <p className="text-gray-600 mb-6">
            Whether you’re presenting to clients, attending meetings across 
            multiple locations, or managing an investor roadshow, our 
            limousine service ensures punctuality, comfort, and efficiency.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Dedicated scheduling & route planning</li>
            <li>Luxury sedans, SUVs, & limousines</li>
            <li>Professional chauffeurs with corporate experience</li>
          </ul>
          <Link
            href="/book"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-bold transition"
          >
            Book Now
          </Link>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/prom.jpg"
            alt="Corporate Roadshow Limousine"
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
          Reserve Your Roadshow Limo
        </Link>
      </div>
    </section>
  );
}
