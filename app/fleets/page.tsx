import Link from "next/link";

const fleet = [
  // Sedans & Executive Cars
  {
    title: "Lincoln MKT",
    desc: "Executive sedan offering refined comfort for business or airport travel.",
    image:
      "https://www.fastwheelslimo.com/wp-content/uploads/2021/06/8f5677_1cab5fd44e954c7f96f4a16e5c3776a9mv2.jpg",
    pax: 3,
    luggage: 3,
  },
  {
    title: "Lincoln Aviator",
    desc: "A luxury mid-size SUV with advanced tech and smooth performance.",
    image: "https://d2ivfcfbdvj3sm.cloudfront.net/6Oq1_tGrCwPa7CTg/51558/stills_0640_png/MY2023/51558/51558_st0640_116.webp?c=172&p=164&m=1&o=png&s=mMTeoCKnzODERCG_q17VRB",
    pax: 4,
    luggage: 4,
  },
  {
    title: "Mercedes S480",
    desc: "Top-tier luxury sedan combining comfort, style, and innovation.",
    image: "https://www.fastwheelslimo.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-24-at-1.08.38-PM-1.jpeg",
    pax: 3,
    luggage: 3,
  },
  {
    title: "Chrysler 300 Executive",
    desc: "Premium sedan with a luxurious cabin and smooth ride.",
    image:
      "https://www.fastwheelslimo.com/wp-content/uploads/2021/06/8f5677_3e98dfd855674fc8a76a0770c5c502bfmv2.png",
    pax: 3,
    luggage: 3,
  },

  // SUVs
  {
    title: "Chevrolet Suburban",
    desc: "Spacious luxury SUV ideal for family or group transfers.",
    image: "https://www.fastwheelslimo.com/wp-content/uploads/2021/06/Chev-Suburban.jpg",
    pax: 6,
    luggage: 4,
  },
  {
    title: "GMC Yukon Denali",
    desc: "High-end SUV with powerful performance and comfort.",
    image: "https://www.fastwheelslimo.com/wp-content/uploads/2021/06/GMC-Yuk.png",
    pax: 6,
    luggage: 5,
  },
  {
    title: "Cadillac Escalade ESV",
    desc: "Iconic luxury SUV offering ultimate space and prestige.",
    image: "https://www.fastwheelslimo.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-24-at-1.08.38-PM-2-1.jpeg",
    pax: 7,
    luggage: 6,
  },

  // Vans & Limos
  {
    title: "Mercedes Sprinter",
    desc: "Comfortable van for teams, corporate groups, or events.",
    image: "https://www.fastwheelslimo.com/wp-content/uploads/2021/10/Sprinter_Bus.jpg",
    pax: 10,
    luggage: 10,
  },
  {
    title: "Lincoln MKT Limousine",
    desc: "Elegant stretch limo perfect for weddings or corporate events.",
    image: "https://www.fastwheelslimo.com/wp-content/uploads/2021/06/Lincoln-MKTw.jpg",
    pax: 10,
    luggage: 6,
  },
  {
    title: "Dodge Durango Limousine",
    desc: "Stylish stretch limousine with luxury seating and LED interior.",
    image: "https://www.fastwheelslimo.com/wp-content/uploads/2021/06/dodge-durango-limo.jpg",
    pax: 14,
    luggage: 8,
  },
  {
    title: "Chrysler 300 Stretch Limo",
    desc: "Sleek and modern stretch limousine for up to 14 passengers.",
    image: "https://www.fastwheelslimo.com/wp-content/uploads/2021/06/Chrysler-300.jpg",
    pax: 14,
    luggage: 6,
  },

  // Buses
  {
    title: "Mini Bus",
    desc: "Ideal for medium groups, airport transfers, and corporate events.",
    image: "https://www.fastwheelslimo.com/wp-content/uploads/2021/06/mini-bus.jpg",
    pax: 25,
    luggage: 20,
  },
  {
    title: "Luxury Coach Bus",
    desc: "Spacious and elegant 45-passenger bus for large groups or tours.",
    image: "https://www.fastwheelslimo.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-24-at-1.08.37-PM.jpeg",
    pax: 45,
    luggage: 40,
  },
  {
    title: "Party Bus",
    desc: "Vibrant 22-passenger bus with lighting, sound system, and luxury interior.",
    image: "https://www.fastwheelslimo.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-24-at-1.08.37-PM-1.jpeg",
    pax: 22,
    luggage: 10,
  },
];

export default function Fleets() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900">Our Fleet</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our collection of luxury sedans, SUVs, limousines, and buses — each maintained to
          deliver a premium experience for your travels, events, and business rides.
        </p>
      </div>

      {/* Fleet Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {fleet.map((car, i) => (
          <div
            key={i}
            className="bg-white border rounded-2xl shadow-md hover:shadow-2xl transition-all overflow-hidden flex flex-col hover:-translate-y-1 duration-300"
          >
            <img
              src={car.image}
              alt={car.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-xl font-semibold mb-2 text-gray-900">{car.title}</h2>
              <p className="text-gray-600 text-sm mb-4 flex-1">{car.desc}</p>

              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>👤 {car.pax} Passengers</span>
                <span>🧳 {car.luggage} Luggage</span>
              </div>

              <Link
                href={`/book?vehicle=${encodeURIComponent(car.title)}`}
                className="mt-auto inline-block text-center bg-yellow-400 text-black font-semibold py-2.5 rounded-lg hover:bg-yellow-500 transition-all"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Button (Mobile Only) */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 block md:hidden">
        <Link
          href="/book"
          className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all"
        >
          📞 Book Now
        </Link>
      </div>
    </section>
  );
}
