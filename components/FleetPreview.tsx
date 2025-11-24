import FleetCard from './FleetCard'
export default function FleetPreview(){
  const fleet = [
    { title: 'Executive Sedan Class', desc: 'Comfortable executive sedans for business travel.', image: 'https://www.fastwheelslimo.com/wp-content/uploads/2021/06/8f5677_1cab5fd44e954c7f96f4a16e5c3776a9mv2.jpg', pax:3, luggage:3 },
    { title: 'First Class Sedan', desc: 'Luxury sedans with Wi-Fi on request.', image: 'https://www.fastwheelslimo.com/wp-content/uploads/2021/06/8f5677_3e98dfd855674fc8a76a0770c5c502bfmv2.png', pax:3, luggage:3 },
    { title: 'SUV Executive', desc: 'Spacious SUVs for groups.', image: 'https://www.fastwheelslimo.com/wp-content/uploads/2021/06/Chev-Suburban.jpg', pax:6, luggage:4 },
  ]
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Fleet</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {fleet.map((f,i)=>(<FleetCard key={i} {...f}/>))}
      </div>
    </section>
  )
}
