// src/app/bachelor-parties-limousine/page.tsx

export default function Page() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Banner */}
      <div className="relative bg-black text-white rounded-2xl shadow-lg mb-16 h-[300px] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/pexels-chan-walrus-941864.jpg"
          alt="Bachelor Parties Limousine"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Bachelor Parties Limousine
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Celebrate your special night in ultimate luxury and style with our
            exclusive bachelor party limousine service.
          </p>
        </div>
      </div>

      {/* Two Column Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        {/* Left Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/party-limo.jpg"
            alt="Party Limo Experience"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Unforgettable Bachelor Nights
          </h2>
          <p className="text-gray-700">
            Turn your bachelor party into an unforgettable experience. Our
            limousines are fully equipped with luxurious seating, ambient
            lighting, entertainment systems, and refreshments to keep the
            celebration going.
          </p>
          <p className="text-gray-700">
            Whether you’re planning a night out with friends, club hopping, or a
            private celebration, FastWheel ensures safe, stylish, and fun travel
            for the groom-to-be and his crew.
          </p>
        </div>
      </div>
    </section>
  );
}
