import Link from "next/link"

export default function Cities(){
  const cities = [
    { name: 'Boston', slug: 'boston', img: 'https://plus.unsplash.com/premium_photo-1694475434235-12413ec38b3e?q=80&w=1740&auto=format&fit=crop' },
    { name: 'Cambridge', slug: 'cambridge', img: '/images/adam-jones-gKOAyHyxT2Q-unsplash.jpg' },
    { name: 'Worcester', slug: 'worcester', img: '/images/adam-jones-gKOAyHyxT2Q-unsplash.jpg' },
    { name: 'Springfield', slug: 'springfield', img: '/images/adam-jones-gKOAyHyxT2Q-unsplash.jpg' },
  ]

  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-5 gap-6">
        {/* Left Panel */}
        <div className="col-span-2 bg-black text-white rounded-2xl p-10 flex flex-col justify-center">
          <h3 className="text-4xl font-extrabold mb-4">Top Cities</h3>
          <p className="text-gray-300 mb-6">
            Discover your one-stop travel shop: long-distance rides, airport transfers, and more.
          </p>
          <Link href="/locations">
            <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition">
              All Cities
            </button>
          </Link>
        </div>

        {/* City Cards */}
        <div className="col-span-3 grid grid-cols-2 gap-6">
          {cities.map((c,i)=>(
            <Link key={i} href={`/cities/${c.slug}`} className="block">
              <div className="relative rounded-2xl overflow-hidden shadow-lg group h-64">
                <img 
                  src={c.img} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt={c.name}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold tracking-wide">{c.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
