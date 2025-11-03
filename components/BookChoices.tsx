import Link from 'next/link'
const cities = ["Boston","Chicago","New York","Miami","Other Cities","Greeter Only"]
export default function BookChoices(){
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Select Your City</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cities.map((c,i)=>(
            <Link key={i} href="/book" className="border rounded-xl p-6 text-center hover:shadow">
              <span className="font-semibold">{c}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
