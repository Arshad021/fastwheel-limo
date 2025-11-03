'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    pickup: '',
    dropoff: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = '/quote' // redirects to your existing quote page
  }

  return (
    <section className="relative w-full min-h-[620px] bg-black">
      <Image
        src="https://www.fastwheelslimo.com/wp-content/uploads/2024/07/banner3.png"
        alt="Hero"
        fill
        className="object-cover opacity-60"
      />

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-10 items-center text-white">
          {/* --- Left Side: Hero Content --- */}
          <div>
            <p className="uppercase tracking-widest text-yellow-400 font-semibold">
              Affordable & Reliable Chauffeur Service
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-3">
              For All Your <br className="hidden md:block" /> Transportation{' '}
              <br className="hidden md:block" /> Needs
            </h1>
            <p className="mt-5 text-lg max-w-2xl text-gray-100">
              Local, family-owned. Fixed-price rates. No hidden fees. Available
              24/7 across Boston & New England.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <Link
                href="/book"
                className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
              >
                BOOK NOW
              </Link>
              <a
                href="tel:+17744342262"
                className="border border-white/70 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
              >
                Call (+1) 774-434-2262
              </a>
              <a
                href="https://wa.me/17744342262"
                className="underline hover:text-yellow-400"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* --- Right Side: Quote Form --- */}
          <div className="bg-white text-black rounded-2xl shadow-2xl p-6 md:p-8 backdrop-blur-sm bg-opacity-95">
            <h2 className="text-2xl font-bold mb-4 text-center text-yellow-600">
              Get an Instant Quote
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg p-3"
                required
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg p-3"
                required
              />
              <input
                type="text"
                name="pickup"
                value={form.pickup}
                onChange={handleChange}
                placeholder="Pickup Location"
                className="w-full border border-gray-300 rounded-lg p-3"
                required
              />
              <input
                type="text"
                name="dropoff"
                value={form.dropoff}
                onChange={handleChange}
                placeholder="Drop-off Location"
                className="w-full border border-gray-300 rounded-lg p-3"
                required
              />

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition"
              >
                Get My Quote
              </button>
            </form>
            <p className="text-sm text-center mt-3 text-gray-500">
              We’ll respond within minutes!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
