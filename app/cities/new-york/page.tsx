import FleetCard from "@/components/FleetCard"
import ContactForm from "@/components/ContactForm"

const fleet = [
  { title: 'Executive Sedan Class', desc: 'Comfortable executive sedans for business travel.', image: 'https://www.fastwheelslimo.com/wp-content/uploads/2021/06/8f5677_1cab5fd44e954c7f96f4a16e5c3776a9mv2.jpg', pax:3, luggage:3 },
    { title: 'First Class Sedan', desc: 'Luxury sedans with Wi-Fi on request.', image: 'https://www.fastwheelslimo.com/wp-content/uploads/2021/06/8f5677_3e98dfd855674fc8a76a0770c5c502bfmv2.png', pax:3, luggage:3 },
    { title: 'SUV Executive', desc: 'Spacious SUVs for groups.', image: 'https://www.fastwheelslimo.com/wp-content/uploads/2021/06/Chev-Suburban.jpg', pax:6, luggage:4 },
]

export default function BostonPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-16">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4">New York Limousine Service</h1>
        <p className="text-lg text-gray-600">
          Premium limo service in New York with airport transfers, corporate rides & more.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8">Available Fleet in New York</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {fleet.map((c,i)=>(<FleetCard key={i} {...c} />))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8">Book Your Ride in New York</h2>
        <ContactForm />
      </div>
    </section>
  )
}
