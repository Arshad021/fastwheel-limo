import FleetCard from '../../components/FleetCard'

const fleet = [
  { title: 'Lincoln MKT', desc: 'Comfortable executive sedans.', image: 'https://www.fastwheelslimo.com/wp-content/uploads/2021/06/8f5677_1cab5fd44e954c7f96f4a16e5c3776a9mv2.jpg', pax: 3, luggage: 3 },
  { title: 'Chrysler 300 Executive', desc: 'Premium sedans, leather interiors.', image: 'https://www.fastwheelslimo.com/wp-content/uploads/2021/06/8f5677_3e98dfd855674fc8a76a0770c5c502bfmv2.png', pax: 3, luggage: 3 },
  { title: 'Chevrolet Suburban', desc: 'Spacious SUVs for groups.', image: 'https://www.fastwheelslimo.com/wp-content/uploads/2021/06/Chev-Suburban.jpg', pax: 6, luggage: 4 },
  { title: 'GMC Yukon', desc: 'Black-on-black luxury SUVs.', image: 'https://www.fastwheelslimo.com/wp-content/uploads/2021/06/GMC-Yuk.png', pax: 6, luggage: 5 },
  { title: 'Mercedes Sprinter', desc: 'Comfortable van for teams.', image: 'https://www.fastwheelslimo.com/wp-content/uploads/2021/10/Sprinter_Bus.jpg', pax: 10, luggage: 10 },
  { title: 'Chrysler 300', desc: 'Perfect for weddings & events.', image: 'https://www.fastwheelslimo.com/wp-content/uploads/2021/06/Lincoln-MKTw.jpg', pax: 8, luggage: 6 },
  { title: 'Lincoln MKT', desc: 'Perfect for weddings & events.', image: 'https://www.fastwheelslimo.com/wp-content/uploads/2021/06/Chrysler-300.jpg', pax:8, luggage: 6 },
 
]

export default function Fleets() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-center mb-10">Our Fleet</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {fleet.map((c,i)=>(
          <div key={i} className="border rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col">
            <FleetCard {...c} />
            
          </div>
        ))}
      </div>
    </section>
  )
}
