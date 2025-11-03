import Link from 'next/link'

const services = [
  { slug: 'airport-limousine', title: 'Airport Transfers' },
  { slug: 'wedding-limousine', title: 'Wedding Limousine' },
  { slug: 'night-out-ride-limousine', title: 'Night Out Ride Limousine' },
  { slug: 'prom-limousine', title: 'Prom Limousine' },
  { slug: 'corporate-travel', title: 'Corporate Travel' },
  { slug: 'point-to-point', title: 'Point to Point' },
  { slug: 'hourly-chauffeur', title: 'Hourly Chauffeur' },
  { slug: 'city-to-city', title: 'City to City' },
  { slug: 'roadshows', title: 'Roadshows' },
  { slug: 'events', title: 'Events & Concerts' },
  { slug: 'business-van', title: 'Business Van' },
  { slug: 'casino-limousine', title: 'Casino Limousine' },
  { slug: 'bachelor-parties-limousine', title: 'Bachelor Parties Limousine' },
]

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-center mb-10">Services</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map(s=>(
          <Link key={s.slug} href={`/services/${s.slug}`} className="p-6 border rounded-lg hover:shadow bg-white">
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="text-gray-600 mt-2">Learn more about {s.title}.</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
