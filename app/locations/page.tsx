'use client'
import Image from 'next/image'

export default function Locations() {
  const cities = [
    { name: "Boston", desc: "Luxury chauffeur rides in the heart of Massachusetts.", image: "/images/locations/boston.jpg" },
    { name: "Cambridge", desc: "Professional airport and corporate transfers.", image: "/images/locations/cambridge.jpg" },
    { name: "Newton", desc: "Comfortable rides with professional chauffeurs.", image: "/images/locations/newton.jpg" },
    { name: "Worcester", desc: "Seamless travel for business and leisure.", image: "/images/locations/worcester.jpg" },
    { name: "Quincy", desc: "Elegant limo service for every occasion.", image: "/images/locations/quincy.jpg" },
    { name: "Framingham", desc: "Reliable transportation with a touch of class.", image: "/images/locations/framingham.jpg" },
    { name: "Medford", desc: "Premium rides for events, airport, and city trips.", image: "/images/locations/medford.jpg" },
    { name: "Taunton", desc: "Effortless luxury transportation in your city.", image: "/images/locations/taunton.jpg" },
  ]

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900 tracking-tight">
          Explore Our <span className="text-yellow-500">Service Locations</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          Experience luxury chauffeur service across Massachusetts and beyond.  
          Choose your city and ride in style.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl shadow-lg bg-black/10 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover brightness-75 group-hover:scale-110 transition-transform duration-700"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* City name + overlay text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <h3 className="text-3xl font-semibold text-white drop-shadow-md">{city.name}</h3>
                  <p className="text-gray-200 text-sm mt-2 leading-relaxed">{city.desc}</p>
                  <a
                    href={`/book?city=${encodeURIComponent(city.name)}`}
                    className="inline-block mt-4 text-yellow-400 font-medium hover:text-yellow-300 transition-colors"
                  >
                    Book a Ride →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative blurred lights */}
      <div className="absolute -top-24 -left-20 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-200/30 rounded-full blur-3xl"></div>
    </section>
  )
}
