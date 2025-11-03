// src/app/casino-limousine/page.tsx

export default function Page() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Banner */}
      <div className="relative bg-black text-white rounded-2xl shadow-lg mb-16 h-[300px] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/pexels-drew-rae-1871508-1.jpg"
          alt="Casino Limousine Service"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Casino Limousine
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Arrive at the casino in unmatched style and elegance with our luxury
            limousine service.
          </p>
        </div>
      </div>

      {/* Two Column Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        {/* Left Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/casinotable.jpg"
            alt="Casino Night in a Limo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Luxury Casino Experience
          </h2>
          <p className="text-gray-700">
            Our Casino Limousine service ensures you arrive in grandeur. With a
            professional chauffeur, plush interiors, and top-notch amenities,
            your casino night starts the moment you step inside the limo.
          </p>
          <p className="text-gray-700">
            Whether it’s a night of gaming, dining, or entertainment, FastWheel
            makes sure your trip is safe, seamless, and sophisticated — leaving
            you free to enjoy the thrill of the night.
          </p>
        </div>
      </div>
    </section>
  );
}
