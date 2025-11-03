import Image from "next/image"
import Link from "next/link"

export default function ServicesPreview() {
  const services = [
    {
      title: "Airport Limousine",
      slug: "airport-limousine",
      description: "Reliable and comfortable rides to and from the airport.",
      image: "https://www.fastwheelslimo.com/wp-content/uploads/2021/06/air.jpg",
    },
    {
      title: "Wedding Limousine",
      slug: "wedding-limousine",
      description:
        "Make your special day unforgettable with our luxury wedding limousines.",
      image: "https://www.fastwheelslimo.com/wp-content/uploads/2021/06/wedding-limo.jpg",
    },
    {
      title: "Night Out Ride Limousine",
      slug: "night-out-ride-limousine",
      description:
        "Enjoy your night out in style and safety with our premium rides.",
      image: "https://www.fastwheelslimo.com/wp-content/uploads/2021/06/pexels-chad-kirchoff-952437.jpg",
    },
    {
      title: "Casino Limousine",
      slug: "casino-limousine",
      description:
        "Arrive at the casino in style and enjoy a VIP experience all night long.",
      image: "https://www.fastwheelslimo.com/wp-content/uploads/2021/06/pexels-drew-rae-1871508-1.jpg",
    },
  ]

  return (
    <section className="py-20 max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-900">
        Our Premium Services
      </h2>

      <div className="flex flex-col gap-20">
        {services.map((s, index) => (
          <div
            key={s.slug}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{s.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{s.description}</p>

              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href="tel:+17744342262"
                  className="border border-yellow-500 text-yellow-600 px-6 py-2 rounded-full font-medium hover:bg-yellow-500 hover:text-black transition"
                >
                  Call Now
                </a>
                <Link
                  href="/book"
                  className="bg-yellow-500 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-600 transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
