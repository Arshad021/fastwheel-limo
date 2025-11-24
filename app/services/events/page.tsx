import Link from "next/link";

export default function Page() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Banner */}
      <div className="relative bg-black text-white rounded-2xl shadow-lg mb-16 h-[300px] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/buildings.jpg"
          alt="Events Limousine"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Events Limousine
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Arrive in style to weddings, parties, and corporate events with our
            luxury limousines and professional chauffeurs.
          </p>
        </div>
      </div>

      {/* Two Column Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        {/* Left Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/womens-drinking.jpg"
            alt="Events Chauffeur Service"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Luxury for Every Occasion
          </h2>
          <p className="text-gray-700">
            From weddings and proms to gala dinners and concerts, our event
            limousine service ensures you arrive on time and in elegance. We
            provide tailored solutions to make your special day unforgettable.
          </p>
          <p className="text-gray-700">
            Choose from a fleet of premium limos, party buses, and luxury SUVs —
            all driven by courteous chauffeurs who make your comfort the top
            priority.
          </p>
          <Link
            href="/book"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-bold transition"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Fleet Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Fleet for Events
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Car Card */}
          {[
            {
              title: "Stretch Limousine",
              desc: "The ultimate luxury ride for weddings and VIP events.",
              img: "https://www.fastwheelslimo.com/wp-content/uploads/2021/06/Lincoln-MKTw.jpg",
            },
            {
              title: "Party Bus",
              desc: "Perfect for groups heading to parties, concerts, or clubs.",
              img: "https://www.fastwheelslimo.com/wp-content/uploads/2021/10/Sprinter_Bus.jpg",
            },
            {
              title: "Luxury SUV",
              desc: "Spacious and elegant — great for red carpet arrivals.",
              img: "https://www.fastwheelslimo.com/wp-content/uploads/2021/06/GMC-Yuk.png",
            },
          ].map((car, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
            >
              <img
                src={car.img}
                alt={car.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{car.title}</h3>
                <p className="text-gray-600 mb-4">{car.desc}</p>
                <Link
                  href="/book"
                  className="text-yellow-600 font-bold hover:underline"
                >
                  Book Now →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center">
        <Link
          href="/book"
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-bold text-lg transition"
        >
          Reserve Your Event Limo
        </Link>
      </div>
    </section>
  );
}
