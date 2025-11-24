export default function SafetySecurity(){
  const bullets = [
    "Chauffeurs pass rigorous background checks",
    "Ongoing safety training & regular on-site audits",
    "Highest industry standards, your wellbeing first"
  ]
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-extrabold">
            Safety and <span className="text-yellow-500">Security</span>
          </h2>
          <p className="mt-4 text-gray-700">
            We are dedicated to keeping you safe and secure while traveling. Our chauffeurs adhere to strict protocols.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700 list-disc pl-5">
            {bullets.map((b,i)=>(<li key={i}>{b}</li>))}
          </ul>
        </div>

        {/* Right Side with Background Image */}
        <div
          className="aspect-video rounded-2xl bg-cover bg-center shadow-md"
          style={{ backgroundImage: "url('https://www.fastwheelslimo.com/wp-content/uploads/2024/07/Luxury-Airport-Transfer-Service-in-Miami-1.jpg')" }}
        />
      </div>
    </section>
  )
}
