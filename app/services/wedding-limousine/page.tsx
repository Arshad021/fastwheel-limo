export default function Page() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Banner */}
      <div className="relative bg-black text-white rounded-2xl shadow-lg mb-16 h-[300px] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/bernard-tuck-5BzwZ4ULocA-unsplash.jpg"
          alt="Wedding Limousine Service"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Wedding Limousine
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Make your big day unforgettable with our luxury wedding limousine
            service. Elegant rides, professional chauffeurs, and memories that
            last forever.
          </p>
        </div>
      </div>

      {/* 2-Column Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        {/* Content */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4">Arrive in Style</h2>
          <p className="text-gray-600 mb-6">
            From the bride’s grand entrance to transporting your guests, our
            fleet of luxury limousines is tailored to make your wedding day
            extraordinary. Every detail is designed with elegance and comfort in
            mind.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Luxurious fleet with premium interiors</li>
            <li>Professional, courteous chauffeurs</li>
            <li>Customized wedding packages</li>
          </ul>
          <a
            href="/book"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-bold transition"
          >
            Reserve Your Limo
          </a>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/wedding-limo.jpg"
            alt="Wedding Limousine"
            className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="/book"
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-bold transition"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}
