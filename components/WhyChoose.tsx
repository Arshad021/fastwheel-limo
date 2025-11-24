const items = [
  "Affordable & reliable — best price in town",
  "No hidden fees — free cancellation within 6hrs",
  "24/7 customer support",
  "Infant & toddler car seats on request",
  "Flight tracking for on-time pickups",
  "Experienced, punctual chauffeurs",
  "Live arrival alerts",
  "Meet & greet at gate or baggage claim",
  "Discounts for frequent travelers",
  "Highest standards of safety & discretion"
]

export default function WhyChoose(){
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Text */}
        <div>
          <h3 className="uppercase tracking-widest text-yellow-500 font-semibold">
            Why Choose
          </h3>
          <h2 className="text-4xl font-extrabold">FastWheel Limo</h2>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {items.map((t,i)=>(
              <li key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                <span className="text-yellow-500 font-bold">✓</span>
                <span className="text-gray-700">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Image */}
        <div
          className="aspect-square rounded-2xl bg-cover bg-center shadow-md"
          style={{ backgroundImage: "url('https://www.fastwheelslimo.com/wp-content/uploads/2024/07/banner3.png')" }}
        />
      </div>
    </section>
  )
}
